import { useMemo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";
import RequestToolbar from "../../components/requests/RequestToolbar";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import MyRequestCard from "../../components/requests/MyRequestCard";
import EditRequestDialog from "../../components/requests/EditRequestDialog";
import DeleteRequestDialog from "../../components/requests/DeleteRequestDialog";

export default function MyRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("Newest");

  const filteredRequests = useMemo(() => {
  let data = [...requests];

  // Search
  data = data.filter((request) =>
    [request.title, request.location, request.category]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Status
  if (status !== "All") {
    data = data.filter(
      (request) =>
        request.status?.toLowerCase() === status.toLowerCase()
    );
  }

  // Sort
  switch (sort) {
    case "Oldest":
      data.sort(
        (a, b) =>
          new Date(a.created_at) -
          new Date(b.created_at)
      );
      break;

    case "AZ":
      data.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      break;

    default:
      data.sort(
        (a, b) =>
          new Date(b.created_at) -
          new Date(a.created_at)
      );
  }

  return data;
}, [requests, search, status, sort]);

  async function loadRequests() {
    try {
      setLoading(true);

      const response = await api.get("/my-requests");
      setRequests(response.data);

    } catch (error) {
      console.error("Failed to load requests:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRequests();
  }, []);

  async function handleDelete() {
    if (!selectedRequest) return;

    try {
      await api.delete(`/requests/${selectedRequest.id}`);

      setRequests((previous) =>
        previous.filter(
          (request) => request.id !== selectedRequest.id
        )
      );

      setDeleteOpen(false);
      setSelectedRequest(null);

    } catch (error) {
      console.error(error);
    }
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-20 text-center text-gray-500">
          Loading requests...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div className="space-y-2">

            <h1 className="text-4xl font-bold">
              My Requests
            </h1>

            <p className="text-gray-500 mt-2">
              View and manage the requests you've created.
            </p>

            <RequestToolbar
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            sort={sort}
            setSort={setSort}
          />

          </div>

          <Link
            to="/requests/new"
            className="btn-primary"
          >
            New Request
          </Link>

        </div>

        {requests.length === 0 ? (

          <div className="bridge-card text-center py-16">

            <h2 className="text-2xl font-semibold">
              No Requests Yet
            </h2>

            <p className="text-gray-500 mt-3">
              Create your first request and let the community help you.
            </p>

            <Link
              to="/requests/new"
              className="btn-primary mt-8 inline-block"
            >
              Create Request
            </Link>

          </div>

        ) : (

          <div className="space-y-6">

            {filteredRequests.map((request) => (
              <MyRequestCard
              key={request.id}
              request={request}
              onEdit={(request) => {
                setSelectedRequest(request);
                setEditOpen(true);
              }}
              onDelete={(request) => {
                setSelectedRequest(request);
                setDeleteOpen(true);
              }}
            />

              
            ))}

          </div>

        )}

      </div>
      <EditRequestDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        request={selectedRequest}
        onUpdated={loadRequests}
      />

      <DeleteRequestDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        request={selectedRequest}
        onDelete={handleDelete}
      />

    </DashboardLayout>
  );
}