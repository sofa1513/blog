import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { MainPage } from '../../pages/MainPage';
import { ArticlePage } from '../../pages/ArticlePage';
import { SignUpPage } from '../../pages/SignUpPage';
import { SignInPage } from '../../pages/SignInPage';
import { EditProfilePage } from '../../pages/EditProfilePage';
import { NewArticlePage } from '../../pages/NewArticlePage';
import { EditArticlePage } from '../../pages/EditArticlePage';
import { RequireAuth } from '../../hoc/require-auth';
import { AuthProvider } from '../../hoc/auth-provider';
const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const slug = localStorage.getItem('kataBlogSlug');
        if (location.pathname === `/articles/${slug}/edit`) {
            navigate(`/articles/${slug}`);
        }
    }, []);
    return (_jsx(AuthProvider, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(MainPage, {}) }), _jsx(Route, { path: "articles", element: _jsx(Navigate, { to: "/", replace: true }) }), _jsx(Route, { path: "articles/:slug", element: _jsx(ArticlePage, {}) }), _jsx(Route, { path: "sign-up", element: _jsx(SignUpPage, {}) }), _jsx(Route, { path: "sign-in", element: _jsx(SignInPage, {}) }), _jsx(Route, { path: "profile", element: _jsx(RequireAuth, { children: _jsx(EditProfilePage, {}) }) }), _jsx(Route, { path: "new-article", element: _jsx(RequireAuth, { children: _jsx(NewArticlePage, {}) }) }), _jsx(Route, { path: "articles/:slug/edit", element: _jsx(RequireAuth, { children: _jsx(EditArticlePage, {}) }) }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] }) }) }));
};
export default App;
