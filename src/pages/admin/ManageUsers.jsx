import { useMemo, useState } from "react";

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

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

  const [roleFilter, setRoleFilter] =
    useState("all");

  const [statusFilter, setStatusFilter] =
    useState("all");

  const [users, setUsers] = useState([
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
  ]);

  const filteredUsers = useMemo(() => {

    return users.filter((user) => {

      const matchesSearch =
        user.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        user.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesRole =
        roleFilter === "all" ||
        user.role === roleFilter;

      const matchesStatus =
        statusFilter === "all" ||
        user.status === statusFilter;

      return (
        matchesSearch &&
        matchesRole &&
        matchesStatus
      );

    });

  }, [
    users,
    searchTerm,
    roleFilter,
    statusFilter,
  ]);

  return (

    <div className="flex min-h-screen bg-[#FAF7F2]">

      <AdminSidebar />

      <main className="flex-1 ml-72 p-10">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold">

            Manage Users

          </h1>

          <p className="text-gray-600 mt-2">

            View, search and manage all
            registered Bridge users.

          </p>

        </div>

        {/* Statistics */}

        <AdminStats stats={userStats} />

        {/* Toolbar */}

        <div className="bridge-card mt-10 mb-8">

          <div className="flex flex-col lg:flex-row lg:items-center gap-5">

            {/* Search */}

            <div className="flex-1">

              <SearchBar
                placeholder="Search users..."
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />

            </div>

            {/* Filters */}

            <div className="flex flex-col sm:flex-row gap-4">

              <Select
                value={roleFilter}
                onValueChange={setRoleFilter}
              >

                <SelectTrigger className="w-full sm:w-45">

                  <SelectValue placeholder="Role" />

                </SelectTrigger>

                <SelectContent>

                  <SelectItem value="all">

                    All Roles

                  </SelectItem>

                  <SelectItem value="user">

                    User

                  </SelectItem>

                  <SelectItem value="volunteer">

                    Volunteer

                  </SelectItem>

                </SelectContent>

              </Select>

              <Select
                value={statusFilter}
                onValueChange={setStatusFilter}
              >

                <SelectTrigger className="w-full sm:w-45">

                  <SelectValue placeholder="Status" />

                </SelectTrigger>

                <SelectContent>

                  <SelectItem value="all">

                    All Status

                  </SelectItem>

                  <SelectItem value="Active">

                    Active

                  </SelectItem>

                  <SelectItem value="Pending">

                    Pending

                  </SelectItem>

                  <SelectItem value="Suspended">

                    Suspended

                  </SelectItem>

                </SelectContent>

              </Select>

            </div>

          </div>

        </div>

        {/* Table */}

        <UserTable
          users={filteredUsers}
          setUsers={setUsers}
        />

      </main>

    </div>

  );

}