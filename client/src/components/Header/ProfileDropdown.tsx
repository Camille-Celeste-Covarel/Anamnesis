import { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import "./ProfileDropdown.css";

export function ProfileDropdown() {
  const { user, isAuthenticated, logout, isLoading } = useAuth();
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
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
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
              <Link
                to="/profil"
                className="dropdown-item"
                onClick={() => setMenuVisible(false)}
              >
                Mon Profil
              </Link>
              <button
                type="button"
                className="dropdown-item"
                onClick={handleLogout}
              >
                Se déconnecter
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="dropdown-item"
              onClick={() => setMenuVisible(false)}
            >
              Se connecter
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
