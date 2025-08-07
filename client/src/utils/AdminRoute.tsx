import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import type { AdminRouteProps } from "../types/utils/utilsTypes.ts";

const AdminRoute = ({ children }: AdminRouteProps) => {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return null; // Affichez un spinner de chargement ici si vous le souhaitez
  }

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/" replace />; // Redirige vers l'accueil si non-admin
  }

  return <>{children}</>;
};

export default AdminRoute;
