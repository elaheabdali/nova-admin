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
<<<<<<< HEAD
  const language = useAppSelector((s) => s.settings.language);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir =
      language === AppLanguage.Persian ? 'rtl' : 'ltr';
  }, [language]);
=======
  const language=useAppSelector(s=>s.settings.language);
  useEffect(()=>{document.documentElement.lang=language;document.documentElement.dir=language===AppLanguage.Persian?'rtl':'ltr';},[language]);
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
  return null;
}

export default function App() {
<<<<<<< HEAD
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
=======
  const themeName=useAppSelector(s=>s.settings.theme);
  const isAuthenticated=useAppSelector(s=>s.auth.isAuthenticated);
  const location=useLocation();
  useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});},[location.pathname]);
  return <ThemeProvider theme={themes[themeName]}><GlobalStyle/><DirectionSync/><Routes>
    <Route path={ROUTES.login} element={isAuthenticated?<Navigate to={ROUTES.products} replace/>:<LoginPage/>}/>
    <Route element={<ProtectedRoute/>}><Route element={<AdminLayout/>}>
      <Route path="/" element={<Navigate to={ROUTES.products} replace/>}/>
      <Route path={ROUTES.products} element={<ProductsPage/>}/>
      <Route path={ROUTES.createProduct} element={<CreateProductPage/>}/>
      <Route path={ROUTES.users} element={<UsersPage/>}/>
      <Route path={ROUTES.createUser} element={<CreateUserPage/>}/>
    </Route></Route>
    <Route path="*" element={<Navigate to={isAuthenticated?ROUTES.products:ROUTES.login} replace/>}/>
  </Routes></ThemeProvider>;
>>>>>>> b62e56c9aafddd23149e9786257db300dd428d16
}
