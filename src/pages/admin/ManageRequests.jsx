import { useState } from "react";

import {
  ClipboardList,
  Clock3,
  CheckCircle,
  XCircle,
} from "lucide-react";

import AdminStats from "../../components/admin/AdminStats";
import AdminSidebar from "../../components/admin/AdminSidebar";
import FilterRequests from "../../components/admin/FilterRequests";
import SearchBar from "../../components/common/SearchBar";
import RequestTable from "../../components/admin/RequestTable";

export default function ManageRequests() {

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedStatus, setSelectedStatus] =
    useState("All");

  const requests = [
    {
      id: 1,
      title: "Need Mathematics Tutor",
      category: "Education",
      user: "Jane Doe",
      status: "Pending",
    },

    {
      id: 2,
      title: "Community Cleanup",
      category: "Community",
      user: "Kevin Otieno",
      status: "Approved",
    },

    {
      id: 3,
      title: "Career Mentor",
      category: "Mentorship",
      user: "Mercy Wanjiku",
      status: "Pending",
    },

    {
      id: 4,
      title: "Laptop Repair",
      category: "Technology",
      user: "John Mwangi",
      status: "Rejected",
    },
  ];

  const requestStats = [
  {
    title: "Total Requests",
    value: 82,
    icon: <ClipboardList size={28} />,
    color: "bg-[#6B8F71]/10 text-[#6B8F71]",
  },
  {
    title: "Pending",
    value: 18,
    icon: <Clock3 size={28} />,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Approved",
    value: 49,
    icon: <CheckCircle size={28} />,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Rejected",
    value: 15,
    icon: <XCircle size={28} />,
    color: "bg-red-100 text-red-700",
  },
];

  const filteredRequests =
    requests.filter((request) => {

      const matchesSearch =
        request.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        selectedStatus === "All" ||
        request.status === selectedStatus;

      return (
        matchesSearch &&
        matchesStatus
      );
    });

  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">

      <AdminSidebar />

      <main className="flex-1 p-10">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            Manage Requests
          </h1>

          <p className="text-gray-600 mt-2">
            Review and moderate
            community requests.
          </p>

        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          
          <SearchBar
            placeholder="Search requests..."
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <AdminStats stats={requestStats} />

          <FilterRequests
            selectedStatus={selectedStatus}
            setSelectedStatus={
              setSelectedStatus
            }
          />

        </div>

        <RequestTable
          requests={filteredRequests}
        />

      </main>

    </div>
  );
}