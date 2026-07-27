import { useState } from "react";

import {
  ClipboardList,
  Clock3,
  CheckCircle,
  XCircle,
} from "lucide-react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminStats from "../../components/admin/AdminStats";
import SearchBar from "../../components/common/SearchBar";
import FilterRequests from "../../components/admin/FilterRequests";
import RequestTable from "../../components/admin/RequestTable";
import RequestDetailsModal from "../../components/admin/RequestDetailsModal";
import DeleteConfirmationModal from "../../components/admin/DeleteConfirmationModal";

export default function ManageRequests() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] =
    useState("All");

  const [selectedRequest, setSelectedRequest] =
    useState(null);

  const [showDetails, setShowDetails] =
    useState(false);

  const [showDelete, setShowDelete] =
    useState(false);

  const [requestToDelete, setRequestToDelete] =
    useState(null);

  const [requests, setRequests] = useState([
    {
      id: 1,
      title: "Need Mathematics Tutor",
      category: "Education",
      user: "Jane Doe",
      status: "Pending",
      description:
        "Looking for a volunteer to help with high school mathematics twice a week.",
    },
    {
      id: 2,
      title: "Community Cleanup",
      category: "Community",
      user: "Kevin Otieno",
      status: "Approved",
      description:
        "Need volunteers for a neighbourhood cleanup exercise this Saturday.",
    },
    {
      id: 3,
      title: "Career Mentor",
      category: "Career",
      user: "Mercy Wanjiku",
      status: "Pending",
      description:
        "Seeking mentorship on software engineering career paths.",
    },
    {
      id: 4,
      title: "Laptop Repair",
      category: "Technology",
      user: "John Mwangi",
      status: "Rejected",
      description:
        "Need help diagnosing and repairing a faulty laptop.",
    },
    {
      id: 5,
      title: "Food Donation",
      category: "Community",
      user: "Alice Kimani",
      status: "Approved",
      description:
        "Requesting volunteers to assist with food distribution.",
    },
    {
      id: 6,
      title: "CV Review",
      category: "Career",
      user: "Brian Otieno",
      status: "Pending",
      description:
        "Looking for professionals to review my CV.",
    },
  ]);

  const requestStats = [
    {
      title: "Total Requests",
      value: requests.length,
      icon: <ClipboardList size={28} />,
      color: "bg-[#6B8F71]/10 text-[#6B8F71]",
    },
    {
      title: "Pending",
      value: requests.filter(
        (request) => request.status === "Pending"
      ).length,
      icon: <Clock3 size={28} />,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Approved",
      value: requests.filter(
        (request) => request.status === "Approved"
      ).length,
      icon: <CheckCircle size={28} />,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Rejected",
      value: requests.filter(
        (request) => request.status === "Rejected"
      ).length,
      icon: <XCircle size={28} />,
      color: "bg-red-100 text-red-700",
    },
  ];

  const filteredRequests = requests.filter(
    (request) => {
      const matchesSearch =
        request.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        request.user
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        request.category
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        selectedStatus === "All" ||
        request.status === selectedStatus;

      return matchesSearch && matchesStatus;
    }
  );

  function handleView(request) {
    setSelectedRequest(request);
    setShowDetails(true);
  }

  function handleApprove(id) {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === id
          ? {
              ...request,
              status: "Approved",
            }
          : request
      )
    );
  }

  function handleReject(id) {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === id
          ? {
              ...request,
              status: "Rejected",
            }
          : request
      )
    );
  }

  function handleDelete(request) {
    setRequestToDelete(request);
    setShowDelete(true);
  }

  function confirmDelete() {
    setRequests((prev) =>
      prev.filter(
        (request) =>
          request.id !== requestToDelete.id
      )
    );

    setShowDelete(false);
    setRequestToDelete(null);
  }

  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">

      <AdminSidebar />

      <main className="flex-1 p-10">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Manage Requests
          </h1>

          <p className="text-gray-600 mt-2">
            Review, approve or reject
            community assistance requests.
          </p>

        </div>

        <AdminStats stats={requestStats} />

        <div className="flex flex-col lg:flex-row gap-4 my-8">

          <div className="flex-1">

            <SearchBar
              placeholder="Search requests..."
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

          </div>

          <FilterRequests
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />

        </div>

        <RequestTable
          requests={filteredRequests}
          onView={handleView}
          onApprove={handleApprove}
          onReject={handleReject}
          onDelete={handleDelete}
        />

        <RequestDetailsModal
          request={selectedRequest}
          isOpen={showDetails}
          onClose={() => setShowDetails(false)}
        />

        <DeleteConfirmationModal
          isOpen={showDelete}
          onClose={() => setShowDelete(false)}
          onConfirm={confirmDelete}
        />

      </main>

    </div>
  );
}

