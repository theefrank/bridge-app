import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await register(formData);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-6">
      <div className="bridge-card w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">
          Join Bridge
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Create your account and start making an impact.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="bridge-input mb-4"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

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
            className="bridge-input mb-6"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />

          <button type="submit" className="btn-primary w-full">
            Create Account
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#D08C60] font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
      