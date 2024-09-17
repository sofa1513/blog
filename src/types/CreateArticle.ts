

import { IArticle } from './LoadAnArticle';

export enum CreateArticleActionTypes {
  FETCH_CREATE_ARTICLE = 'FETCH_CREATE_ARTICLE',
  FETCH_CREATE_ARTICLE_SUCCESS = 'FETCH_CREATE_ARTICLE_SUCCESS',
  FETCH_CREATE_ARTICLE_ERROR = 'FETCH_CREATE_ARTICLE_ERROR',
}


export interface IPostArticle {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
}


export interface CreateArticleState {
  article: IArticle;
  loading: boolean;
  error: string | null;
}


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


export type NewArticleAction =
  | CreateArticleAction
  | CreateArticleSuccessAction
  | CreateArticleErrorAction;
