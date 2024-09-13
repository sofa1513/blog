var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FavoriteActionTypes } from '../../types/FavoriteArticle';
import { blogService } from '../../services/BlogFunctions';
export const fetchFavoriteArticle = (slug) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch({ type: FavoriteActionTypes.FETCH_FAVORITE_ARTICLE });
            yield blogService.postFavoriteArticle(slug);
            dispatch({
                type: FavoriteActionTypes.FETCH_FAVORITE_ARTICLE_SUCCESS,
            });
        }
        catch (e) {
            dispatch({
                type: FavoriteActionTypes.FETCH_FAVORITE_ARTICLE_ERROR,
                payload: 'Произошла ошибка при удалении статьи.',
            });
            throw e;
        }
    });
};
