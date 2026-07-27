import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("bridgeUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  function login(email, password) {
    // Mock admin account
    if (
      email === "admin@bridge.com" &&
      password === "admin123"
    ) {
      const admin = {
        id: 1,
        name: "Bridge Admin",
        email,
        role: "admin",
      };

      localStorage.setItem(
        "bridgeUser",
        JSON.stringify(admin)
      );

      setUser(admin);

      return admin;
    }

    // Mock user account
    const normalUser = {
      id: 2,
      name: "Bridge User",
      email,
      role: "user",
    };

    localStorage.setItem(
      "bridgeUser",
      JSON.stringify(normalUser)
    );

    setUser(normalUser);

    return normalUser;
  }

  function register(userData) {
    const newUser = {
      ...userData,
      id: Date.now(),
      role: "user",
    };

    localStorage.setItem(
      "bridgeUser",
      JSON.stringify(newUser)
    );

    setUser(newUser);

    return newUser;
  }

  function logout() {
    localStorage.removeItem("bridgeUser");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}