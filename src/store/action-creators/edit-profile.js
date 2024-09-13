var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EditProfileActionTypes } from '../../types/EditProfile';
import { blogService } from '../../services/BlogFunctions';
export const fetchEditProfile = (userPut) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch({ type: EditProfileActionTypes.FETCH_EDIT_PROFILE });
            const { user, errors } = yield blogService.putEditProfile(userPut);
            dispatch({
                type: EditProfileActionTypes.FETCH_EDIT_PROFILE_SUCCESS,
                payload: {
                    user,
                    errors,
                },
            });
        }
        catch (e) {
            if (e instanceof Error) {
                dispatch({
                    type: EditProfileActionTypes.FETCH_EDIT_PROFILE_ERROR,
                    payload: { clientError: e.message },
                });
            }
            throw e;
        }
    });
};
export const setIsUpdatedToDefault = () => {
    return (dispatch) => {
        dispatch({
            type: EditProfileActionTypes.SET_IS_UPDATED_TO_DEFAULT,
            payload: false,
        });
    };
};
