export default function OpportunityFilters({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "All",
    "Education",
    "Technology",
    "Career",
    "Community",
    "Wellness",
    "Mentorship",
  ];

  return (
    <select
      value={selectedCategory}
      onChange={(e) =>
        setSelectedCategory(e.target.value)
      }
      className="bridge-input md:w-64"
    >
      {categories.map((category) => (
        <option
          key={category}
          value={category}
        >
          {category}
        </option>
      ))}
    </select>
  );
}