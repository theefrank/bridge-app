import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function RequestForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [skills, setSkills] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    api.get("/skills").then((response) => setSkills(response.data)).catch(() => {});
  }, []);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.description.trim()) {
      newErrors.description =
        "Description is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setSubmitting(true);
      let skill = skills.find((item) => item.name === formData.category);

      if (!skill) {
        const response = await api.post("/skills", {
          name: formData.category,
          category: formData.category,
        });
        skill = response.data;
      }

      await api.post("/requests", {
        title: formData.title.trim(),
        description: formData.description.trim(),
        location: formData.location.trim(),
        skill_id: skill.id,
      });

      setSuccess(true);
      setFormData({ title: "", category: "", location: "", description: "" });
      setTimeout(() => navigate("/requests"), 500);
    } catch (error) {
      setErrors({ submit: error.response?.data?.error || "Could not submit request." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {success && (
        <div className="mb-6 p-4 rounded-xl bg-green-100 text-green-700">
          Request submitted successfully!
        </div>
      )}

      {errors.submit && (
        <div className="mb-6 p-4 rounded-xl bg-red-100 text-red-700">
          {errors.submit}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bridge-card space-y-4"
      >
        <div>
          <input
            name="title"
            value={formData.title}
            placeholder="Request Title"
            className="bridge-input"
            onChange={handleChange}
          />

          {errors.title && (
            <p className="text-red-500 text-sm mt-1">
              {errors.title}
            </p>
          )}
        </div>

        <div>
          
          
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  category: value,
                })
              }
            >
              <SelectTrigger className="w-full px-4 py-6 border rounded-xl text-gray-700 outline-none">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Education">
                  Education
                </SelectItem>

                <SelectItem value="Technology">
                  Technology
                </SelectItem>

                <SelectItem value="Mentorship">
                  Mentorship
                </SelectItem>

                <SelectItem value="Community">
                  Community
                </SelectItem>
              </SelectContent>
            </Select>          
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category}
            </p>
          )}
        </div>

        <div>
          <input
            name="location"
            value={formData.location}
            placeholder="Location"
            className="bridge-input"
            onChange={handleChange}
          />

          {errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location}
            </p>
          )}
        </div>

        <div>
          <textarea
            name="description"
            rows="5"
            value={formData.description}
            placeholder="Describe the support you need..."
            className="bridge-input"
            onChange={handleChange}
          />

          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="btn-primary disabled:opacity-60"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </>
  );
}