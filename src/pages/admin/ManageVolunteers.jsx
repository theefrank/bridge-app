import { useState } from "react";

import {
  HandHeart,
  UserCheck,
  UserMinus,
  Clock3,
} from "lucide-react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminStats from "../../components/admin/AdminStats";
import SearchBar from "../../components/common/SearchBar";
import FilterVolunteers from "../../components/admin/FilterVolunteers";
import VolunteerTable from "../../components/admin/VolunteerTable";

export default function ManageVolunteers() {

  const [searchTerm, setSearchTerm] =
    useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [volunteers, setVolunteers] = useState([
    {
      id: 1,
      name: "Jane Doe",
      email: "jane@example.com",
      skill: "Education",
      hours: 56,
      status: "Active",
    },

    {
      id: 2,
      name: "Kevin Otieno",
      email: "kevin@example.com",
      skill: "Technology",
      hours: 31,
      status: "Pending",
    },

    {
      id: 3,
      name: "Mercy Wanjiku",
      email: "mercy@example.com",
      skill: "Career",
      hours: 22,
      status: "Active",
    },

    {
      id: 4,
      name: "John Mwangi",
      email: "john@example.com",
      skill: "Community",
      hours: 14,
      status: "Suspended",
    },
  ]);

  const volunteerStats = [
    {
      title: "Total Volunteers",
      value: volunteers.length,
      icon: <HandHeart size={28} />,
      color: "bg-[#6B8F71]/10 text-[#6B8F71]",
    },
    {
      title: "Active",
      value: volunteers.filter(
        (volunteer) => volunteer.status === "Active"
      ).length,
      icon: <UserCheck size={28} />,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Pending",
      value: volunteers.filter(
        (volunteer) => volunteer.status === "Pending"
      ).length,
      icon: <Clock3 size={28} />,
      color: "bg-[#FAF1EB] text-[#D08C60]",
    },
    {
      title: "Suspended",
      value: volunteers.filter(
        (volunteer) => volunteer.status === "Suspended"
      ).length,
      icon: <UserMinus size={28} />,
      color: "bg-red-100 text-red-700",
    },
  ];  
  const filteredVolunteers = volunteers.filter((volunteer) => {
    const matchesSearch =
      volunteer.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      volunteer.email
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      volunteer.skill
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" ||
      volunteer.status.trim() === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">

      <AdminSidebar />

      <main className="flex-1 ml-72 p-10">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Manage Volunteers
          </h1>

          <p className="text-gray-600 mt-2">
            Review volunteer activity,
            approve new volunteers and
            monitor participation.
          </p>

        </div>

        {/* Summary */}

        <AdminStats stats={volunteerStats} />

      <div className="flex flex-col lg:flex-row items-end gap-6 my-8">

        {/* Search */}

        <div className="flex-1">

          <SearchBar
            placeholder="Search volunteers..."
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

        </div>

        {/* Filter */}

        <div className="w-full lg:w-64 space-y-2">

          <label className="text-sm font-medium text-gray-600">
            Filter Status
          </label>

          <FilterVolunteers
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />

        </div>

      </div>
        

        <VolunteerTable
          volunteers={filteredVolunteers}
          setVolunteers={setVolunteers}
        />

      </main>

    </div>
  );
}