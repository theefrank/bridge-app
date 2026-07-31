import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OpportunityCard({
  id,
  title,
  category,
  location,
  description,
})  {
  const navigate = useNavigate();
  return (
    <div className="bridge-card hover:shadow-xl transition-all duration-300">

      <span className="inline-block px-3 py-1 rounded-full bg-[#FAF1EB] text-[#D08C60] text-sm mb-4">
        {category}
      </span>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

      <div className="flex items-center gap-2 mt-5 text-gray-500">
        <MapPin size={18} />
        {location}
      </div>

      <button
        onClick={() => navigate(`/opportunities/${id}`)}
        className="btn-primary mt-6 w-full"
      >
        View Opportunity
      </button>

    </div>
  );
}