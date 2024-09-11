import { Dispatch } from 'redux';

import { DeleteArticleActionTypes, DeleteArticleAction } from '../../types/DeleteArticle';
import { blogService } from '../../services/BlogFunctions';

export const fetchDeleteArticle = (slug: string | undefined) => {
  return async (dispatch: Dispatch<DeleteArticleAction>) => {
    try {
      dispatch({ type: DeleteArticleActionTypes.FETCH_DELETE_ARTICLE });

      await blogService.deleteArticle(slug);

      dispatch({
        type: DeleteArticleActionTypes.FETCH_DELETE_ARTICLE_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: DeleteArticleActionTypes.FETCH_DELETE_ARTICLE_ERROR,
        payload: 'Произошла ошибка при удалении статьи.',
      });
      throw e;
    }
  };
};
