import { Link } from "react-router-dom";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality coming soon!");
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

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="bridge-input mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="bridge-input mb-4"
          />

          <button
            type="submit"
            className="btn-primary w-full"
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