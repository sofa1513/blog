
export interface IArticle {
  
    slug: string;
    title: string;
    description: string;
    body: string;
    author: IAuthor;
    tagList: string[];
    createdAt: string;
    favoritesCount: number;
    favorited?: boolean;
  
}

export interface IAuthor {
  username: string;
  bio?: string | null;
  image?: string ;
  following: boolean;
}

export interface ArticleState {
  article: IArticle;
  loading: boolean;
  error: string | null;
}

export enum ArticleActionTypes {
  FETCH_ARTICLE = 'FETCH_ARTICLE',
  FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS',
  FETCH_ARTICLE_ERROR = 'FETCH_ARTICLE_ERROR',
}


interface FetchArticleAction {
  type: ArticleActionTypes.FETCH_ARTICLE;
}


interface FetchArticleSuccessAction {
  type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS;
  payload: IArticle;
}


interface FetchArticleErrorAction {
  type: ArticleActionTypes.FETCH_ARTICLE_ERROR;
  payload: string;
}


export type ArticleAction =
  | FetchArticleAction
  | FetchArticleSuccessAction
  | FetchArticleErrorAction;
