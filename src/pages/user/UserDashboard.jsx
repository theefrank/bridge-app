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
  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">

      <UserSidebar />

      <main className="flex-1 p-8">

        {/* Hero */}
        <div className="bg-sage rounded-3xl p-8 text-white mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome Back
          </h1>

          <p className="text-lg opacity-90">
            Connect, request help, and make an impact in your community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bridge-card">
            <FileText
              size={32}
              className="text-[#D08C60] mb-3"
            />

            <h2 className="text-3xl font-bold">
              4
            </h2>

            <p className="text-gray-600">
              Requests Created
            </p>
          </div>

          <div className="bridge-card">
            <HandHeart
              size={32}
              className="text-[#D08C60] mb-3"
            />

            <h2 className="text-3xl font-bold">
              2
            </h2>

            <p className="text-gray-600">
              Volunteer Activities
            </p>
          </div>

          <div className="bridge-card">
            <Users
              size={32}
              className="text-[#D08C60] mb-3"
            />

            <h2 className="text-3xl font-bold">
              12
            </h2>

            <p className="text-gray-600">
              People Helped
            </p>
          </div>

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
                className="flex items-center gap-3 btn-primary w-full justify-center"
              >
                <Plus size={18} />
                Request Help
              </Link>

              <Link
                to="/requests"
                className="flex items-center gap-3 btn-outline w-full justify-center"
              >
                <Search size={18} />
                Browse Requests
              </Link>

              <Link
                to="/volunteer-dashboard"
                className="flex items-center gap-3 btn-outline w-full justify-center"
              >
                <HeartHandshake size={18} />
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

              <div className="border-l-4 border-[#D08C60] pl-4">
                <h3 className="font-semibold">
                  Mathematics Tutor Request
                </h3>

                <p className="text-gray-600 text-sm">
                  Created 2 days ago
                </p>
              </div>

              <div className="border-l-4 border-[#D08C60] pl-4">
                <h3 className="font-semibold">
                  Community Cleanup
                </h3>

                <p className="text-gray-600 text-sm">
                  Volunteered yesterday
                </p>
              </div>

              <div className="border-l-4 border-[#D08C60] pl-4">
                <h3 className="font-semibold">
                  Career Guidance
                </h3>

                <p className="text-gray-600 text-sm">
                  Opportunity viewed
                </p>
              </div>

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
              className="text-[#D08C60] font-medium"
            >
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border rounded-xl p-4">
              <h3 className="font-semibold mb-2">
                Mathematics Tutor
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Help a high school student improve math skills.
              </p>

              <button className="btn-primary w-full">
                View Details
              </button>
            </div>

            <div className="border rounded-xl p-4">
              <h3 className="font-semibold mb-2">
                Career Guidance
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Mentor students interested in technology careers.
              </p>

              <button className="btn-primary w-full">
                View Details
              </button>
            </div>

            <div className="border rounded-xl p-4">
              <h3 className="font-semibold mb-2">
                Community Cleanup
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Join volunteers making the environment cleaner.
              </p>

              <button className="btn-primary w-full">
                View Details
              </button>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}