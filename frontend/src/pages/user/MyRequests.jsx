import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function MyRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function loadRequests() {
    try {
      const response = await api.get("/my-requests");
      setRequests(response.data);
    } catch (error) {
      console.error("Failed to load requests:", error);
    } finally {
      setLoading(false);
    }
  }

  loadRequests();
  }, []);

  if (loading) {
  return (
    <DashboardLayout>
    <div className="min-h-screen bg-[#FAF7F2] p-8">
      <h1 className="text-4xl font-bold mb-8">
        My Requests
      </h1>

      <div className="space-y-4">

        {requests.length === 0 ? (

          <div className="bridge-card text-center text-gray-500">
            <p>You haven't created any requests yet.</p>

            <Link
              to="/requests/new"
              className="btn-primary mt-4 inline-block"
            >
              Create Your First Request
            </Link>

          </div>

        ) : (

          requests.map((request) => (

            <div
              key={request.id}
              className="bridge-card flex justify-between items-center"
            >

              <div>

                <h2 className="font-semibold text-lg">
                  {request.title}
                </h2>

                <p className="text-gray-600">
                  {request.location || "No location"}
                </p>

                <p className="text-sm capitalize">
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

          ))
          )}

</div>
    </div>
    </DashboardLayout>
  );
}
}