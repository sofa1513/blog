import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import avatar from '../item/avatar.svg';
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
    const username = !editedUsername ? signUsername : editedUsername;
    const image = !editedImage ? signImage : editedImage;
    const usernameWithStorage = username ? username : newUser === null || newUser === void 0 ? void 0 : newUser.username;
    const imageWithStorage = image ? image : newUser === null || newUser === void 0 ? void 0 : newUser.image;
    const isAvatar = imageWithStorage ? imageWithStorage : avatar;
    function onLogOut() {
        signOut(() => navigate(fromPage, { replace: true }));
        fetchArticles();
    }
    return (_jsxs("div", { className: cn(classes['header__auth-granted']), children: [_jsx(Link, { to: "/new-article", className: cn(classes['auth-granted__create-article']), children: "Create article" }), _jsxs("div", { className: cn(classes['auth-granted__div-user']), children: [_jsx(Link, { to: "/profile", className: cn(classes['div-user__name']), children: usernameWithStorage }), _jsx(Link, { to: "/profile", children: _jsx("img", { className: cn(classes['div-user__avatar']), src: isAvatar, alt: "avatar" }) })] }), _jsx("button", { className: cn(classes['auth-granted__log-out']), onClick: onLogOut, children: "Log Out" })] }));
};
export default AuthPanelGranted;
