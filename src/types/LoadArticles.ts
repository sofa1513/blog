/* export interface ArticlesState {
  articles: IArticles[];
  articlesCount: number;
  page: number;
  loading: boolean;
  error: null | string;
}

export interface IAuthor {
  following: boolean;
  image: string;
  username: string;
  bio?: string;
}

export interface IArticles {
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
    articles: IArticles[];
    articlesCount: number;
    page: number;
  };
}

interface FetchArticlesErrorAction {
  type: ArticlesActionTypes.FETCH_ARTICLES_ERROR;
  payload: string;
}

export type ArticlesAction = FetchArticlesAction | FetchArticlesSuccessAction | FetchArticlesErrorAction;
 */

// Интерфейс для автора
export interface IAuthor {
  following: boolean;
  image: string;
  username: string;
  bio?: string;  // Сделаем опциональным
}

// Интерфейс для статьи
export interface IArticle {
  author: IAuthor;
  body?: string;  // Сделаем опциональным, если не все статьи имеют тело
  createdAt: string;
  description: string;
  favorited?: boolean;  // Сделаем опциональным, если не все статьи могут быть в избранном
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt?: string;  // Сделаем опциональным, если не все статьи имеют дату обновления
}

// Состояние для списка статей
export interface ArticlesState {
  articles: IArticle[];
  articlesCount: number;
  page: number;
  loading: boolean;
  error: string | null;  // Упростим тип до строки или null
}

// Типы действий для работы со списком статей
export enum ArticlesActionTypes {
  FETCH_ARTICLES = 'FETCH_ARTICLES',
  FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
  FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
}

// Интерфейс для действия по получению статей
interface FetchArticlesAction {
  type: ArticlesActionTypes.FETCH_ARTICLES;
}

// Интерфейс для успешного получения статей
interface FetchArticlesSuccessAction {
  type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS;
  payload: {
    articles: IArticle[];
    articlesCount: number;
    page: number;
  };
}

// Интерфейс для ошибки при получении статей
interface FetchArticlesErrorAction {
  type: ArticlesActionTypes.FETCH_ARTICLES_ERROR;
  payload: string;
}

// Объединение всех типов действий
export type ArticlesAction =
  | FetchArticlesAction
  | FetchArticlesSuccessAction
  | FetchArticlesErrorAction;
