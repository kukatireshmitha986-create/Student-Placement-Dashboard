import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("placementUser");
    return saved ? JSON.parse(saved) : null;
  });

  const register = (userData) => {
    localStorage.setItem("registeredUser", JSON.stringify(userData));
    setUser(userData);
    localStorage.setItem("placementUser", JSON.stringify(userData));
  };

  const login = (email, password) => {
    const saved = localStorage.getItem("registeredUser");

    if (!saved) {
      return {
        success: false,
        message: "No account found. Please register first.",
      };
    }

    const registered = JSON.parse(saved);

    if (
      registered.email === email &&
      registered.password === password
    ) {
      setUser(registered);
      localStorage.setItem("placementUser", JSON.stringify(registered));

      return {
        success: true,
        message: "Login successful",
      };
    }

    return {
      success: false,
      message: "Invalid email or password.",
    };
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("placementUser", JSON.stringify(updatedUser));
    localStorage.setItem("registeredUser", JSON.stringify(updatedUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("placementUser");
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("placementUser", JSON.stringify(user));
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
