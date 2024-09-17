
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
