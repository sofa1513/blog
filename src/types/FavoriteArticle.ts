
export enum FavoriteActionTypes {
  FETCH_FAVORITE_ARTICLE = 'FETCH_FAVORITE_ARTICLE',
  FETCH_FAVORITE_ARTICLE_SUCCESS = 'FETCH_FAVORITE_ARTICLE_SUCCESS',
  FETCH_FAVORITE_ARTICLE_ERROR = 'FETCH_FAVORITE_ARTICLE_ERROR',
}

interface BaseState {
  loading: boolean;
  error: string | null;
}

export interface FavoriteArticleState extends BaseState {}


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


export type LikeArticleAction =
  | FavoriteArticleAction
  | FavoriteArticleSuccessAction
  | FavoriteArticleErrorAction;
