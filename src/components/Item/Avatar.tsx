import React from 'react';
import cn from 'classnames';
import { AvatarProps } from '../../types/Item';
import { isValidUrl } from '../../services/BlogFunctions';
import classes from './item.module.scss';
import defaultAvatar from './avatar.svg';

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  const avatarSrc = isValidUrl(imageUrl) ? imageUrl : defaultAvatar;
  return <img className={cn(classes['div-users-date__user-avatar'])} src={avatarSrc} alt="User avatar" />;
};

export default Avatar;
