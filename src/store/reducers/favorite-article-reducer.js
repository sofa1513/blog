import { FavoriteActionTypes } from '../../types/FavoriteArticle';
const initialState = {
    loading: false,
    error: null,
};
const favoriteArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FavoriteActionTypes.FETCH_FAVORITE_ARTICLE:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case FavoriteActionTypes.FETCH_FAVORITE_ARTICLE_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, error: null });
        case FavoriteActionTypes.FETCH_FAVORITE_ARTICLE_ERROR:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload });
        default:
            return state;
    }
};
export { favoriteArticleReducer };
