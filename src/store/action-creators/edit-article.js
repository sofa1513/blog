var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { blogService } from '../../services/BlogFunctions';
import { EditArticleActionTypes } from '../../types/EditArticle';
export const fetchEditArticle = (putArticle, slug) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch({ type: EditArticleActionTypes.FETCH_EDIT_ARTICLE });
            const { article } = yield blogService.putEditArticle(putArticle, slug);
            dispatch({
                type: EditArticleActionTypes.FETCH_EDIT_ARTICLE_SUCCESS,
                payload: article,
            });
        }
        catch (e) {
            dispatch({
                type: EditArticleActionTypes.FETCH_EDIT_ARTICLE_ERROR,
                payload: 'Произошла ошибка при редактировании статьи.',
            });
            throw e;
        }
    });
};
