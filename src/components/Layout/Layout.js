import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import cn from 'classnames';
import AppHeader from '../AppHeader/AppHeader';
import classes from '../app/app.module.scss';
const Layout = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: cn(classes.app), children: [_jsx(AppHeader, {}), _jsx(Outlet, {})] }) }));
};
export { Layout };
