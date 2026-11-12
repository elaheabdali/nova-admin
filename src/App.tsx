import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './Redux/hooks';
import { themes } from './Shared/theme';
import { GlobalStyle } from './Shared/GlobalStyle';
import { AdminLayout } from './Components/AdminLayout';
import { ProtectedRoute } from './Routes/ProtectedRoute';
import { ROUTES } from './Routes/routePaths';
import { LoginPage } from './Pages/LoginPage';
import { ProductsPage } from './Pages/ProductsPage';
import { UsersPage } from './Pages/UsersPage';
import { CreateProductPage } from './Pages/CreateProductPage';
import { CreateUserPage } from './Pages/CreateUserPage';
import { AppLanguage } from './types/Enums/AppLanguage';

function DirectionSync() {
  const language = useAppSelector((s) => s.settings.language);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir =
      language === AppLanguage.Persian ? 'rtl' : 'ltr';
  }, [language]);
  return null;
}

export default function App() {
  const themeName = useAppSelector((s) => s.settings.theme);
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);
  return (
    <ThemeProvider theme={themes[themeName]}>
      <GlobalStyle />
      <DirectionSync />
      <Routes>
        <Route
          path={ROUTES.login}
          element={
            isAuthenticated ? (
              <Navigate to={ROUTES.products} replace />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route
              path="/"
              element={<Navigate to={ROUTES.products} replace />}
            />
            <Route path={ROUTES.products} element={<ProductsPage />} />
            <Route
              path={ROUTES.createProduct}
              element={<CreateProductPage />}
            />
            <Route path={ROUTES.users} element={<UsersPage />} />
            <Route path={ROUTES.createUser} element={<CreateUserPage />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Navigate
              to={isAuthenticated ? ROUTES.products : ROUTES.login}
              replace
            />
          }
        />
      </Routes>
    </ThemeProvider>
  );
}
