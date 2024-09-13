import { EditArticleActionTypes } from '../../types/EditArticle';
const initialState = {
    article: {
        slug: '',
        title: '',
        favoritesCount: 0,
        tagList: [],
        author: {
            following: false,
            image: '',
            username: '',
        },
        createdAt: '',
        description: '',
        body: '',
    },
    loading: false,
    error: null,
};
const editArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case EditArticleActionTypes.FETCH_EDIT_ARTICLE:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case EditArticleActionTypes.FETCH_EDIT_ARTICLE_SUCCESS:
            return Object.assign(Object.assign({}, state), { article: Object.assign({}, action.payload), loading: false, error: null });
        case EditArticleActionTypes.FETCH_EDIT_ARTICLE_ERROR:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload });
        default:
            return state;
    }
};
export { editArticleReducer };
