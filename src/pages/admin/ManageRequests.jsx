import { useState } from "react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import FilterRequests from "../../components/admin/FilterRequests";
import SearchUsers from "../../components/admin/SearchUsers";
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

          <SearchUsers
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

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