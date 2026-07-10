import { Link } from "react-router-dom";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration functionality coming soon!");
  };

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
          />

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
            type="submit"
            className="btn-primary w-full"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#D08C60] font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}