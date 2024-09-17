/* export enum UnfavoriteActionTypes {
  FETCH_UNFAVORITE_ARTICLE = 'FETCH_UNFAVORITE_ARTICLE',
  FETCH_UNFAVORITE_ARTICLE_SUCCESS = 'FETCH_UNFAVORITE_ARTICLE_SUCCESS',
  FETCH_UNFAVORITE_ARTICLE_ERROR = 'FETCH_UNFAVORITE_ARTICLE_ERROR',
}

export interface UnfavoriteArticleState {
  loading: boolean;
  error: string | null;
}

interface UnfavoriteArticleAction {
  type: UnfavoriteActionTypes.FETCH_UNFAVORITE_ARTICLE;
}

interface UnfavoriteArticleSuccessAction {
  type: UnfavoriteActionTypes.FETCH_UNFAVORITE_ARTICLE_SUCCESS;
}

interface UnfavoriteArticleErrorAction {
  type: UnfavoriteActionTypes.FETCH_UNFAVORITE_ARTICLE_ERROR;
  payload: string;
}

export type UnlikeArticleAction =
  | UnfavoriteArticleAction
  | UnfavoriteArticleSuccessAction
  | UnfavoriteArticleErrorAction;
 */

  // Типы действий для управления удалением статьи из избранного
export enum UnfavoriteActionTypes {
  FETCH_UNFAVORITE_ARTICLE = 'FETCH_UNFAVORITE_ARTICLE',
  FETCH_UNFAVORITE_ARTICLE_SUCCESS = 'FETCH_UNFAVORITE_ARTICLE_SUCCESS',
  FETCH_UNFAVORITE_ARTICLE_ERROR = 'FETCH_UNFAVORITE_ARTICLE_ERROR',
}

// Интерфейс для состояния при удалении статьи из избранного
export interface UnfavoriteArticleState {
  loading: boolean;
  error: string | null;
}

// Интерфейс для действия по удалению статьи из избранного
interface UnfavoriteArticleAction {
  type: UnfavoriteActionTypes.FETCH_UNFAVORITE_ARTICLE;
}

// Интерфейс для успешного удаления статьи из избранного
interface UnfavoriteArticleSuccessAction {
  type: UnfavoriteActionTypes.FETCH_UNFAVORITE_ARTICLE_SUCCESS;
}

// Интерфейс для ошибки при удалении статьи из избранного
interface UnfavoriteArticleErrorAction {
  type: UnfavoriteActionTypes.FETCH_UNFAVORITE_ARTICLE_ERROR;
  payload: string;
}

// Объединение всех типов действий
export type UnlikeArticleAction =
  | UnfavoriteArticleAction
  | UnfavoriteArticleSuccessAction
  | UnfavoriteArticleErrorAction;
