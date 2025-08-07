import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import { useOverlay } from "../../contexts/OverlayContext/OverlayContext";
import "../../stylesheets/components/ProfileDropdown.css";

export function ProfileDropdown() {
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  const { openOverlay } = useOverlay();
  const navigate = useNavigate();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setMenuVisible(false);
  };

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleProfileClick = () => {
    if (isMobile) {
      navigate("/profil");
    } else {
      openOverlay("#profil");
    }
    setMenuVisible(false);
  };

  const handleLoginClick = () => {
    if (isMobile) {
      navigate("/login");
    } else {
      openOverlay("#login");
    }
    setMenuVisible(false);
  };

  if (isLoading) {
    return (
      <div className="profile-dropdown-container" style={{ width: "40px" }} />
    );
  }

  return (
    <div className="profile-dropdown-container" ref={dropdownRef}>
      <button type="button" className="user-avatar-button" onClick={toggleMenu}>
        {isAuthenticated && user?.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt="Avatar de l'utilisateur"
            className="user-avatar"
          />
        ) : (
          <FaUserCircle className="user-avatar-default-icon" />
        )}
      </button>

      {isMenuVisible && (
        <div className="dropdown-menu">
          {isAuthenticated && user ? (
            <>
              <p className="dropdown-greeting">Bonjour, {user.firstName}</p>
              <hr className="dropdown-divider" />
              <button
                type="button"
                className="dropdown-item"
                onClick={handleProfileClick}
              >
                Mon Profil
              </button>
              <button
                type="button"
                className="dropdown-item"
                onClick={handleLogout}
              >
                Se déconnecter
              </button>
            </>
          ) : (
            <button
              type="button"
              className="dropdown-item"
              onClick={handleLoginClick}
            >
              Se connecter
            </button>
          )}
        </div>
      )}
    </div>
  );
}
