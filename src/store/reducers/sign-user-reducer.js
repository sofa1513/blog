import { SignActionTypes } from '../../types/SignUser';
const initialState = {
    user: {
        username: null,
        email: null,
        token: null,
        bio: null,
        image: null,
        logOutRender: false,
    },
    errors: {},
    loading: false,
    clientError: null,
};
const signUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SignActionTypes.FETCH_SIGN_USER:
            return Object.assign(Object.assign({}, state), { loading: true });
        case SignActionTypes.FETCH_SIGN_USER_SUCCESS:
            return Object.assign(Object.assign({}, state), { user: action.payload.user, errors: action.payload.errors, loading: false });
        case SignActionTypes.FETCH_SIGN_USER_ERROR:
            return Object.assign(Object.assign({}, state), { clientError: action.payload.clientError, loading: false });
        case SignActionTypes.LOGOUT_USER:
            return Object.assign(Object.assign({}, initialState), { user: Object.assign(Object.assign({}, initialState.user), { logOutRender: true }) });
        default:
            return state;
    }
};
export { signUserReducer };
