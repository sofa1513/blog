/* export enum DeleteArticleActionTypes {
  FETCH_DELETE_ARTICLE = 'FETCH_DELETE_ARTICLE',
  FETCH_DELETE_ARTICLE_SUCCESS = 'FETCH_DELETE_ARTICLE_SUCCESS',
  FETCH_DELETE_ARTICLE_ERROR = 'FETCH_DELETE_ARTICLE_ERROR',
}

export interface DeleteArticleState {
  loading: boolean;
  error: string | null;
}

interface RemoveArticleAction {
  type: DeleteArticleActionTypes.FETCH_DELETE_ARTICLE;
}

interface RemoveArticleSuccessAction {
  type: DeleteArticleActionTypes.FETCH_DELETE_ARTICLE_SUCCESS;
}

interface RemoveArticleErrorAction {
  type: DeleteArticleActionTypes.FETCH_DELETE_ARTICLE_ERROR;
  payload: string;
}

export type DeleteArticleAction = RemoveArticleAction | RemoveArticleSuccessAction | RemoveArticleErrorAction;
 */


// Определение типов для действий
export enum DeleteArticleActionTypes {
  FETCH_DELETE_ARTICLE = 'FETCH_DELETE_ARTICLE',
  FETCH_DELETE_ARTICLE_SUCCESS = 'FETCH_DELETE_ARTICLE_SUCCESS',
  FETCH_DELETE_ARTICLE_ERROR = 'FETCH_DELETE_ARTICLE_ERROR',
}

// Общий интерфейс для состояния с ошибками
interface BaseState {
  loading: boolean;
  error: string | null;
}

// Состояние для удаления статьи
export interface DeleteArticleState extends BaseState {}

// Общий интерфейс для действий
interface BaseAction {
  type: DeleteArticleActionTypes;
}

interface RemoveArticleAction extends BaseAction {
  type: DeleteArticleActionTypes.FETCH_DELETE_ARTICLE;
}

interface RemoveArticleSuccessAction extends BaseAction {
  type: DeleteArticleActionTypes.FETCH_DELETE_ARTICLE_SUCCESS;
}

interface RemoveArticleErrorAction extends BaseAction {
  type: DeleteArticleActionTypes.FETCH_DELETE_ARTICLE_ERROR;
  payload: string;
}

// Объединение всех действий в один тип
export type DeleteArticleAction =
  | RemoveArticleAction
  | RemoveArticleSuccessAction
  | RemoveArticleErrorAction;
