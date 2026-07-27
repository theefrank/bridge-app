import { useState } from "react";

import {
  Users,
  UserCheck,
  UserMinus,
  UserPlus,
} from "lucide-react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import SearchBar from "../../components/common/SearchBar";
import UserTable from "../../components/admin/UserTable";
import AdminStats from "../../components/admin/AdminStats";

export default function ManageUsers() {

  const userStats = [
  {
    title: "Total Users",
    value: 126,
    icon: <Users size={28} />,
    color: "bg-[#6B8F71]/10 text-[#6B8F71]",
  },
  {
    title: "Active Users",
    value: 103,
    icon: <UserCheck size={28} />,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Suspended",
    value: 6,
    icon: <UserMinus size={28} />,
    color: "bg-red-100 text-red-700",
  },
  {
    title: "New This Month",
    value: 17,
    icon: <UserPlus size={28} />,
    color: "bg-[#FAF1EB] text-[#D08C60]",
  },
];

  const [searchTerm, setSearchTerm] =
    useState("");

  const users = [
    {
      id: 1,
      name: "Jane Doe",
      email: "jane@example.com",
      role: "user",
      status: "Active",
    },

    {
      id: 2,
      name: "John Mwangi",
      email: "john@example.com",
      role: "volunteer",
      status: "Pending",
    },

    {
      id: 3,
      name: "Mercy Wanjiku",
      email: "mercy@example.com",
      role: "user",
      status: "Suspended",
    },

    {
      id: 4,
      name: "Kevin Otieno",
      email: "kevin@example.com",
      role: "volunteer",
      status: "Active",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">

      <AdminSidebar />

      <main className="flex-1 p-10">

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            Manage Users
          </h1>

          <p className="text-gray-600 mt-2">
            View, search and manage all
            registered Bridge users.
          </p>

        </div>

        <AdminStats stats={userStats} />

        <div className="mb-8">

        <SearchBar
        placeholder="Search users..."
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        />

        </div>

        <UserTable
          users={filteredUsers}
        />

      </main>

    </div>
  );
}