import { EditProfileActionTypes } from '../../types/EditProfile';
const initialState = {
    user: {
        username: null,
        email: null,
        token: null,
        bio: null,
        image: null,
        updated: false,
    },
    errors: {},
    loading: false,
    clientError: null,
};
const editProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case EditProfileActionTypes.FETCH_EDIT_PROFILE:
            return Object.assign(Object.assign({}, state), { user: Object.assign({}, initialState.user), loading: true });
        case EditProfileActionTypes.FETCH_EDIT_PROFILE_SUCCESS:
            return Object.assign(Object.assign({}, state), { user: action.payload.user, errors: action.payload.errors, loading: false });
        case EditProfileActionTypes.FETCH_EDIT_PROFILE_ERROR:
            return Object.assign(Object.assign({}, state), { clientError: action.payload.clientError, loading: false });
        case EditProfileActionTypes.SET_IS_UPDATED_TO_DEFAULT:
            return Object.assign(Object.assign({}, state), { user: Object.assign(Object.assign({}, state.user), { updated: action.payload }) });
        default:
            return state;
    }
};
export { editProfileReducer };
