

export interface IAuthor {
  following: boolean;
  image: string;
  username: string;
  bio?: string | null;
}


export interface IArticle {
  author: IAuthor;
  body?: string;  
  createdAt: string;
  description: string;
  favorited?: boolean; 
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt?: string;  
}


export interface ArticlesState {
  articles: IArticle[];
  articlesCount: number;
  page: number;
  loading: boolean;
  error: string | null;  
}


export enum ArticlesActionTypes {
  FETCH_ARTICLES = 'FETCH_ARTICLES',
  FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
  FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
}


interface FetchArticlesAction {
  type: ArticlesActionTypes.FETCH_ARTICLES;
}


interface FetchArticlesSuccessAction {
  type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS;
  payload: {
    articles: IArticle[];
    articlesCount: number;
    page: number;
  };
}


interface FetchArticlesErrorAction {
  type: ArticlesActionTypes.FETCH_ARTICLES_ERROR;
  payload: string;
}

export type ArticlesAction =
  | FetchArticlesAction
  | FetchArticlesSuccessAction
  | FetchArticlesErrorAction;
