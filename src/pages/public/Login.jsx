import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="bridge-card w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

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
            className="bridge-input mb-6"
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
      </div>
    </div>
  );
}