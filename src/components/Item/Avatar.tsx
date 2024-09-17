

import React, { useState } from 'react';
import cn from 'classnames';
import { AvatarProps } from '../../types/Item';
import { isValidUrl } from '../../services/BlogFunctions';
import classes from './item.module.scss';
import defaultAvatar from './avatar.svg';

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  
  const [avatarSrc, setAvatarSrc] = useState<string>(
    isValidUrl(imageUrl || '') ? (imageUrl || '') : defaultAvatar
  );

  const handleImageError = () => {
    setAvatarSrc(defaultAvatar); // заглушка
  };

  return (
    <img
      className={cn(classes['div-users-date__user-avatar'])}
      src={avatarSrc}
      alt="User avatar"
      onError={handleImageError} // обработчик ошибки
    />
  );
};

export default Avatar;
