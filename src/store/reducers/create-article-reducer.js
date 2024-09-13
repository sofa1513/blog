import { CreateArticleActionTypes } from '../../types/CreateArticle';
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
const createArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CreateArticleActionTypes.FETCH_CREATE_ARTICLE:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case CreateArticleActionTypes.FETCH_CREATE_ARTICLE_SUCCESS:
            return Object.assign(Object.assign({}, state), { article: Object.assign({}, action.payload.article), loading: false, error: null });
        case CreateArticleActionTypes.FETCH_CREATE_ARTICLE_ERROR:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload });
        default:
            return state;
    }
};
export { createArticleReducer };
