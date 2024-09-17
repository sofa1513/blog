
export enum EditProfileActionTypes {
  FETCH_EDIT_PROFILE = 'FETCH_EDIT_PROFILE',
  FETCH_EDIT_PROFILE_SUCCESS = 'FETCH_EDIT_PROFILE_SUCCESS',
  FETCH_EDIT_PROFILE_ERROR = 'FETCH_EDIT_PROFILE_ERROR',
  SET_IS_UPDATED_TO_DEFAULT = 'SET_IS_UPDATED_TO_DEFAULT',
}

interface BaseErrors {
  status?: string;
  message?: string;
  email?: string;
  username?: string;
}


interface BaseState {
  errors: BaseErrors;
  clientError: string | null;
  loading: boolean;
}


export interface EditProfileState extends BaseState {
  user: IUserEditProfile;
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


export type EditProfileAction =
  | FetchEditProfileAction
  | FetchEditProfileSuccessAction
  | FetchEditProfileErrorAction
  | SetIsUpdatedToDefaultAction;
