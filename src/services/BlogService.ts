import { UserPut } from '../components/EditProfileForm/EditProfileForm';
import { IPostArticle } from '../types/CreateArticle';
import { IPutArticle } from '../types/EditArticle';
import { IArticle } from '../types/LoadAnArticle';
import { IUserPost } from '../types/SignUser';

import { getCookie, getDataFromResponses } from './BlogFunctions';

const user = {
  username: '',
  email: '',
  token: '',
  bio: '',
  image: '',
  updated: false,
};

export default class BlogService {
  _url = import.meta.env.VITE_UNSPLASH_URL || 'https://blog.kata.academy/api'; ; 

  getArticlesGlobally = async (offset = 0) => {
    const token = getCookie('kataBlogToken');
    const newObj = { articles: [], articlesCount: 0, page: 1 };

    try {
      const response = await fetch(`${this._url}/articles?limit=5&offset=${offset}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Token ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        newObj.articles = data.articles;
        newObj.articlesCount = data.articlesCount;
      } else {
        throw new Error('Received non-JSON response');
      }

      if (offset !== 0) newObj.page = (offset + 5) / 5;
    } catch (error) {
      console.error('Ошибка при получении статей:', error);
    }

    return newObj;
  };

  getAnArticle = async (slug: string | undefined | null) => {
    const token = getCookie('kataBlogToken');
    let newObj: IArticle = {
      slug: '',
      title: '',
      favoritesCount: 0,
      tagList: [],
      author: {
        following: false,
        image: '',
        username: '',
      },
      createdAt: '',
      description: '',
      body: '',
    };

    try {
      const response = await fetch(`${this._url}/articles/${slug}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Token ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        newObj = { ...data.article };
      } else {
        throw new Error('Received non-JSON response');
      }
    } catch (error) {
      console.error('Ошибка при получении статьи:', error);
    }

    return newObj;
  };

  postNewArticle = async (article: IPostArticle) => {
    const token = getCookie('kataBlogToken');
    const storeObj = {
      article: {} as IArticle,
    };

    try {
      const response = await fetch(`${this._url}/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(article),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        storeObj.article = data.article;
      } else {
        throw new Error('Received non-JSON response');
      }
    } catch (error) {
      console.error('Ошибка при создании новой статьи:', error);
    }

    return storeObj;
  };

  putEditArticle = async (article: IPutArticle, slug: string | undefined) => {
    const token = getCookie('kataBlogToken');
    const storeObj = {
      article: {} as IArticle,
    };

    try {
      const response = await fetch(`${this._url}/articles/${slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(article),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        storeObj.article = data.article;
      } else {
        throw new Error('Received non-JSON response');
      }
    } catch (error) {
      console.error('Ошибка при редактировании статьи:', error);
    }

    return storeObj;
  };

  deleteArticle = async (slug: string | undefined) => {
    const token = getCookie('kataBlogToken');

    try {
      const response = await fetch(`${this._url}/articles/${slug}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Token ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Ошибка при удалении статьи:', error);
    }
  };

  postFavoriteArticle = async (slug: string | undefined) => {
    const token = getCookie('kataBlogToken');

    try {
      const response = await fetch(`${this._url}/articles/${slug}/favorite`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Token ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Ошибка при добавлении статьи в избранное:', error);
    }
  };

  deleteFavoriteOnArticle = async (slug: string | undefined) => {
    const token = getCookie('kataBlogToken');

    try {
      const response = await fetch(`${this._url}/articles/${slug}/favorite`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Token ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Ошибка при удалении статьи из избранного:', error);
    }
  };

  postSignUpUser = async (userPost: IUserPost) => {
    const newObj = {
      user,
      errors: {},
    };

    try {
      const responseSignUp = await fetch(`${this._url}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userPost),
      });

      return getDataFromResponses(responseSignUp, newObj, this._url);
    } catch (error) {
      console.error('Ошибка при регистрации пользователя:', error);
      return newObj;
    }
  };

  postSignInUser = async (userPost: IUserPost) => {
    const newObj = {
      user,
      errors: {},
    };

    try {
      const responseSignIn = await fetch(`${this._url}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userPost),
      });

      return getDataFromResponses(responseSignIn, newObj, this._url);
    } catch (error) {
      console.error('Ошибка при авторизации пользователя:', error);
      return newObj;
    }
  };

  putEditProfile = async (userPut: UserPut) => {
    const token = getCookie('kataBlogToken');
    const newObj = {
      user,
      errors: {},
    };

    try {
      const response = await fetch(`${this._url}/user`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(userPut),
      });

      if (response.status === 422) {
        await response.json().then((obj) => {
          newObj.errors = obj.errors;
        });

        return newObj;
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        newObj.user = data.user;
        newObj.user.updated = true;
        newObj.errors = {};
      } else {
        throw new Error('Received non-JSON response');
      }

      localStorage.setItem('blogKataUsername', newObj.user.username);
      localStorage.setItem('blogKataImage', newObj.user.image);
    } catch (error) {
      console.error('Ошибка при редактировании профиля:', error);
    }

    return newObj;
  };
}
 