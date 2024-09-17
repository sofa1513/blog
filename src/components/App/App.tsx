/* import { useEffect } from 'react';
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

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="articles" element={<Navigate to="/" replace />} />
          <Route path="articles/:slug" element={<ArticlePage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <EditProfilePage />
              </RequireAuth>
            }
          />
          <Route
            path="new-article"
            element={
              <RequireAuth>
                <NewArticlePage />
              </RequireAuth>
            }
          />
          <Route
            path="articles/:slug/edit"
            element={
              <RequireAuth>
                <EditArticlePage />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
 

 */
import { Routes, Route, Navigate } from 'react-router-dom';
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
import { ROUTES } from '../../routes';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTES.ARTICLES} element={<Navigate to={ROUTES.HOME} replace />} />
          <Route path={ROUTES.ARTICLE} element={<ArticlePage />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
          <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
          <Route
            path={ROUTES.PROFILE}
            element={
              <RequireAuth>
                <EditProfilePage />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.NEW_ARTICLE}
            element={
              <RequireAuth>
                <NewArticlePage />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.EDIT_ARTICLE}
            element={
              <RequireAuth>
                <EditArticlePage />
              </RequireAuth>
            }
          />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
