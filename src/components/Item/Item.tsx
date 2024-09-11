import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { Like } from '../Like/Like';
import { transformDate, formatDescription, formatTitle } from '../../services/BlogFunctions';
import Avatar from './Avatar';
import Tags from './Tags';
import { ItemProps } from '../../types/Item';
import classes from './item.module.scss';

const Item: React.FC<ItemProps> = ({
  slug,
  author,
  createdAt,
  description,
  tagList,
  title,
  favoritesCount,
  favorited,
}) => {
  const formattedDate = transformDate(createdAt);
  const formattedDescription = formatDescription(description);
  const titleArticle = formatTitle(title);

  return (
    <div className={cn(classes.item)}>
      <div className={cn(classes.item__header)}>
        <div className={cn(classes['header__div-title-tag'])}>
          <div className={cn(classes['div-title-tag__title'])}>
            <Link className={cn(classes['title__title-article'])} to={`/articles/${slug}`}>
              {titleArticle}
            </Link>
            <Like slug={slug} favorited={favorited} favoritesCount={favoritesCount} />
          </div>
          <Tags tags={tagList} />
        </div>
        <div className={cn(classes['header__div-user-date'])}>
          <div className={cn(classes['div-user-date__wrapper-name-date'])}>
            <span className={cn(classes['div-user-date__user-name'])}>{author.username}</span>
            <span className={cn(classes['div-user-date__date'])}>{formattedDate}</span>
          </div>
          <Avatar imageUrl={author.image} />
        </div>
      </div>
      <span className={cn(classes.item__text)}>{formattedDescription}</span>
    </div>
  );
};

export default Item;
