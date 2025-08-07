import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import type { ProtectedRouteProps } from "../types/utils/utilsTypes.ts";

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
