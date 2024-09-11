import { Dispatch } from 'redux';

import { UnfavoriteActionTypes, UnlikeArticleAction } from '../../types/UnfavoriteArticle';
import { blogService } from '../../services/BlogFunctions';

export const fetchUnfavoriteArticle = (slug: string | undefined) => {
  return async (dispatch: Dispatch<UnlikeArticleAction>) => {
    try {
      dispatch({ type: UnfavoriteActionTypes.FETCH_UNFAVORITE_ARTICLE });

      await blogService.deleteFavoriteOnArticle(slug);

      dispatch({
        type: UnfavoriteActionTypes.FETCH_UNFAVORITE_ARTICLE_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: UnfavoriteActionTypes.FETCH_UNFAVORITE_ARTICLE_ERROR,
        payload: 'Произошла ошибка при удалении статьи.',
      });
      throw e;
    }
  };
};
