/* export enum EditProfileActionTypes {
  FETCH_EDIT_PROFILE = 'FETCH_EDIT_PROFILE',
  FETCH_EDIT_PROFILE_SUCCESS = 'FETCH_EDIT_PROFILE_SUCCESS',
  FETCH_EDIT_PROFILE_ERROR = 'FETCH_EDIT_PROFILE_ERROR',
  SET_IS_UPDATED_TO_DEFAULT = 'FETCH_IS_UPDATED_TO_DEFAULT',
}

export interface IUserEditProfile {
  email?: string | null;
  password?: string | null;
  username?: string | null;
  bio?: string | null;
  image?: string | null;
  token?: string | null;
  updated?: boolean;
}

interface IErrors {
  status?: string;
  message?: string;
  email?: string;
  username?: string;
}

export interface EditProfileState {
  user: IUserEditProfile;
  errors: IErrors;
  clientError: string | null;
  loading: boolean;
}

interface FetchEditProfileAction {
  type: EditProfileActionTypes.FETCH_EDIT_PROFILE;
}

interface FetchEditProfileSuccessAction {
  type: EditProfileActionTypes.FETCH_EDIT_PROFILE_SUCCESS;
  payload: {
    user: IUserEditProfile;
    errors: IErrors;
  };
}

interface FetchEditProfileErrorAction {
  type: EditProfileActionTypes.FETCH_EDIT_PROFILE_ERROR;
  payload: {
    clientError: string | null;
  };
}

interface SetIsUpdatedToDefaultAction {
  type: EditProfileActionTypes.SET_IS_UPDATED_TO_DEFAULT;
  payload: boolean | undefined;
}

export type EditProfileAction =
  | FetchEditProfileAction
  | FetchEditProfileSuccessAction
  | FetchEditProfileErrorAction
  | SetIsUpdatedToDefaultAction;
 */

  // Определение типов действий для редактирования профиля
export enum EditProfileActionTypes {
  FETCH_EDIT_PROFILE = 'FETCH_EDIT_PROFILE',
  FETCH_EDIT_PROFILE_SUCCESS = 'FETCH_EDIT_PROFILE_SUCCESS',
  FETCH_EDIT_PROFILE_ERROR = 'FETCH_EDIT_PROFILE_ERROR',
  SET_IS_UPDATED_TO_DEFAULT = 'SET_IS_UPDATED_TO_DEFAULT',
}

// Общий интерфейс для ошибок
interface BaseErrors {
  status?: string;
  message?: string;
  email?: string;
  username?: string;
}

// Общий интерфейс для состояния с ошибками
interface BaseState {
  errors: BaseErrors;
  clientError: string | null;
  loading: boolean;
}

// Состояние для редактирования профиля
export interface EditProfileState extends BaseState {
  user: IUserEditProfile;
}

// Данные для редактирования профиля
export interface IUserEditProfile {
  email?: string | null;
  password?: string | null;
  username?: string | null;
  bio?: string | null;
  image?: string | null;
  token?: string | null;
  updated?: boolean;
}

// Общий интерфейс для действий
interface BaseAction {
  type: EditProfileActionTypes;
}

interface FetchEditProfileAction extends BaseAction {
  type: EditProfileActionTypes.FETCH_EDIT_PROFILE;
}

interface FetchEditProfileSuccessAction extends BaseAction {
  type: EditProfileActionTypes.FETCH_EDIT_PROFILE_SUCCESS;
  payload: {
    user: IUserEditProfile;
    errors: BaseErrors;
  };
}

interface FetchEditProfileErrorAction extends BaseAction {
  type: EditProfileActionTypes.FETCH_EDIT_PROFILE_ERROR;
  payload: {
    clientError: string | null;
  };
}

interface SetIsUpdatedToDefaultAction extends BaseAction {
  type: EditProfileActionTypes.SET_IS_UPDATED_TO_DEFAULT;
  payload: boolean | undefined;
}

// Объединение всех действий в один тип
export type EditProfileAction =
  | FetchEditProfileAction
  | FetchEditProfileSuccessAction
  | FetchEditProfileErrorAction
  | SetIsUpdatedToDefaultAction;
