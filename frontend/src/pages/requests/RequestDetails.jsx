import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";

const fallbackRequests = [
  {
    id: 1,
    title: "Need Mathematics Tutor",
    category: "Education",
    location: "Nairobi",
    description:
      "Looking for a volunteer tutor for high school mathematics.",
  },
  {
    id: 2,
    title: "Career Guidance",
    category: "Mentorship",
    location: "Remote",
    description:
      "Seeking guidance on software engineering careers.",
  },
  {
    id: 3,
    title: "Community Cleanup",
    category: "Community",
    location: "Kiambu",
    description:
      "Volunteers needed for a weekend cleanup exercise.",
  },
];

export default function RequestDetails() {
  const { id } = useParams();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRequest() {
      try {
        const [requestsResponse, skillsResponse] = await Promise.all([
          api.get("/requests"),
          api.get("/skills"),
        ]);
        const found = requestsResponse.data.find((item) => item.id === Number(id));
        const skill = skillsResponse.data.find((item) => item.id === found?.skill_id);
        setRequest(found ? { ...found, category: skill?.name || "Community" } : null);
      } catch {
        setRequest(fallbackRequests.find((item) => item.id === Number(id)) || null);
      } finally {
        setLoading(false);
      }
    }
    loadRequest();
  }, [id]);

  if (loading) {
    return <div className="max-w-4xl mx-auto px-6 py-12">Loading request...</div>;
  }

  if (!request) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bridge-card">
          <h1 className="text-3xl font-bold">
            Request Not Found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bridge-card">
        <span className="inline-block px-3 py-1 rounded-full bg-[#FAF1EB] text-[#D08C60] mb-4">
          {request.category}
        </span>

        <h1 className="text-4xl font-bold mb-6">
          {request.title}
        </h1>

        <p className="text-gray-600 mb-4">
          {request.description}
        </p>

        <p className="text-sm text-gray-500 flex items-center gap-1 mt-3">
          <MapPin size={18} />
          {request.location}
        </p>
          <Link to="/requests" className="btn-secondary inline-block mt-6">
            Back to Requests
          </Link>
      </div>
    </div>
  );
}