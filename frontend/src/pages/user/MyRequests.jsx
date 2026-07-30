import { Link } from "react-router-dom";

export default function MyRequests() {
  const requests = [
    {
      id: 1,
      title: "Need Coding Mentor",
      category: "Technology",
      status: "Open",
    },
    {
      id: 2,
      title: "Math Tutor",
      category: "Education",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] p-8">
      <h1 className="text-4xl font-bold mb-8">
        My Requests
      </h1>

      <div className="space-y-4">
        {requests.map((request) => (
          <div
            key={request.id}
            className="bridge-card flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold text-lg">
                {request.title}
              </h2>

              <p className="text-gray-600">
                {request.category}
              </p>

              <p className="text-sm">
                {request.status}
              </p>
            </div>

            <Link
              to={`/requests/${request.id}`}
              className="btn-primary"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}