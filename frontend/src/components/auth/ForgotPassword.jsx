import { Link } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-6">

      <div className="w-full max-w-xl">

        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold">
            Forgot Password?
          </h1>

          <p className="text-gray-600 mt-3">
            Enter your email address and we'll
            send you instructions to reset your password.
          </p>

        </div>

        <ForgotPasswordForm />

        <div className="text-center mt-8">

          <Link
            to="/login"
            className="text-[#D08C60] hover:underline"
          >
            ← Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}