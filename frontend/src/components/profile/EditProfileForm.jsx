import { useState, useEffect } from "react";
import { Camera, Save, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function EditProfileForm() {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    location: "",
    bio: "",
    skills: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.full_name || user.username || "",
        email: user.email || "",
        location: user.location || "",
        bio: user.bio || "",
        skills: (user.skills || []).join(", "),
      });
    }
  }, [user]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required.";
    }

    if (!formData.bio.trim()) {
      newErrors.bio = "Bio is required.";
    } else if (formData.bio.length > 250) {
      newErrors.bio =
        "Bio cannot exceed 250 characters.";
    }

    if (!formData.skills.trim()) {
      newErrors.skills =
        "Please include at least one skill.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    try {
      await updateUser({
        email: formData.email,
        full_name: formData.fullName,
        location: formData.location,
        bio: formData.bio,
        skills: formData.skills,
      });
      navigate("/profile");
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bridge-card space-y-6"
    >
      {/* Avatar */}

      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-[#6B8F71] text-white flex items-center justify-center text-4xl font-bold shadow-lg">
            PM
          </div>

          <button
            type="button"
            className="absolute bottom-0 right-0 bg-[#D08C60] text-white p-2 rounded-full hover:scale-110 transition"
          >
            <Camera size={18} />
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-3">
          Upload photo (Coming Soon)
        </p>
      </div>

      {/* Full Name */}

      <div>
        <label className="font-medium mb-2 block">
          Full Name
        </label>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="bridge-input"
        />

        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email */}

      <div>
        <label className="font-medium mb-2 block">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bridge-input"
        />

        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Location */}

      <div>
        <label className="font-medium mb-2 block">
          Location
        </label>

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="bridge-input"
        />

        {errors.location && (
          <p className="text-red-500 text-sm mt-1">
            {errors.location}
          </p>
        )}
      </div>

      {/* Skills */}

      <div>
        <label className="font-medium mb-2 block">
          Skills
        </label>

        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          className="bridge-input"
          placeholder="Separate skills with commas"
        />

        {errors.skills && (
          <p className="text-red-500 text-sm mt-1">
            {errors.skills}
          </p>
        )}
      </div>

      {/* Bio */}

      <div>
        <label className="font-medium mb-2 block">
          Bio
        </label>

        <textarea
          rows="5"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="bridge-input resize-none"
        />

        <div className="flex justify-between mt-1">
          <span className="text-gray-500 text-sm">
            {formData.bio.length}/250
          </span>

          {errors.bio && (
            <span className="text-red-500 text-sm">
              {errors.bio}
            </span>
          )}
        </div>
      </div>

      {/* Buttons */}

      {errors.submit && (
        <p className="text-sm text-red-500">{errors.submit}</p>
      )}

      <div className="flex gap-4 justify-end">
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition flex items-center gap-2"
        >
          <X size={18} />
          Cancel
        </button>

        <button
          type="submit"
          className="btn-primary flex items-center gap-2"
          disabled={submitting}
        >
          <Save size={18} />
          {submitting ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}