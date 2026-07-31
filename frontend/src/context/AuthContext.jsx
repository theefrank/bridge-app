import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../services/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("bridgeUser");
    const token = localStorage.getItem("bridgeToken");

    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  async function login(email, password) {
    try {
      const response = await api.post("/auth/login", {
      email,
      password,
    });

console.log("LOGIN RESPONSE:", response.data);
      

      const { token, user } = response.data;

      localStorage.setItem("bridgeToken", token);
      localStorage.setItem(
        "bridgeUser",
        JSON.stringify(user)
      );

      setUser(user);

      return user;
    } catch (error) {
      throw new Error(
        error.response?.data?.error ||
          "Invalid email or password."
      );
    }
  }

  async function register(userData) {
  console.log("Sending:", userData);

  try {
    await api.post("/auth/register", userData);

    return await login(
      userData.email,
      userData.password
    );
  } catch (error) {
    console.log(error.response);

    throw new Error(
      error.response?.data?.error ||
      "Registration failed."
    );
  }
}
  function logout() {
    localStorage.removeItem("bridgeToken");
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

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };

export default AuthProvider;

