import { useState } from "react";

export default function RequestForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Request submitted!");

    console.log(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bridge-card space-y-4"
    >
      <input
        name="title"
        placeholder="Request Title"
        className="bridge-input"
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        className="bridge-input"
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        className="bridge-input"
        onChange={handleChange}
      />

      <textarea
        name="description"
        rows="5"
        placeholder="Describe the support you need..."
        className="bridge-input"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="btn-primary"
      >
        Submit Request
      </button>
    </form>
  );
}