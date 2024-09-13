import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';
const NotFoundPage = () => {
    return (_jsxs("div", { className: classes['not-found-page'], children: ["Page is not found. Go to", _jsx(Link, { to: "/", className: classes['not-found-page__link'], children: "Home Page" }), "."] }));
};
export { NotFoundPage };
