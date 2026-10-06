import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <header className="top-navbar">

      <div className="navbar-heading">

        <span className="navbar-overline">
          STUDENT PORTAL
        </span>

        <h1>
          Student Placement Dashboard
        </h1>

        <p>
          Manage your placement journey
        </p>

      </div>

      <div className="navbar-user">

        <button
          className="notification-button"
          onClick={() => navigate("/notifications")}
          title="Notifications"
        >
          NT
        </button>

        <div className="navbar-avatar">
          {user?.name?.charAt(0)?.toUpperCase() || "S"}
        </div>

        <div className="navbar-user-info">

          <strong>
            {user?.name || "Student"}
          </strong>

          <span>
            {user?.department || "Student"}
          </span>

        </div>

      </div>

    </header>
  );
}

export default Navbar;