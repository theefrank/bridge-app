import { useEffect, useState } from "react";
import {
  FileText,
  Users,
  Plus,
  Search,
  HandHelping,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

export default function UserDashboard() {

  const [stats, setStats] = useState(null);
  const [activities, setActivities] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  function formatTime(timestamp) {
    const diff = Date.now() - new Date(timestamp).getTime();

    const minutes = Math.floor(diff / 60000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes} min ago`;

    const hours = Math.floor(minutes / 60);

    if (hours < 24) return `${hours} hr ago`;

    const days = Math.floor(hours / 24);

    if (days === 1) return "Yesterday";

    if (days < 7) return `${days} days ago`;

    return new Date(timestamp).toLocaleDateString();
  }    

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [
          statsResponse,
          activityResponse,
          opportunitiesResponse,
        ] = await Promise.all([
          api.get("/dashboard"),
          api.get("/activity"),
          api.get("/opportunities"),
        ]);

        setStats(statsResponse.data);
        setActivities(activityResponse.data);
        setOpportunities(opportunitiesResponse.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-20 text-center text-gray-500">
          Loading dashboard...
        </div>
      </DashboardLayout>
    );
  }

  const statCards = [
    {
      title: "Requests Created",
      value: stats?.requestsCreated || 0,
      icon: FileText,
    },
    {
      title: "Volunteer Applications",
      value: stats?.applications || 0,
      icon: HandHelping,
    },
    {
      title: "Reviews",
      value: stats?.reviews || 0,
      icon: Users,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Hero */}

        <section className="bg-sage rounded-3xl p-10 text-white">

          <h1 className="text-4xl font-bold text-white-900">
          {greeting}, {user?.username}
        </h1>

        <p className="mt-4 text-lg text-white/90">
          Here's what's happening on your Bridge account today.
        </p>

        </section>  

        {/* Summary */}

        <section className="bridge-card">

          <div className="flex justify-between items-center mb-6">

            <div>

              <h2 className="text-xl font-bold">
                Today's Summary
              </h2>

              <p className="text-gray-500">
                Your activity today
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div>

              <p className="text-gray-500 text-sm">
                Requests Created
              </p>

              <h2 className="text-4xl font-bold text-sage mt-2">
                {stats?.requestsToday ?? 0}
              </h2>

            </div>

            <div>

              <p className="text-gray-500 text-sm">
                Volunteer Applications
              </p>

              <h2 className="text-4xl font-bold text-[#D08C60] mt-2">
                {stats?.applicationsToday ?? 0}
              </h2>

            </div>

            <div>

              <p className="text-gray-500 text-sm">
                Reviews Given
              </p>

              <h2 className="text-4xl font-bold text-sage mt-2">
                {stats?.reviewsToday ?? 0}
              </h2>

            </div>

          </div>

        </section>

        

        {/* Stats */}

        <section className="grid md:grid-cols-3 gap-6">

          {statCards.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="bridge-card"
              >
                <div className="flex justify-between items-center">

                  <p className="text-gray-500">
                    {stat.title}
                  </p>

                  <Icon className="text-[#D08C60]" />

                </div>

                <h2 className="text-4xl font-bold mt-6">
                  {stat.value}
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  Total
                </p>

              </div>
            );
          })}

        </section>

        {/* Quick Actions + Activity */}

        <section className="grid lg:grid-cols-2 gap-8">

          {/* Quick Actions */}

          <div className="bridge-card">

            <h2 className="text-2xl font-semibold mb-6">
              Quick Actions
            </h2>

            <div className="space-y-4">

              <Link
                to="/requests/new"
                className="block border rounded-2xl p-5 hover:border-[#D08C60]"
              >
                <Plus className="text-[#D08C60] mb-3" />

                <h3 className="font-semibold">
                  Request Help
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Create a new community request.
                </p>
              </Link>

              <Link
                to="/requests"
                className="block border rounded-2xl p-5 hover:border-[#D08C60]"
              >
                <Search className="text-[#D08C60] mb-3" />

                <h3 className="font-semibold">
                  Browse Requests
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Explore available requests.
                </p>
              </Link>

              <Link
                to="/volunteer-dashboard"
                className="block border rounded-2xl p-5 hover:border-[#D08C60]"
              >
                <HandHelping className="text-[#D08C60] mb-3" />

                <h3 className="font-semibold">
                  Volunteer
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Discover ways to help others.
                </p>
              </Link>

            </div>

          </div>

          {/* Activity */}

          <div className="bridge-card">

            <h2 className="text-2xl font-semibold mb-6">
              Recent Activity
            </h2>

            {activities.length === 0 ? (
              <div className="text-center py-10">

                <p className="font-medium">
                  No activity yet
                </p>

                <p className="text-gray-500 mt-2">
                  Your recent actions will appear here.
                </p>

              </div>
            ) : (
              <div className="space-y-6">

                {activities.map((activity, index) => (
                  <div key={index} className="flex gap-4">

                    <div className="w-3 h-3 rounded-full bg-[#D08C60] mt-2" />

                    <div className="flex-1">

                      <div className="flex justify-between items-start">

                        <h3 className="font-semibold">
                          {activity.title}
                        </h3>

                        <span className="text-xs text-gray-400 whitespace-nowrap ml-4">
                          {formatTime(activity.created_at)}
                        </span>

                      </div>

                      <p className="text-sm text-gray-500">
                        {activity.description}
                      </p>

                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>

        </section>

        {/* Opportunities */}

        <section className="bridge-card">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-2xl font-semibold">
              Recommended Opportunities
            </h2>

            <Link
              to="/opportunities"
              className="flex items-center gap-2 text-[#D08C60]"
            >
              View All
              <ArrowRight size={18} />
            </Link>

          </div>

          {opportunities.length === 0 ? (
            <div className="text-center py-10">

              <h3 className="font-semibold">
                No Opportunities Available
              </h3>

              <p className="text-gray-500 mt-2">
                Check back later for volunteer opportunities.
              </p>

            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">

              {opportunities.slice(0, 3).map((opportunity) => (
                <div
                  key={opportunity.id}
                  className="border rounded-2xl p-5"
                >

                  <h3 className="font-semibold text-lg">
                    {opportunity.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-3">

                    <MapPin size={16} />

                    {opportunity.location || "Remote"}

                  </div>

                  <p className="text-gray-600 mt-4 text-sm">
                    {opportunity.description}
                  </p>

                  <Link
                    to={`/opportunities/${opportunity.id}`}
                    className="btn-primary w-full mt-6 inline-flex justify-center"
                  >
                    View Opportunity
                  </Link>

                </div>
              ))}

            </div>
          )}

        </section>

      </div>
    </DashboardLayout>
  );
}