/* import { IArticle } from './LoadAnArticle';

export enum CreateArticleActionTypes {
  FETCH_CREATE_ARTICLE = 'FETCH_CREATE_ARTICLE',
  FETCH_CREATE_ARTICLE_SUCCESS = 'FETCH_CREATE_ARTICLE_SUCCESS',
  FETCH_CREATE_ARTICLE_ERROR = 'FETCH_CREATE_ARTICLE_ERROR',
}

export interface IPostArticle {
  article: {
    title: string | null;
    description: string | null;
    body: string | null;
    tagList: string[] | null;
  };
}

export interface CreateArticleState {
  article: IArticle;
  loading: boolean;
  error: string | null;
}

interface CreateArticleAction {
  type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE;
}

interface CreateArticleSuccessAction {
  type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE_SUCCESS;
  payload: {
    article: IArticle;
  };
}

interface CreateArticleErrorAction {
  type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE_ERROR;
  payload: string;
}

export type NewArticleAction = CreateArticleAction | CreateArticleSuccessAction | CreateArticleErrorAction;
 */

import { IArticle } from './LoadAnArticle';

// Определение типов для действий
export enum CreateArticleActionTypes {
  FETCH_CREATE_ARTICLE = 'FETCH_CREATE_ARTICLE',
  FETCH_CREATE_ARTICLE_SUCCESS = 'FETCH_CREATE_ARTICLE_SUCCESS',
  FETCH_CREATE_ARTICLE_ERROR = 'FETCH_CREATE_ARTICLE_ERROR',
}

// Тип для статьи
export interface IPostArticle {
  article: {
    title: string | null;
    description: string | null;
    body: string | null;
    tagList: string[] | null;
  };
}

// Общие типы для состояния
export interface CreateArticleState {
  article: IArticle;
  loading: boolean;
  error: string | null;
}

// Общий тип для действий
interface BaseAction {
  type: CreateArticleActionTypes;
}

interface CreateArticleAction extends BaseAction {
  type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE;
}

interface CreateArticleSuccessAction extends BaseAction {
  type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE_SUCCESS;
  payload: IArticle;
}

interface CreateArticleErrorAction extends BaseAction {
  type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE_ERROR;
  payload: string;
}

// Объединение всех действий в один тип
export type NewArticleAction =
  | CreateArticleAction
  | CreateArticleSuccessAction
  | CreateArticleErrorAction;
