import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import { isValidUrl } from '../../services/BlogFunctions';
import classes from './item.module.scss';
import defaultAvatar from './avatar.svg';
const Avatar = ({ imageUrl }) => {
    const avatarSrc = isValidUrl(imageUrl) ? imageUrl : defaultAvatar;
    return _jsx("img", { className: cn(classes['div-users-date__user-avatar']), src: avatarSrc, alt: "User avatar" });
};
export default Avatar;
