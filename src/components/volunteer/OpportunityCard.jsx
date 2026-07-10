export default function OpportunityCard({
  title,
  category,
  location,
}) {
  return (
    <div className="bridge-card">
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-600 mb-2">
        {category}
      </p>

      <p className="text-gray-500 mb-4">
        {location}
      </p>

      <button className="btn-primary">
        Volunteer
      </button>
    </div>
  );
}