import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] =
  useState(false);
  const passwordChecks = {
  length: formData.password.length >= 8,

  uppercase: /[A-Z]/.test(
    formData.password
  ),

  lowercase: /[a-z]/.test(
    formData.password
  ),

  number: /\d/.test(
    formData.password
  ),

  special:
    /[@$!%*?&.#_-]/.test(
      formData.password
    ),
  };

  const [errors, setErrors] = useState({});

  async function handleSubmit(e) {
  e.preventDefault();

  const newErrors = {};

  if (!formData.username.trim()) {
    newErrors.username =
      "Username is required";
  }

  if (!formData.email) {
    newErrors.email =
      "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      formData.email
    )
  ) {
    newErrors.email =
      "Enter a valid email";
  }

  if (
    !Object.values(passwordChecks).every(
      Boolean
    )
  ) {
    newErrors.password =
      "Password doesn't meet all requirements.";
  }

  if (
    formData.password !==
    formData.confirmPassword
  ) {
    newErrors.confirmPassword =
      "Passwords do not match";
  }

  setErrors(newErrors);

  if (
    Object.keys(newErrors).length > 0
  ) {
    return;
  }

  try {
    setLoading(true);

    await register({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });

    toast.success(
      "Account created successfully!"
    );

    navigate("/dashboard");

  } catch (error) {

    toast.error(
      error.message ||
        "Registration failed."
    );

  } finally {

    setLoading(false);

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
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value,
              })
            }
            className={`bridge-input mb-1 ${
              errors.username ? "border-red-500" : ""
            }`}
          />

          {errors.username && (
            <p className="text-red-500 text-sm mb-4">
              {errors.username}
            </p>
          )}

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className={`bridge-input mb-1 ${
              errors.email ? "border-red-500" : ""
            }`}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mb-4">
              {errors.email}
            </p>
          )}

          <div className="relative mb-1">
            <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
            setFormData({
            ...formData,
            password: e.target.value,
            })
            }
            className={`bridge-input pr-12 ${
            errors.password ? "border-red-500" : ""
            }`}
            />

            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-500 text-sm mb-4">
              {errors.password}
            </p>
          )}

        <div className="mb-5 space-y-1 text-sm">

          <p
            className={
              passwordChecks.length
                ? "text-[#6B8F71]"
                : "text-gray-500"
            }
          >
            ✓ At least 8 characters
          </p>

          <p
            className={
              passwordChecks.uppercase
                ? "text-[#6B8F71]"
                : "text-gray-500"
            }
          >
            ✓ One uppercase letter
          </p>

          <p
            className={
              passwordChecks.lowercase
                ? "text-[#6B8F71]"
                : "text-gray-500"
            }
          >
            ✓ One lowercase letter
          </p>

          <p
            className={
              passwordChecks.number
                ? "text-[#6B8F71]"
                : "text-gray-500"
            }
          >
            ✓ One number
          </p>

          <p
            className={
              passwordChecks.special
                ? "text-[#6B8F71]"
                : "text-gray-500"
            }
          >
            ✓ One special character
          </p>

        </div>  
          
        <div className="relative mb-1">
          <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
          setFormData({
          ...formData,
          confirmPassword: e.target.value,
          })
          }
          className={`bridge-input pr-12 ${
          errors.confirmPassword
          ? "border-red-500"
          : ""
          }`}
         />

         <button
         type="button"
         onClick={() =>
         setShowConfirmPassword(
         !showConfirmPassword
         )
         }
         className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
         >
         {showConfirmPassword ? (
         <EyeOff size={20} />
         ) : (
         <Eye size={20} />
         )}
         </button>
        </div>

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mb-4">
              {errors.confirmPassword}
            </p>
          )}

          {formData.confirmPassword.length > 0 && (

            <p
              className={`mt-2 text-sm ${
                formData.password ===
                formData.confirmPassword
                  ? "text-[#6B8F71]"
                  : "text-red-500"
              }`}
            >

              {formData.password ===
              formData.confirmPassword
                ? "✓ Passwords match"
                : "✗ Passwords do not match"}

            </p>

          )}

          <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
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