/* import React, { useState } from 'react';
import cn from 'classnames';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import avatar from '../../assets/avatar.svg';
import classes from './AuthPanelGranted.module.scss';

const AuthPanelGranted = () => {
  const { newUser, signOut } = useAuth();
  const navigate = useNavigate();
  const fromPage = useLocation();
  const { fetchArticles } = useActions();

  const signUsername = useTypedSelector((state) => state.userData.user.username);
  const editedUsername = useTypedSelector((state) => state.editProfile.user.username);
  const signImage = useTypedSelector((state) => state.userData.user.image);
  const editedImage = useTypedSelector((state) => state.editProfile.user.image);

  const username = editedUsername || signUsername || newUser?.username;
  const image = editedImage || signImage || newUser?.image;

  const [avatarSrc, setAvatarSrc] = useState(image || avatar);

  const handleImageError = () => {
    setAvatarSrc(avatar); // заглушка
  };

  function onLogOut() {
    signOut(() => navigate(fromPage, { replace: true }));
    fetchArticles();
  }

  return (
    <div className={cn(classes['header__auth-granted'])}>
      <Link to="/new-article" className={cn(classes['auth-granted__create-article'])}>
        Create article
      </Link>
      <div className={cn(classes['auth-granted__div-user'])}>
        <Link to="/profile" className={cn(classes['div-user__name'])}>
          {username}
        </Link>
        <Link to="/profile">
          <img
            className={cn(classes['div-user__avatar'])}
            src={avatarSrc}
            alt="avatar"
            onError={handleImageError} // обработчик ошибки 
          />
        </Link>
      </div>
      <button className={cn(classes['auth-granted__log-out'])} onClick={onLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default AuthPanelGranted;
 */


import { useState, useEffect } from 'react';
import cn from 'classnames';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import avatar from '../../assets/avatar.svg'; // Аватар по умолчанию
import classes from './AuthPanelGranted.module.scss';

const AuthPanelGranted = () => {
  const { newUser, signOut } = useAuth();
  const navigate = useNavigate();
  const fromPage = useLocation();
  const { fetchArticles } = useActions();

  // Состояния для имени пользователя и аватара
  const [username, setUsername] = useState<string | null>(null);
  const [avatarSrc, setAvatarSrc] = useState<string>(avatar);

  // Получаем данные пользователя
  const signUsername = useTypedSelector((state) => state.userData.user.username);
  const editedUsername = useTypedSelector((state) => state.editProfile.user.username);
  const signImage = useTypedSelector((state) => state.userData.user.image);
  const editedImage = useTypedSelector((state) => state.editProfile.user.image);

  // Загружаем данные при монтировании компонента и при изменении данных
  useEffect(() => {
    const finalUsername = editedUsername || signUsername || newUser?.username || 'Anonymous';
    const finalImage = editedImage || signImage || newUser?.image;

    if (finalImage) {
      setAvatarSrc(finalImage);
    } else {
      setAvatarSrc(avatar);
    }

    setUsername(finalUsername);
  }, [editedUsername, signUsername, editedImage, signImage, newUser]);

  // Функция для замены изображения на заглушку при ошибке
  const handleImageError = () => {
    setAvatarSrc(avatar); // Устанавливаем заглушку, если картинка не загрузилась
  };

  function onLogOut() {
    signOut(() => navigate(fromPage, { replace: true }));
    fetchArticles();
  }

  // Проверяем, что данные загружены перед рендером
  if (username === null) {
    return <div>Loading...</div>; // Пока данные не загружены, показываем спиннер или текст
  }

  return (
    <div className={cn(classes['header__auth-granted'])}>
      <Link to="/new-article" className={cn(classes['auth-granted__create-article'])}>
        Create article
      </Link>
      <div className={cn(classes['auth-granted__div-user'])}>
        <Link to="/profile" className={cn(classes['div-user__name'])}>
          {username}
        </Link>
        <Link to="/profile">
          <img
            className={cn(classes['div-user__avatar'])}
            src={avatarSrc}
            alt="avatar"
            onError={handleImageError}
          />
        </Link>
      </div>
      <button className={cn(classes['auth-granted__log-out'])} onClick={onLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default AuthPanelGranted;
