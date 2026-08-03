import { useEffect, useState } from "react";
import {
  MapPin,
  CalendarDays,
  Tag,
  FileText,
  ArrowLeft,
  Trash2,
  Pencil,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import api from "../../services/api";

const fallbackRequests = [
  {
    id: 1,
    title: "Need Mathematics Tutor",
    category: "Education",
    location: "Nairobi",
    description:
      "Looking for a volunteer tutor for high school mathematics.",
    status: "Pending",
    created_at: new Date().toISOString(),
  },
];

export default function RequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    async function loadRequest() {
      try {
        const [requestsResponse, skillsResponse] =
          await Promise.all([
            api.get("/requests"),
            api.get("/skills"),
          ]);

        const found = requestsResponse.data.find(
          (item) => item.id === Number(id)
        );

        if (!found) {
          setRequest(null);
          return;
        }

        const skill = skillsResponse.data.find(
          (item) => item.id === found.skill_id
        );

        setRequest({
          ...found,
          category: skill?.name || "Community",
        });
      } catch {
        setRequest(
          fallbackRequests.find(
            (item) => item.id === Number(id)
          ) || null
        );
      } finally {
        setLoading(false);
      }
    }

    loadRequest();
  }, [id]);

  async function handleDelete() {
    const confirmed = window.confirm(
      "Delete this request permanently?"
    );

    if (!confirmed) return;

    try {
      setDeleting(true);

      await api.delete(`/requests/${id}`);

      navigate("/requests");
    } catch (error) {
      alert(
        error.response?.data?.error ||
          "Unable to delete request."
      );
    } finally {
      setDeleting(false);
    }
  }

  function formatDate(date) {
    if (!date) return "Unknown";

    return new Date(date).toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-20 text-center text-gray-500">
          Loading request...
        </div>
      </DashboardLayout>
    );
  }

  if (!request) {
    return (
      <DashboardLayout>
        <div className="max-w-5xl mx-auto">
          <div className="bridge-card">
            <h1 className="text-3xl font-bold">
              Request Not Found
            </h1>

            <p className="text-gray-500 mt-3">
              This request no longer exists.
            </p>

            <Link
              to="/requests"
              className="btn-primary inline-flex mt-6"
            >
              Back to Requests
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Header */}

        <div className="bridge-card">

          <div className="flex justify-between items-start gap-6">

            <div>

              <span className="inline-flex px-3 py-1 rounded-full bg-[#FAF1EB] text-[#D08C60] text-sm font-medium">
                {request.category}
              </span>

              <h1 className="text-4xl font-bold mt-5">
                {request.title}
              </h1>

            </div>

            <span
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                request.status?.toLowerCase() === "approved"
                  ? "bg-green-100 text-green-700"
                  : request.status?.toLowerCase() === "rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {request.status}
            </span>

          </div>

        </div>

        {/* Information */}

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bridge-card">

            <div className="flex items-center gap-3 mb-2">
              <MapPin
                size={20}
                className="text-[#D08C60]"
              />

              <span className="text-gray-500">
                Location
              </span>
            </div>

            <p className="font-medium text-lg">
              {request.location || "Remote"}
            </p>

          </div>

          <div className="bridge-card">

            <div className="flex items-center gap-3 mb-2">
              <CalendarDays
                size={20}
                className="text-[#D08C60]"
              />

              <span className="text-gray-500">
                Created
              </span>
            </div>

            <p className="font-medium text-lg">
              {formatDate(request.created_at)}
            </p>

          </div>

        </div>

        {/* Description */}

        <div className="bridge-card">

          <div className="flex items-center gap-3 mb-5">

            <FileText
              size={22}
              className="text-[#D08C60]"
            />

            <h2 className="text-2xl font-semibold">
              Description
            </h2>

          </div>

          <p className="leading-8 text-gray-700 whitespace-pre-wrap">
            {request.description}
          </p>

        </div>

        {/* Footer */}

        <div className="bridge-card">

          <div className="flex flex-wrap justify-between gap-4">

            <Link
              to="/requests"
              className="btn-outline inline-flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              Back to Requests
            </Link>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}