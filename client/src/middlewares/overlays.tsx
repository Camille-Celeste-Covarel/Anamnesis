import type { OverlayRoute } from "../types/contexts/contextsTypes";
import AdminDashboard from "./../pages/AdminDashboard";
import ChangePasswordPage from "./../pages/ChangePasswordPage";
import ForgotPassword from "./../pages/ForgotPassword";
import LoginPage from "./../pages/LoginPage";
import ProfilePage from "./../pages/ProfilePage";
import RegisterPage from "./../pages/RegisterPage";
import ResetPassword from "./../pages/ResetPassword";

// Registre central des overlays
// La clé est le hash qui sera utilisé dans l'URL
export const overlayRoutes: { [key: string]: OverlayRoute } = {
  "#login": { component: <LoginPage />, protection: "public" },
  "#register": { component: <RegisterPage />, protection: "public" },
  "#forgot-password": { component: <ForgotPassword />, protection: "public" },
  "#reset-password": { component: <ResetPassword />, protection: "public" },
  "#profil": { component: <ProfilePage />, protection: "protected" },
  "#change-password": {
    component: <ChangePasswordPage />,
    protection: "protected",
  },
  "#admin": { component: <AdminDashboard />, protection: "admin" },
};
