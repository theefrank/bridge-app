import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset functionality coming soon!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-6">
      <div className="bridge-card w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">
          Forgot Password
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Enter your email and we'll send reset instructions.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className="bridge-input mb-6"
          />

          <button
            type="submit"
            className="btn-primary w-full"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-[#D08C60]"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}