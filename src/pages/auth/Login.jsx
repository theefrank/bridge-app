
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const loggedInUser = await login(
        formData.email,
        formData.password
      );

      if (loggedInUser.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }

    } catch (error) {
      setError(error.message);
    }
  }

  function handleChange(e) {
    setError("");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-6">

      <div className="bridge-card w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Sign in to your Bridge account.
        </p>

        {error && (
          <div className="mb-5 rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-red-700">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bridge-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bridge-input"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn-primary w-full"
          >
            Login
          </button>

        </form>

        <div className="text-center mt-6">

          <Link
            to="/forgot-password"
            className="text-[#D08C60] hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        <p className="text-center text-gray-600 mt-4">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-[#D08C60] font-medium hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}