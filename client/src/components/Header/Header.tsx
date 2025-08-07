import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext.tsx";
import { ProfileDropdown } from "./ProfileDropdown";
import "../../stylesheets/components/Header.css";

function Header() {
  const { isAdmin } = useAuth();

  const renderDesktopNav = () => (
    <div className="desktop-nav-container">
      <nav className="desktop-nav-links">
        <Link to="/version">Note de version</Link>
{/*        <Link to="/item2">Item 2</Link>
        <Link to="/item3">Item 3</Link>
        <Link to="/item4">Item 4</Link>*/}
        {isAdmin && (
          <Link to="/admin/dashboard" className="desktop-nav-link-button">
            Dashboard Admin
          </Link>
        )}
      </nav>
      <ProfileDropdown />
    </div>
  );

  const renderMobileNav = () => <ProfileDropdown />;

  return (
    <header className="topbar-container">
      <Link
        to="/"
        className="logo-button"
        title="Retour à l'accueil"
        aria-label="Retour à l'accueil"
      >
        <h2>Anamnesis</h2>
      </Link>

      {isMobile ? renderMobileNav() : renderDesktopNav()}
    </header>
  );
}

export default Header;
