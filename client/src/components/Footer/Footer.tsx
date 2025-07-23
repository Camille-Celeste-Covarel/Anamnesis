import "./Footer.css";

import { isMobile } from "react-device-detect";
import {
  FaCalendarCheck,
  FaEnvelope,
  FaInfoCircle,
  FaMapMarkedAlt,
  FaUserShield,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

function Footer() {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const iconSize = 35;

  const navItems = [
    { path: "/", title: "Carte", icon: <FaMapMarkedAlt size={iconSize} /> },
    {
      path: "/reservations",
      title: "Mes réservations",
      icon: <FaCalendarCheck size={iconSize} />,
    },
    {
      path: "/contact",
      title: "Nous contacter",
      icon: <FaEnvelope size={iconSize} />,
    },
    {
      path: "/informations",
      title: "Informations",
      icon: <FaInfoCircle size={iconSize} />,
    },
  ];

  return (
    <div className="navbar-container">
      {isMobile && (
        <>
          {navItems.map((item) => (
            <button
              key={item.path}
              type="button"
              onClick={() => navigate(item.path)}
              title={item.title}
            >
              {item.icon}
            </button>
          ))}

          {isAdmin && (
            <button
              type="button"
              onClick={() => navigate("/admin/dashboard")}
              title="Administration"
            >
              <FaUserShield size={iconSize} />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Footer;
