import { AnArticleActionTypes } from '../../types/LoadAnArticle';
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
    loading: true,
    error: null,
};
const loadAnArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case AnArticleActionTypes.FETCH_ARTICLE:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case AnArticleActionTypes.FETCH_ARTICLE_SUCCESS:
            return Object.assign(Object.assign({}, state), { article: Object.assign({}, action.payload), loading: false, error: null });
        case AnArticleActionTypes.FETCH_ARTICLE_ERROR:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload });
        default:
            return state;
    }
};
export { loadAnArticleReducer };
