import { isMobile } from "react-device-detect";
import { FaBook, FaComments, FaLightbulb, FaUserShield } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import "../../stylesheets/components/Footer.css";

function Footer() {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const iconSize = 35;

  const navItems = [
    {
      path: "/Item-1",
      title: "Item 1",
      icon: <TbSpeakerphone size={iconSize} />,
    },
    {
      path: "/Item-2",
      title: "Item 2",
      icon: <FaBook size={iconSize} />,
    },
    {
      path: "/Item-3",
      title: "Item 3",
      icon: <FaComments size={iconSize} />,
    },
    {
      path: "/Item-4",
      title: "Item 4",
      icon: <FaLightbulb size={iconSize} />,
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
