import {
  FileText,
  HeartHandshake,
  Users,
  Plus,
  Search,
  HandHeart,
} from "lucide-react";

import { Link } from "react-router-dom";
import UserSidebar from "../../components/dashboard/UserSidebar";

export default function UserDashboard() {
  const stats = [
    {
      id: 1,
      title: "Requests Created",
      value: 4,
      icon: FileText,
    },
    {
      id: 2,
      title: "Volunteer Activities",
      value: 2,
      icon: HandHeart,
    },
    {
      id: 3,
      title: "People Helped",
      value: 12,
      icon: Users,
    },
  ];

  const activities = [
    {
      id: 1,
      title: "Mathematics Tutor Request",
      description: "Created 2 days ago",
    },
    {
      id: 2,
      title: "Community Cleanup",
      description: "Volunteered yesterday",
    },
    {
      id: 3,
      title: "Career Guidance",
      description: "Opportunity viewed",
    },
  ];

  const opportunities = [
    {
      id: 1,
      title: "Mathematics Tutor",
      description:
        "Help a high school student improve math skills.",
    },
    {
      id: 2,
      title: "Career Guidance",
      description:
        "Mentor students interested in technology careers.",
    },
    {
      id: 3,
      title: "Community Cleanup",
      description:
        "Join volunteers making the environment cleaner.",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">
      <UserSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        {/* Hero Section */}
        <div className="bg-sage rounded-3xl p-8 text-white mb-8 shadow-md">
          <h1 className="text-4xl font-bold mb-2">
            Welcome Back
          </h1>

          <p className="text-lg opacity-90">
            Connect, request help, and make an impact in your community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="bridge-card hover:shadow-lg transition"
              >
                <Icon
                  size={32}
                  className="text-[#D08C60] mb-3"
                />

                <h2 className="text-3xl font-bold">
                  {stat.value}
                </h2>

                <p className="text-gray-600">
                  {stat.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick Actions + Activity */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Quick Actions */}
          <div className="bridge-card">
            <h2 className="text-2xl font-semibold mb-6">
              Quick Actions
            </h2>

            <div className="space-y-4">
              <Link
                to="/requests/new"
                className="flex items-center justify-center gap-2 btn-primary w-full"
              >
                <Plus size={18} />
                Request Help
              </Link>

              <Link
                to="/requests"
                className="flex items-center justify-center gap-2 btn-outline w-full"
              >
                <Search size={18} />
                Browse Requests
              </Link>

              <Link
                to="/volunteer-dashboard"
                className="flex items-center justify-center gap-2 btn-outline w-full"
              >
                <HandHeart size={18} />
                Volunteer Now
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bridge-card">
            <h2 className="text-2xl font-semibold mb-6">
              Recent Activity
            </h2>

            <div className="space-y-5">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="border-l-4 border-[#D08C60] pl-4"
                >
                  <h3 className="font-semibold">
                    {activity.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Opportunities */}
        <div className="bridge-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">
              Recommended Opportunities
            </h2>

            <Link
              to="/opportunities"
              className="text-[#D08C60] font-medium hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                className="border rounded-xl p-4 hover:shadow-md transition"
              >
                <h3 className="font-semibold mb-2">
                  {opportunity.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {opportunity.description}
                </p>

                <button className="btn-primary w-full">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}