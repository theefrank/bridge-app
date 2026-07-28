import { useState } from "react";

import {
  Users,
  ClipboardList,
  HandHeart,
  TriangleAlert,
  ArrowRight,
  UserPlus,
  FileClock,
  BadgeCheck,
  FileBarChart2,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import AdminSidebar from "../../components/admin/AdminSidebar";
import {
  users as initialUsers,
  volunteers as initialVolunteers,
  requests as initialRequests,
} from "../../data/adminData";
import RecentActivity from "../../components/admin/dashboard/RecentActivity";
import RequestStatusChart from "../../components/admin/dashboard/RequestStatusChart";
import DashboardHeader from "../../components/admin/dashboard/DashboardHeader";
import TopVolunteers from "../../components/admin/dashboard/TopVolunteers";
import PlatformInsights from "../../components/admin/dashboard/PlatformInsights";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [users] = useState(initialUsers);
  const [volunteers] = useState(initialVolunteers);
  const [requests] = useState(initialRequests);
  const [reportOpen, setReportOpen] =
  useState(false);

  const dashboardStats = [
  {
    title: "Total Users",
    value: users.length,
    icon: <Users size={28} />,
    color: "bg-[#6B8F71]/10 text-[#6B8F71]",
    path: "/admin/users",
  },
  {
    title: "Approved Requests",
    value: requests.filter(
      (request) => request.status === "Approved"
    ).length,
    icon: <ClipboardList size={28} />,
    color: "bg-[#FAF1EB] text-[#D08C60]",
    path: "/admin/requests",
  },
  {
    title: "Volunteers",
    value: volunteers.length,
    icon: <HandHeart size={28} />,
    color: "bg-[#6B8F71]/10 text-[#6B8F71]",
    path: "/admin/volunteers",
  },
  {
    title: "Pending Requests",
    value: requests.filter(
      (request) => request.status === "Pending"
    ).length,
    icon: <TriangleAlert size={28} />,
    color: "bg-red-100 text-red-600",
    path: "/admin/requests",
  },
  ];

  const recentRequests = [...requests]
  .reverse()
  .slice(0, 4);

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
              className="bridge-card h-full text-left"
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

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <RequestStatusChart
          requests={requests}
        />

          <RecentActivity
          requests={requests}
          users={users}
          volunteers={volunteers}
        />

      </div>        

        {/* Main Content */}

        <section className="grid xl:grid-cols-3 gap-8 mt-10">

          {/* Recent Requests */}

          <div className="bridge-card h-full xl:col-span-2">

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

          <div className="bridge-card h-full">

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
                className="w-full flex items-center gap-4 rounded-xl bg-[#EEF5FF] p-5 text-left"
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

              <button
                onClick={() => setReportOpen(true)}
                className="w-full flex items-center gap-4 rounded-xl bg-[#FFF7E8] p-5 text-left"
              >
                <FileBarChart2 className="text-[#6B8F71]" />

                <div>

                  <h3 className="font-semibold">
                    Dashboard Reports
                  </h3>

                  <p className="text-sm text-gray-500">
                    Generate platform reports and summaries.
                  </p>

                </div>

              </button>
            </div>

          </div>

        </section>
      <section className="grid lg:grid-cols-2 gap-8 mt-10">

        <TopVolunteers
          volunteers={volunteers}
        />

        <PlatformInsights
          requests={requests}
          volunteers={volunteers}
        />

      </section>
      

        
      </main>

    </div>
  );
}