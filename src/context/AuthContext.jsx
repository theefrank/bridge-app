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

  // Admin Login
  if (
    email === "admin@bridge.com" &&
    password === "Admin@123"
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

  // User Login
  if (
    email === "user@bridge.com" &&
    password === "User@123"
  ) {

    const user = {
      id: 2,
      name: "Bridge User",
      email,
      role: "user",
    };

    localStorage.setItem(
      "bridgeUser",
      JSON.stringify(user)
    );

    setUser(user);

    return user;
  }

  throw new Error("Invalid email or password.");
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