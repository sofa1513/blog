import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import { Link } from 'react-router-dom';
import AuthPanelDenied from '../AuthPanelDenied/AuthPanelDenied';
import AuthPanelGranted from '../AuthPanelGranted/AuthPanelGranted';
import { useAuth } from '../../hooks/useAuth';
import classes from './AppHeader.module.scss';
const AppHeader = () => {
    const { newUser } = useAuth();
    const authPanel = (newUser === null || newUser === void 0 ? void 0 : newUser.username) ? _jsx(AuthPanelGranted, {}) : _jsx(AuthPanelDenied, {});
    return (_jsxs("header", { className: cn(classes.app__header), children: [_jsx(Link, { to: "/", className: cn(classes['header__title-blog']), children: "Realworld Blog" }), authPanel] }));
};
export default AppHeader;
