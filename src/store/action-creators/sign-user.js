var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SignActionTypes } from '../../types/SignUser';
import { blogService, deleteCookie } from '../../services/BlogFunctions';
export const fetchSignUpUser = (userPost) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch({ type: SignActionTypes.FETCH_SIGN_USER });
            const { user, errors } = yield blogService.postSignUpUser(userPost);
            dispatch({
                type: SignActionTypes.FETCH_SIGN_USER_SUCCESS,
                payload: {
                    user,
                    errors,
                },
            });
        }
        catch (e) {
            if (e instanceof Error) {
                dispatch({
                    type: SignActionTypes.FETCH_SIGN_USER_ERROR,
                    payload: { clientError: e.message },
                });
            }
            throw e;
        }
    });
};
export const fetchSignInUser = (userPost) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch({ type: SignActionTypes.FETCH_SIGN_USER });
            const { user, errors } = yield blogService.postSignInUser(userPost);
            dispatch({
                type: SignActionTypes.FETCH_SIGN_USER_SUCCESS,
                payload: {
                    user,
                    errors,
                },
            });
        }
        catch (e) {
            if (e instanceof Error) {
                dispatch({
                    type: SignActionTypes.FETCH_SIGN_USER_ERROR,
                    payload: { clientError: e.message },
                });
            }
            throw e;
        }
    });
};
export const logOutUser = () => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        localStorage.removeItem('blogKataUsername');
        localStorage.removeItem('blogKataImage');
        localStorage.removeItem('blogKataPage');
        localStorage.removeItem('blogKataOffset');
        deleteCookie('kataBlogToken');
        dispatch({ type: SignActionTypes.LOGOUT_USER });
    });
};
