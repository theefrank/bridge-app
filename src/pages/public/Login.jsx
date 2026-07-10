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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(formData);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
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

        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="bridge-input mb-4"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="bridge-input mb-4"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
            className="text-[#D08C60]"
          >
            Forgot Password?
          </Link>
        </div>
        <p className="text-center text-gray-600 mt-4">
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