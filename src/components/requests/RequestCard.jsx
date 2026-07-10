export default function RequestCard({
  title,
  category,
  location,
  description,
}) {
  return (
    <div className="bridge-card">
      <span className="inline-block px-3 py-1 rounded-full bg-[#FAF1EB] text-[#D08C60] text-sm mb-4">
        {category}
      </span>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <p className="text-sm text-gray-500 mb-5">
        📍 {location}
      </p>

      <button className="btn-primary">
        View Details
      </button>
    </div>
  );
}