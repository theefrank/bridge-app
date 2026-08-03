import {
  MapPin,
  Pencil,
  Trash2,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MyRequestCard({
  request,
  onEdit,
  onDelete,
}) {
  function formatDate(date) {
    if (!date) return "Recently";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  function statusClasses(status) {
    switch (status?.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-700";

      case "completed":
        return "bg-blue-100 text-blue-700";

      case "cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  }

  return (
    <div className="bridge-card flex flex-col justify-between h-full">

      {/* Header */}

      <div>

        <div className="flex justify-between items-start mb-4">

          <span className="px-3 py-1 rounded-full bg-[#FAF1EB] text-[#D08C60] text-sm font-medium">
            {request.category}
          </span>

          

        </div>

        <h2 className="text-xl font-semibold text-gray-900">
          {request.title}
        </h2>

        <p className="text-gray-600 mt-3 line-clamp-2 leading-7">
          {request.description}
        </p>

        <div className="mt-6 space-y-3 text-sm text-gray-500">

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {request.location || "Remote"}
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            Created {formatDate(request.created_at)}
          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 space-y-3">

        <Link
          to={`/requests/${request.id}`}
          className="btn-primary w-full text-center block"
        >
          View Details
        </Link>

        <div className="grid grid-cols-2 gap-3">

          <button
            onClick={() => onEdit(request)}
            className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#D08C60] text-[#D08C60] hover:bg-[#FAF1EB] transition"
          >
            <Pencil size={18} />
            Edit
          </button>

          <button
            onClick={() => onDelete(request)}
            className="flex items-center justify-center gap-2 py-3 rounded-xl border border-red-300 text-red-600 hover:bg-red-50 transition"
          >
            <Trash2 size={18} />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}