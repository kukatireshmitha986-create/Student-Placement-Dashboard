import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Dashboard from "./pages/Dashboard/Dashboard";
import Jobs from "./pages/Jobs/Jobs";
import Applications from "./pages/Applications/Applications";
import Interviews from "./pages/Interviews/Interviews";
import Notifications from "./pages/Notifications/Notifications";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function ProtectedLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="app-layout">
        <Sidebar />
        <div className="app-main">
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedLayout>
            <Dashboard />
          </ProtectedLayout>
        }
      />

      <Route
        path="/jobs"
        element={
          <ProtectedLayout>
            <Jobs />
          </ProtectedLayout>
        }
      />

      <Route
        path="/applications"
        element={
          <ProtectedLayout>
            <Applications />
          </ProtectedLayout>
        }
      />

      <Route
        path="/interviews"
        element={
          <ProtectedLayout>
            <Interviews />
          </ProtectedLayout>
        }
      />

      <Route
        path="/notifications"
        element={
          <ProtectedLayout>
            <Notifications />
          </ProtectedLayout>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedLayout>
            <Profile />
          </ProtectedLayout>
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
