/* export enum SignActionTypes {
  FETCH_SIGN_USER = 'FETCH_SIGN_USER',
  FETCH_SIGN_USER_SUCCESS = 'FETCH_SIGN_USER_SUCCESS',
  FETCH_SIGN_USER_ERROR = 'FETCH_SIGN_USER_ERROR',
  LOGOUT_USER = 'LOGOUT_USER',
}

export interface ISignUserState {
  user: IUser;
  errors: IErrors;
  loading: boolean;
  clientError: string | null;
}

export interface IUser {
  email: string | null;
  token: string | null;
  username: string | null;
  bio: string | null;
  image: string | null;
  logOutRender?: boolean;
}

export interface IUserPost {
  user: {
    username?: string | null;
    email: string | null;
    password: string | null;
  };
}

export interface IErrors {
  username?: string[];
  email?: string[];
  'email or password'?: string;
}

interface FetchSignAction {
  type: SignActionTypes.FETCH_SIGN_USER;
}

interface FetchSignSuccessAction {
  type: SignActionTypes.FETCH_SIGN_USER_SUCCESS;
  payload: {
    user: IUser;
    errors: IErrors;
  };
}

interface FetchSignErrorAction {
  type: SignActionTypes.FETCH_SIGN_USER_ERROR;
  payload: {
    clientError: string | null;
  };
}

interface LogOutUser {
  type: SignActionTypes.LOGOUT_USER;
}

export type SignAction = FetchSignAction | FetchSignSuccessAction | FetchSignErrorAction | LogOutUser;
 */

// Типы действий для управления пользователем
export enum SignActionTypes {
  FETCH_SIGN_USER = 'FETCH_SIGN_USER',
  FETCH_SIGN_USER_SUCCESS = 'FETCH_SIGN_USER_SUCCESS',
  FETCH_SIGN_USER_ERROR = 'FETCH_SIGN_USER_ERROR',
  LOGOUT_USER = 'LOGOUT_USER',
}

// Интерфейс для состояния аутентификации пользователя
export interface ISignUserState {
  user: IUser;
  errors: IErrors;
  loading: boolean;
  clientError: string | null;
}

// Интерфейс для пользователя
export interface IUser {
  email: string | null;
  token: string | null;
  username: string | null;
  bio: string | null;
  image: string | null;
  logOutRender?: boolean;  // Опционально для отображения после выхода
}

// Интерфейс для данных при создании или обновлении пользователя
export interface IUserPost {
  user: {
    username?: string | null;  // Опционально
    email: string | null;
    password: string | null;
  };
}

// Интерфейс для ошибок
export interface IErrors {
  username?: string[];  // Массив ошибок для username
  email?: string[];     // Массив ошибок для email
  'email or password'?: string;  // Ошибка для email или password
}

// Интерфейсы действий
interface FetchSignAction {
  type: SignActionTypes.FETCH_SIGN_USER;
}

interface FetchSignSuccessAction {
  type: SignActionTypes.FETCH_SIGN_USER_SUCCESS;
  payload: {
    user: IUser;
    errors: IErrors;
  };
}

interface FetchSignErrorAction {
  type: SignActionTypes.FETCH_SIGN_USER_ERROR;
  payload: {
    clientError: string | null;
  };
}

interface LogOutUser {
  type: SignActionTypes.LOGOUT_USER;
}

// Объединение всех типов действий
export type SignAction = 
  | FetchSignAction 
  | FetchSignSuccessAction 
  | FetchSignErrorAction 
  | LogOutUser;
