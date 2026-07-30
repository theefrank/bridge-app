import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.#_-]).{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Use at least 8 characters with a letter, number, and special character";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    login({
      id: 1,
      name: formData.name,
      role: "user",
    });

    navigate("/dashboard");
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
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            className={`bridge-input mb-1 ${
              errors.name ? "border-red-500" : ""
            }`}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mb-4">
              {errors.name}
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

          <button
            type="submit"
            className="btn-primary w-full mt-2"
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