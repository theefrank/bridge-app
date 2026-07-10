import { createContext, useState, useEffect, useContext } from "react";

import {loginUser,registerUser,logoutUser,getCurrentUser,
} from "../services/authService";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    checkSession();
  }, []);

  async function login(credentials) {
    const data = await loginUser(credentials);
    setUser(data);
    return data;
  }

  async function register(userData) {
    const data = await registerUser(userData);
    setUser(data);
    return data;
  }

  async function logout() {
    await logoutUser();
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


