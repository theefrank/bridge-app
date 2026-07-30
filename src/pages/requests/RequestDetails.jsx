import { MapPin } from "lucide-react";
import { useParams } from "react-router-dom";

const requests = [
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

  const request = requests.find(
    (req) => req.id === Number(id)
  );

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
      </div>
    </div>
  );
}