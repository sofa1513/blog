

import { IArticle } from './LoadAnArticle';

interface BaseState {
  loading: boolean;
  error: string | null;
}


export interface EditArticleState extends BaseState {
  article: IArticle;
}


export interface IPutArticle {
  article: {
    title: string;
    description: string;
    body: string;
  };
}

export enum EditArticleActionTypes {
  FETCH_EDIT_ARTICLE = 'FETCH_EDIT_ARTICLE',
  FETCH_EDIT_ARTICLE_SUCCESS = 'FETCH_EDIT_ARTICLE_SUCCESS',
  FETCH_EDIT_ARTICLE_ERROR = 'FETCH_EDIT_ARTICLE_ERROR',
}


interface BaseAction {
  type: EditArticleActionTypes;
}

interface EditArticleAction extends BaseAction {
  type: EditArticleActionTypes.FETCH_EDIT_ARTICLE;
}

interface EditArticleSuccessAction extends BaseAction {
  type: EditArticleActionTypes.FETCH_EDIT_ARTICLE_SUCCESS;
  payload: IArticle;
}

interface EditArticleErrorAction extends BaseAction {
  type: EditArticleActionTypes.FETCH_EDIT_ARTICLE_ERROR;
  payload: string;
}


export type UpdateArticleAction =
  | EditArticleAction
  | EditArticleSuccessAction
  | EditArticleErrorAction;
