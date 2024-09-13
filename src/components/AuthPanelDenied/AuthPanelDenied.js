import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import { Link } from 'react-router-dom';
import classes from './AuthPanelDenied.module.scss';
const AuthPanelDenied = () => {
    return (_jsxs("div", { className: cn(classes['header__auth-btns']), children: [_jsx(Link, { to: "/sign-in", children: _jsx("button", { className: cn(classes['auth-btns__sign-in']), children: "Sign In" }) }), _jsx(Link, { to: "/sign-up", children: _jsx("button", { className: cn(classes['auth-btns__sign-up']), children: "Sign Up" }) })] }));
};
export default AuthPanelDenied;
