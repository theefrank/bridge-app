import {
  Users,
  ClipboardList,
  HandHeart,
  TriangleAlert,
  ArrowRight,
  UserPlus,
  FileClock,
  BadgeCheck,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminStats from "../../components/admin/AdminStats";
import DashboardHeader from "../../components/admin/dashboard/DashboardHeader";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const dashboardStats = [
    {
      title: "Total Users",
      value: 126,
      icon: <Users size={28} />,
      color: "bg-[#6B8F71]/10 text-[#6B8F71]",
      path: "/admin/users",
    },
    {
      title: "Active Requests",
      value: 38,
      icon: <ClipboardList size={28} />,
      color: "bg-[#FAF1EB] text-[#D08C60]",
      path: "/admin/requests",
    },
    {
      title: "Volunteers",
      value: 54,
      icon: <HandHeart size={28} />,
      color: "bg-[#6B8F71]/10 text-[#6B8F71]",
      path: "/admin/volunteers",
    },
    {
      title: "Pending Reviews",
      value: 14,
      icon: <TriangleAlert size={28} />,
      color: "bg-red-100 text-red-600",
      path: "/admin/requests",
    },
  ];

  const recentRequests = [
    {
      id: 1,
      title: "Need Mathematics Tutor",
      user: "Jane Doe",
      status: "Pending",
    },
    {
      id: 2,
      title: "Community Food Drive",
      user: "Mercy Wanjiku",
      status: "Pending",
    },
    {
      id: 3,
      title: "Career Mentor Needed",
      user: "Kevin Otieno",
      status: "Pending",
    },
    {
      id: 4,
      title: "Laptop Repair Assistance",
      user: "John Mwangi",
      status: "Pending",
    },
  ];

  const newestUsers = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Volunteer",
    },
    {
      id: 2,
      name: "John Mwangi",
      role: "User",
    },
    {
      id: 3,
      name: "Mercy Wanjiku",
      role: "Volunteer",
    },
    {
      id: 4,
      name: "Kevin Otieno",
      role: "User",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">

      <AdminSidebar />

      <main className="flex-1 ml-72 p-10">

        {/* Header */}

        <DashboardHeader />

        {/* Statistics */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {dashboardStats.map((stat) => (

            <button
              key={stat.title}
              onClick={() => navigate(stat.path)}
              className="bridge-card text-left"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    {stat.value}
                  </h2>

                </div>

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.color}`}
                >

                  {stat.icon}

                </div>

              </div>

            </button>

          ))}

        </div>

        {/* Main Content */}

        <section className="grid xl:grid-cols-3 gap-8 mt-10">

          {/* Recent Requests */}

          <div className="bridge-card xl:col-span-2">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-2xl font-semibold">

                Recent Requests

              </h2>

              <Link
                to="/admin/requests"
                className="flex items-center gap-2 text-[#D08C60] font-medium"
              >

                View All

                <ArrowRight size={18} />

              </Link>

            </div>

            <div className="space-y-4">

              {recentRequests.map((request) => (

                <div
                  key={request.id}
                  className="flex justify-between items-center rounded-xl border bg-white px-5 py-4"
                >

                  <div>

                    <h3 className="font-semibold">

                      {request.title}

                    </h3>

                    <p className="text-sm text-gray-500">

                      Requested by {request.user}

                    </p>

                  </div>

                  <button
                    onClick={() =>
                      navigate("/admin/requests")
                    }
                    className="btn-secondary"
                  >

                    Review

                  </button>

                </div>

              ))}

            </div>

          </div>

          {/* Quick Actions */}

          <div className="bridge-card">

            <h2 className="text-2xl font-semibold mb-6">

              Quick Actions

            </h2>

            <div className="space-y-4">

              <button
                onClick={() =>
                  navigate("/admin/users")
                }
                className="w-full flex items-center gap-4 rounded-xl bg-[#FAF1EB] p-5 text-left"
              >

                <UserPlus className="text-[#D08C60]" />

                <div>

                  <h3 className="font-semibold">

                    Manage Users

                  </h3>

                  <p className="text-sm text-gray-500">

                    View and manage all users.

                  </p>

                </div>

              </button>

              <button
                onClick={() =>
                  navigate("/admin/requests")
                }
                className="w-full flex items-center gap-4 rounded-xl bg-[#F4F8F5] p-5 text-left"
              >

                <FileClock className="text-[#6B8F71]" />

                <div>

                  <h3 className="font-semibold">

                    Review Requests

                  </h3>

                  <p className="text-sm text-gray-500">

                    Approve or reject requests.

                  </p>

                </div>

              </button>

              <button
                onClick={() =>
                  navigate("/admin/volunteers")
                }
                className="w-full flex items-center gap-4 rounded-xl bg-[#FAF1EB] p-5 text-left"
              >

                <BadgeCheck className="text-[#D08C60]" />

                <div>

                  <h3 className="font-semibold">

                    Manage Volunteers

                  </h3>

                  <p className="text-sm text-gray-500">

                    Monitor volunteer participation.

                  </p>

                </div>

              </button>

            </div>

          </div>

        </section>

        {/* New Users */}

        <section className="bridge-card mt-10">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-2xl font-semibold">

              Newest Users

            </h2>

            <Link
              to="/admin/users"
              className="text-[#D08C60] font-medium"
            >

              View All

            </Link>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {newestUsers.map((user) => (

              <div
                key={user.id}
                className="flex justify-between items-center rounded-xl border bg-white px-5 py-4"
              >

                <div>

                  <h3 className="font-semibold">

                    {user.name}

                  </h3>

                  <p className="text-sm text-gray-500">

                    {user.role}

                  </p>

                </div>

                <button
                  onClick={() =>
                    navigate("/admin/users")
                  }
                  className="text-[#6B8F71] font-semibold"
                >

                  View

                </button>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}