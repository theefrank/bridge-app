import { MapPin } from "lucide-react";

export default function RequestCard({
  title,
  category,
  location,
  description,
  actions,
}) {
  return (
    <div className="bridge-card flex flex-col h-full">
      <span className="inline-block px-3 py-1 rounded-full bg-[#FAF1EB] text-[#D08C60] text-sm mb-4 w-fit">
        {category}
      </span>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 flex-1">
        {description}
      </p>

      <p className="text-sm text-gray-500 flex items-center gap-2 mt-5">
        <MapPin size={16} />
        {location}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {actions}
      </div>
    </div>
  );
}