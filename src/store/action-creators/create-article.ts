/* import { Dispatch } from 'redux';

import { CreateArticleActionTypes, IPostArticle, NewArticleAction } from '../../types/CreateArticle';
import { blogService } from '../../services/BlogFunctions';

export const fetchCreateArticle = (postArticle: IPostArticle) => {
  return async (dispatch: Dispatch<NewArticleAction>) => {
    try {
      dispatch({ type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE });

      const { article } = await blogService.postNewArticle(postArticle);

      dispatch({
        type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE_SUCCESS,
        payload: {
          article: article,
        },
      });
    } catch (e) {
      dispatch({
        type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE_ERROR,
        payload: 'Произошла ошибка при создании статьи.',
      });
      throw e;
    }
  };
};
 */

// src/store/action-creators/create-article.ts

import { Dispatch } from 'redux';
import { CreateArticleActionTypes, IPostArticle, NewArticleAction } from '../../types/CreateArticle';
import { blogService } from '../../services/BlogFunctions';

export const fetchCreateArticle = (postArticle: IPostArticle) => {
  return async (dispatch: Dispatch<NewArticleAction>) => {
    try {
      dispatch({ type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE });

      const response = await blogService.postNewArticle(postArticle);
      const article = response.article;

      dispatch({
        type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE_SUCCESS,
        payload: article, // Исправлено
      });
    } catch (e) {
      dispatch({
        type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE_ERROR,
        payload: 'Произошла ошибка при создании статьи.',
      });
      throw e;
    }
  };
};



