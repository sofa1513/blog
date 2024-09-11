import { useState, useEffect } from 'react';
import cn from 'classnames';

import { useActions } from '../../hooks/useActions';
import { useAuth } from '../../hooks/useAuth';

import likeIcon from './like.svg';
import redLikeIcon from './redLike.svg';
import classes from './like.module.scss';

interface ILikeProps {
  slug: string | undefined;
  favorited: boolean | undefined;
  favoritesCount: number;
}

const Like = ({ slug, favorited, favoritesCount }: ILikeProps) => {
  const [isLiked, setIsLiked] = useState(favorited);
  const [likeCount, setLikeCount] = useState(favoritesCount);

  const { fetchFavoriteArticle, fetchUnfavoriteArticle } = useActions();
  const { newUser } = useAuth();
  const username = newUser?.username;

  
  useEffect(() => {
    setIsLiked(favorited);
    setLikeCount(favoritesCount);
  }, [favorited, favoritesCount]);

  const toggleLike = async () => {
    try {
      if (isLiked) {
        await fetchUnfavoriteArticle(slug);
        setIsLiked(false);
        setLikeCount((prevCount) => prevCount - 1);
      } else {
        await fetchFavoriteArticle(slug);
        setIsLiked(true);
        setLikeCount((prevCount) => prevCount + 1);
      }
    } catch (error) {
      console.error('Error handling like:', error);
    }
  };

  const likeIconSrc = isLiked ? redLikeIcon : likeIcon;
  const handleClick = username ? toggleLike : () => null; // Запрет кликаесли  не авторизован
  const cursorClass = username ? classes['like-cursor'] : ''; 

  return (
    <div className={cn(classes['title__div-likes'])}>
      <img
        className={cn(classes['div-likes__icon-like'], cursorClass)}
        src={likeIconSrc}
        alt="like-icon"
        onClick={handleClick}
      />
      <span className={cn(classes['div-likes__counter-likes'])}>{likeCount}</span>
    </div>
  );
};

export { Like };
