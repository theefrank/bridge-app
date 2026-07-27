import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function SuccessMessage({ email }) {
  return (
    <div className="bridge-card text-center max-w-md mx-auto">

      <CheckCircle2
        size={70}
        className="mx-auto text-[#6B8F71]"
      />

      <h2 className="text-3xl font-bold mt-6">
        Check Your Email
      </h2>

      <p className="text-gray-600 mt-4 leading-7">
        If an account exists for
        <span className="font-semibold">
          {" "}{email}
        </span>,
        we've sent password reset instructions.
      </p>

      <Link
        to="/login"
        className="btn-primary inline-block mt-8"
      >
        Back to Login
      </Link>

    </div>
  );
}