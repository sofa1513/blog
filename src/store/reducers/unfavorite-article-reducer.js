import { UnfavoriteActionTypes } from '../../types/UnfavoriteArticle';
const initialState = {
    loading: false,
    error: null,
};
const unfavoriteArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case UnfavoriteActionTypes.FETCH_UNFAVORITE_ARTICLE:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case UnfavoriteActionTypes.FETCH_UNFAVORITE_ARTICLE_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, error: null });
        case UnfavoriteActionTypes.FETCH_UNFAVORITE_ARTICLE_ERROR:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload });
        default:
            return state;
    }
};
export { unfavoriteArticleReducer };
