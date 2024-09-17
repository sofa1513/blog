/* export enum FavoriteActionTypes {
  FETCH_FAVORITE_ARTICLE = 'FETCH_FAVORITE_ARTICLE',
  FETCH_FAVORITE_ARTICLE_SUCCESS = 'FETCH_FAVORITE_ARTICLE_SUCCESS',
  FETCH_FAVORITE_ARTICLE_ERROR = 'FETCH_FAVORITE_ARTICLE_ERROR',
}

export interface FavoriteArticleState {
  loading: boolean;
  error: string | null;
}

interface FavoriteArticleAction {
  type: FavoriteActionTypes.FETCH_FAVORITE_ARTICLE;
}

interface FavoriteArticleSuccessAction {
  type: FavoriteActionTypes.FETCH_FAVORITE_ARTICLE_SUCCESS;
}

interface FavoriteArticleErrorAction {
  type: FavoriteActionTypes.FETCH_FAVORITE_ARTICLE_ERROR;
  payload: string;
}

export type LikeArticleAction = FavoriteArticleAction | FavoriteArticleSuccessAction | FavoriteArticleErrorAction;
 */

// Определение типов действий для избранных статей
export enum FavoriteActionTypes {
  FETCH_FAVORITE_ARTICLE = 'FETCH_FAVORITE_ARTICLE',
  FETCH_FAVORITE_ARTICLE_SUCCESS = 'FETCH_FAVORITE_ARTICLE_SUCCESS',
  FETCH_FAVORITE_ARTICLE_ERROR = 'FETCH_FAVORITE_ARTICLE_ERROR',
}

// Общий интерфейс для состояния
interface BaseState {
  loading: boolean;
  error: string | null;
}

// Состояние для избранных статей
export interface FavoriteArticleState extends BaseState {}

// Общий интерфейс для действий
interface BaseAction {
  type: FavoriteActionTypes;
}

interface FavoriteArticleAction extends BaseAction {
  type: FavoriteActionTypes.FETCH_FAVORITE_ARTICLE;
}

interface FavoriteArticleSuccessAction extends BaseAction {
  type: FavoriteActionTypes.FETCH_FAVORITE_ARTICLE_SUCCESS;
}

interface FavoriteArticleErrorAction extends BaseAction {
  type: FavoriteActionTypes.FETCH_FAVORITE_ARTICLE_ERROR;
  payload: string;
}

// Объединение всех действий в один тип
export type LikeArticleAction =
  | FavoriteArticleAction
  | FavoriteArticleSuccessAction
  | FavoriteArticleErrorAction;
