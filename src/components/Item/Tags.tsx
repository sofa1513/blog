import React from 'react';
import cn from 'classnames';
import { TagsProps } from '../../types/Item';
import { isTagsValid } from '../../services/BlogFunctions';
import classes from './item.module.scss';

const Tags: React.FC<TagsProps> = ({ tags }) => {
  const validTags = isTagsValid(tags);
  if (!validTags || validTags.length === 0) return null;

  return (
    <div className={cn(classes['div-title-tag__div-tags'])}>
      {validTags.map((tag, index) => (
        <div key={index} className={cn(classes['div-tags__tag'])}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tags;
