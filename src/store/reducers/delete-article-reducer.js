import { DeleteArticleActionTypes } from '../../types/DeleteArticle';
const initialState = {
    loading: false,
    error: null,
};
const deleteArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case DeleteArticleActionTypes.FETCH_DELETE_ARTICLE:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case DeleteArticleActionTypes.FETCH_DELETE_ARTICLE_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, error: null });
        case DeleteArticleActionTypes.FETCH_DELETE_ARTICLE_ERROR:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload });
        default:
            return state;
    }
};
export { deleteArticleReducer };
