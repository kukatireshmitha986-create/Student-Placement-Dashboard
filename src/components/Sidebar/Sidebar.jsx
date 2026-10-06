import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const links = [
    ["DB", "Dashboard", "/dashboard"],
    ["JO", "Job Openings", "/jobs"],
    ["AP", "My Applications", "/applications"],
    ["IN", "Interviews", "/interviews"],
    ["NT", "Notifications", "/notifications"],
    ["PR", "Profile", "/profile"],
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-brand">

        <div className="brand-icon">
          CP
        </div>

        <div>
          <strong>Placement</strong>
          <span>Portal</span>
        </div>

      </div>

      <div className="sidebar-section-title">
        MENU
      </div>

      <nav className="sidebar-nav">

        {links.map(([icon, label, path]) => (

          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "side-link active"
                : "side-link"
            }
          >

            <span className="side-link-icon">
              {icon}
            </span>

            <label>
              {label}
            </label>

          </NavLink>

        ))}

      </nav>

      <div className="sidebar-bottom">

        <button
          className="sidebar-logout"
          onClick={handleLogout}
        >
          <span className="logout-icon">
            LO
          </span>

          <label>
            Logout
          </label>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;