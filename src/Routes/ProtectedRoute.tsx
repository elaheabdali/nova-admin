import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../Redux/hooks';
import { ROUTES } from './routePaths';

export function ProtectedRoute() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.login} replace />;
}
