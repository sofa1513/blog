

export enum DeleteArticleActionTypes {
  FETCH_DELETE_ARTICLE = 'FETCH_DELETE_ARTICLE',
  FETCH_DELETE_ARTICLE_SUCCESS = 'FETCH_DELETE_ARTICLE_SUCCESS',
  FETCH_DELETE_ARTICLE_ERROR = 'FETCH_DELETE_ARTICLE_ERROR',
}


interface BaseState {
  loading: boolean;
  error: string | null;
}

export interface DeleteArticleState extends BaseState {}


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


export type DeleteArticleAction =
  | RemoveArticleAction
  | RemoveArticleSuccessAction
  | RemoveArticleErrorAction;
