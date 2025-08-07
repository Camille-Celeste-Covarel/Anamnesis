import { isMobile } from "react-device-detect";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Overlay } from "./components/Overlay/Overlay";
import ToastContainer from "./components/Toast/ToastContainer";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { OverlayProvider } from "./contexts/OverlayContext/OverlayContext";
import { overlayRoutes } from "./middlewares/overlays.tsx";
import type { OverlayRoute } from "./types/contexts/contextsTypes.ts";

import "./stylesheets/normalize.css";
import "./stylesheets/App.css";

function AppContent() {
  const location = useLocation();
  const { isAuthenticated, isAdmin } = useAuth();

  let currentOverlayRoute: OverlayRoute | undefined;

  if (!isMobile) {
    // On cherche une correspondance dans les routes statiques (ex: #login, #register)
    currentOverlayRoute = overlayRoutes[location.hash];
  }

  let isAuthorized = false;
  if (currentOverlayRoute) {
    switch (currentOverlayRoute.protection) {
      case "public":
        isAuthorized = true;
        break;
      case "protected":
        isAuthorized = isAuthenticated;
        break;
      case "admin":
        isAuthorized = isAuthenticated && isAdmin;
        break;
      default:
        isAuthorized = false;
    }
  }

  const shouldShowOverlay = isAuthorized && currentOverlayRoute;
  const overlayContent = shouldShowOverlay ? shouldShowOverlay.component : null;

  const routeContent = <Outlet />;

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="main-page-container">{routeContent}</div>
        {shouldShowOverlay && <Overlay>{overlayContent}</Overlay>}
        <ToastContainer />
      </main>
      {isMobile && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <OverlayProvider>
        <AppContent />
      </OverlayProvider>
    </AuthProvider>
  );
}

export default App;
