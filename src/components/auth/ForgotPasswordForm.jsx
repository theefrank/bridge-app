import { useState } from "react";
import SuccessMessage from "./SuccessMessage";

export default function ForgotPasswordForm() {

  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const [submitted, setSubmitted] = useState(false);

  function validate() {

    if (!email.trim()) {
      setError("Email is required.");
      return false;
    }

    const emailRegex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    setError("");
    return true;
  }

  function handleSubmit(e) {

    e.preventDefault();

    if (!validate()) return;

    console.log(email);

    setSubmitted(true);
  }

  if (submitted) {
    return <SuccessMessage email={email} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bridge-card max-w-md mx-auto space-y-6"
    >

      <div>

        <label className="block font-medium mb-2">
          Email Address
        </label>

        <input
          type="email"
          className="bridge-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        {error && (
          <p className="text-red-500 text-sm mt-2">
            {error}
          </p>
        )}

      </div>

      <button
        type="submit"
        className="btn-primary w-full"
      >
        Send Reset Link
      </button>

    </form>
  );
}