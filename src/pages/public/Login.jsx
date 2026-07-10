import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({
      id: 1,
      name: "Test User",
      role: "user",
    });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bridge-card w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="bridge-input mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="bridge-input mb-6"
        />

        <button
          onClick={handleLogin}
          className="btn-primary w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
}