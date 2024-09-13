import { ArticlesActionTypes } from '../../types/LoadArticles';
const initialState = {
    articles: [],
    articlesCount: 0,
    page: 1,
    loading: true,
    error: null,
};
export const loadArticlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ArticlesActionTypes.FETCH_ARTICLES:
            return Object.assign(Object.assign({}, state), { articles: [], loading: true, error: null });
        case ArticlesActionTypes.FETCH_ARTICLES_SUCCESS:
            return Object.assign(Object.assign({}, state), { articles: action.payload.articles, articlesCount: action.payload.articlesCount, page: action.payload.page, loading: false, error: null });
        case ArticlesActionTypes.FETCH_ARTICLES_ERROR:
            return Object.assign(Object.assign({}, state), { articles: [], loading: false, error: action.payload });
        default:
            return state;
    }
};
