import { ArticleState, ArticleActionTypes, ArticleAction } from '../../types/LoadAnArticle';

const initialState: ArticleState = {
  article: {
    slug: '',
    title: '',
    favoritesCount: 0,
    tagList: [],
    author: {
      following: false,
      image: '',
      username: '',
      bio: null
    },
    createdAt: '',
    description: '',
    body: '',
  },
  loading: true,
  error: null,
};

const loadAnArticleReducer = (state = initialState, action: ArticleAction): ArticleState => {
  switch (action.type) {
    case ArticleActionTypes.FETCH_ARTICLE:
      return { ...state, loading: true, error: null };
    case ArticleActionTypes.FETCH_ARTICLE_SUCCESS:
      return { ...state, article: { ...action.payload }, loading: false, error: null };
    case ArticleActionTypes.FETCH_ARTICLE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { loadAnArticleReducer };
