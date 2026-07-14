import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
       newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.#_-]).{8,}$/.test(
      formData.password
    )
    ) {
      newErrors.password = "Use at least 8 characters with a letter, number, and special character";
    }
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    login({
      id: 1,
      name: "Test User",
      role: "user",
    });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-6">
      <div className="bridge-card w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Sign in to your Bridge account.
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className={`bridge-input mb-1 ${
              errors.email
                ? "border-red-500"
                : ""
            }`}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mb-4">
              {errors.email}
            </p>
          )}

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            className={`bridge-input mb-1 ${
              errors.password
                ? "border-red-500"
                : ""
            }`}
          />

          

          {errors.password && (
            <p className="text-red-500 text-sm mb-4">
              {errors.password}
            </p>
          )}

          <button
            type="submit"
            className="btn-primary w-full mt-2"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/forgot-password"
            className="text-[#D08C60]"
          >
            Forgot Password?
          </Link>
        </div>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#D08C60] font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}