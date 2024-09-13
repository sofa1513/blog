var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ArticlesActionTypes } from '../../types/LoadArticles';
import { AnArticleActionTypes } from '../../types/LoadAnArticle';
import { blogService } from '../../services/BlogFunctions';
export const fetchArticles = (offset = 0) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch({ type: ArticlesActionTypes.FETCH_ARTICLES });
            const localStorageOffset = localStorage.getItem('blogKataOffset');
            const actualOffset = localStorageOffset ? localStorageOffset : offset;
            const { articles, articlesCount, page } = yield blogService.getArticlesGlobally(+actualOffset);
            localStorage.setItem('blogKataPage', String(page));
            dispatch({
                type: ArticlesActionTypes.FETCH_ARTICLES_SUCCESS,
                payload: {
                    articles,
                    articlesCount,
                    page,
                },
            });
        }
        catch (e) {
            dispatch({
                type: ArticlesActionTypes.FETCH_ARTICLES_ERROR,
                payload: 'Произошла ошибка при загрузке статей.',
            });
            throw e;
        }
    });
};
export const fetchAnArticle = (slug) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch({ type: AnArticleActionTypes.FETCH_ARTICLE });
            const article = yield blogService.getAnArticle(slug);
            dispatch({
                type: AnArticleActionTypes.FETCH_ARTICLE_SUCCESS,
                payload: Object.assign({}, article),
            });
        }
        catch (e) {
            dispatch({
                type: AnArticleActionTypes.FETCH_ARTICLE_ERROR,
                payload: 'Произошла ошибка при загрузке статьи.',
            });
        }
    });
};
