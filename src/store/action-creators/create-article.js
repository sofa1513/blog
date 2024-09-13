var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CreateArticleActionTypes } from '../../types/CreateArticle';
import { blogService } from '../../services/BlogFunctions';
export const fetchCreateArticle = (postArticle) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch({ type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE });
            const { article } = yield blogService.postNewArticle(postArticle);
            dispatch({
                type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE_SUCCESS,
                payload: {
                    article: article,
                },
            });
        }
        catch (e) {
            dispatch({
                type: CreateArticleActionTypes.FETCH_CREATE_ARTICLE_ERROR,
                payload: 'Произошла ошибка при создании статьи.',
            });
            throw e;
        }
    });
};
