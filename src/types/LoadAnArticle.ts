/* import { IAuthor } from './LoadArticles';

export interface IArticle {
  author: IAuthor;
  body: string;
  createdAt: string;
  description: string;
  favorited?: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt?: string;
}

export interface AnArticleState {
  article: IArticle;
  loading: boolean;
  error: string | null;
}

export enum AnArticleActionTypes {
  FETCH_ARTICLE = 'FETCH_ARTICLE',
  FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS',
  FETCH_ARTICLE_ERROR = 'FETCH_ARTICLE_ERROR',
}

interface FetchAnArticleAction {
  type: AnArticleActionTypes.FETCH_ARTICLE;
}

interface FetchAnArticleSuccessAction {
  type: AnArticleActionTypes.FETCH_ARTICLE_SUCCESS;
  payload: IArticle;
}

interface FetchAnArticleErrorAction {
  type: AnArticleActionTypes.FETCH_ARTICLE_ERROR;
  payload: string;
}

export type AnArticleAction = FetchAnArticleAction | FetchAnArticleSuccessAction | FetchAnArticleErrorAction;
 */

// Интерфейс для автора
import { IAuthor } from './LoadArticles';

// Интерфейс для статьи
export interface IArticle {
  author: IAuthor;
  body: string;
  createdAt: string;
  description: string;
  favorited?: boolean;  // Сделаем опциональным, если статья может не быть в избранном
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt?: string;  // Сделаем опциональным, если не всегда присутствует
}

// Состояние статьи
export interface ArticleState {
  article: IArticle;
  loading: boolean;
  error: string | null;
}

// Типы действий для работы со статьей
export enum ArticleActionTypes {
  FETCH_ARTICLE = 'FETCH_ARTICLE',
  FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS',
  FETCH_ARTICLE_ERROR = 'FETCH_ARTICLE_ERROR',
}

// Интерфейс для действия по получению статьи
interface FetchArticleAction {
  type: ArticleActionTypes.FETCH_ARTICLE;
}

// Интерфейс для успешного получения статьи
interface FetchArticleSuccessAction {
  type: ArticleActionTypes.FETCH_ARTICLE_SUCCESS;
  payload: IArticle;
}

// Интерфейс для ошибки при получении статьи
interface FetchArticleErrorAction {
  type: ArticleActionTypes.FETCH_ARTICLE_ERROR;
  payload: string;
}

// Объединение всех типов действий
export type ArticleAction =
  | FetchArticleAction
  | FetchArticleSuccessAction
  | FetchArticleErrorAction;
