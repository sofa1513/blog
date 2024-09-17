/* import { IArticle } from './LoadAnArticle';

export interface EditArticleState {
  article: IArticle;
  loading: boolean;
  error: string | null;
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

interface EditArticleAction {
  type: EditArticleActionTypes.FETCH_EDIT_ARTICLE;
}

interface EditArticleSuccessAction {
  type: EditArticleActionTypes.FETCH_EDIT_ARTICLE_SUCCESS;
  payload: IArticle;
}

interface EditArticleErrorAction {
  type: EditArticleActionTypes.FETCH_EDIT_ARTICLE_ERROR;
  payload: string;
}

export type UpdateArticleAction = EditArticleAction | EditArticleSuccessAction | EditArticleErrorAction;
 */

import { IArticle } from './LoadAnArticle';

// Общий интерфейс для состояния с ошибками и загрузкой
interface BaseState {
  loading: boolean;
  error: string | null;
}

// Состояние для редактирования статьи
export interface EditArticleState extends BaseState {
  article: IArticle;
}

// Данные для редактирования статьи
export interface IPutArticle {
  article: {
    title: string;
    description: string;
    body: string;
  };
}

// Типы действий для редактирования статьи
export enum EditArticleActionTypes {
  FETCH_EDIT_ARTICLE = 'FETCH_EDIT_ARTICLE',
  FETCH_EDIT_ARTICLE_SUCCESS = 'FETCH_EDIT_ARTICLE_SUCCESS',
  FETCH_EDIT_ARTICLE_ERROR = 'FETCH_EDIT_ARTICLE_ERROR',
}

// Общий интерфейс для действий
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

// Объединение всех действий в один тип
export type UpdateArticleAction =
  | EditArticleAction
  | EditArticleSuccessAction
  | EditArticleErrorAction;
