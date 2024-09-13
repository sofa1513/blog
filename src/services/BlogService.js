var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    constructor() {
        this._url = import.meta.env.VITE_UNSPLASH_URL || 'https://blog.kata.academy/api';
        this.getArticlesGlobally = (...args_1) => __awaiter(this, [...args_1], void 0, function* (offset = 0) {
            const token = getCookie('kataBlogToken');
            const newObj = { articles: [], articlesCount: 0, page: 1 };
            try {
                const response = yield fetch(`${this._url}/articles?limit=5&offset=${offset}`, {
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
                    const data = yield response.json();
                    newObj.articles = data.articles;
                    newObj.articlesCount = data.articlesCount;
                }
                else {
                    throw new Error('Received non-JSON response');
                }
                if (offset !== 0)
                    newObj.page = (offset + 5) / 5;
            }
            catch (error) {
                console.error('Ошибка при получении статей:', error);
            }
            return newObj;
        });
        this.getAnArticle = (slug) => __awaiter(this, void 0, void 0, function* () {
            const token = getCookie('kataBlogToken');
            let newObj = {
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
                const response = yield fetch(`${this._url}/articles/${slug}`, {
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
                    const data = yield response.json();
                    newObj = Object.assign({}, data.article);
                }
                else {
                    throw new Error('Received non-JSON response');
                }
            }
            catch (error) {
                console.error('Ошибка при получении статьи:', error);
            }
            return newObj;
        });
        this.postNewArticle = (article) => __awaiter(this, void 0, void 0, function* () {
            const token = getCookie('kataBlogToken');
            const storeObj = {
                article: {},
            };
            try {
                const response = yield fetch(`${this._url}/articles`, {
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
                    const data = yield response.json();
                    storeObj.article = data.article;
                }
                else {
                    throw new Error('Received non-JSON response');
                }
            }
            catch (error) {
                console.error('Ошибка при создании новой статьи:', error);
            }
            return storeObj;
        });
        this.putEditArticle = (article, slug) => __awaiter(this, void 0, void 0, function* () {
            const token = getCookie('kataBlogToken');
            const storeObj = {
                article: {},
            };
            try {
                const response = yield fetch(`${this._url}/articles/${slug}`, {
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
                    const data = yield response.json();
                    storeObj.article = data.article;
                }
                else {
                    throw new Error('Received non-JSON response');
                }
            }
            catch (error) {
                console.error('Ошибка при редактировании статьи:', error);
            }
            return storeObj;
        });
        this.deleteArticle = (slug) => __awaiter(this, void 0, void 0, function* () {
            const token = getCookie('kataBlogToken');
            try {
                const response = yield fetch(`${this._url}/articles/${slug}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        Authorization: `Token ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            }
            catch (error) {
                console.error('Ошибка при удалении статьи:', error);
            }
        });
        this.postFavoriteArticle = (slug) => __awaiter(this, void 0, void 0, function* () {
            const token = getCookie('kataBlogToken');
            try {
                const response = yield fetch(`${this._url}/articles/${slug}/favorite`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        Authorization: `Token ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            }
            catch (error) {
                console.error('Ошибка при добавлении статьи в избранное:', error);
            }
        });
        this.deleteFavoriteOnArticle = (slug) => __awaiter(this, void 0, void 0, function* () {
            const token = getCookie('kataBlogToken');
            try {
                const response = yield fetch(`${this._url}/articles/${slug}/favorite`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        Authorization: `Token ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            }
            catch (error) {
                console.error('Ошибка при удалении статьи из избранного:', error);
            }
        });
        this.postSignUpUser = (userPost) => __awaiter(this, void 0, void 0, function* () {
            const newObj = {
                user,
                errors: {},
            };
            try {
                const responseSignUp = yield fetch(`${this._url}/users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                    },
                    body: JSON.stringify(userPost),
                });
                return getDataFromResponses(responseSignUp, newObj, this._url);
            }
            catch (error) {
                console.error('Ошибка при регистрации пользователя:', error);
                return newObj;
            }
        });
        this.postSignInUser = (userPost) => __awaiter(this, void 0, void 0, function* () {
            const newObj = {
                user,
                errors: {},
            };
            try {
                const responseSignIn = yield fetch(`${this._url}/users/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                    },
                    body: JSON.stringify(userPost),
                });
                return getDataFromResponses(responseSignIn, newObj, this._url);
            }
            catch (error) {
                console.error('Ошибка при авторизации пользователя:', error);
                return newObj;
            }
        });
        this.putEditProfile = (userPut) => __awaiter(this, void 0, void 0, function* () {
            const token = getCookie('kataBlogToken');
            const newObj = {
                user,
                errors: {},
            };
            try {
                const response = yield fetch(`${this._url}/user`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify(userPut),
                });
                if (response.status === 422) {
                    yield response.json().then((obj) => {
                        newObj.errors = obj.errors;
                    });
                    return newObj;
                }
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const data = yield response.json();
                    newObj.user = data.user;
                    newObj.user.updated = true;
                    newObj.errors = {};
                }
                else {
                    throw new Error('Received non-JSON response');
                }
                localStorage.setItem('blogKataUsername', newObj.user.username);
                localStorage.setItem('blogKataImage', newObj.user.image);
            }
            catch (error) {
                console.error('Ошибка при редактировании профиля:', error);
            }
            return newObj;
        });
    }
    ;
}
