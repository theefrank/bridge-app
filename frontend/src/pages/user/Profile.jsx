import { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ProfileCard from "../../components/profile/ProfileCard";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const [stats, setStats] = useState({ requestsCreated: 0, applications: 0, reviews: 0 });

  useEffect(() => {
    async function loadStats() {
      try {
        const response = await api.get("/dashboard");
        setStats(response.data || { requestsCreated: 0, applications: 0, reviews: 0 });
      } catch (error) {
        console.error("Failed to load dashboard stats", error);
      }
    }

    if (user) {
      loadStats();
    }
  }, [user]);

  const completion = Math.round(
    [user?.full_name, user?.location, user?.bio, user?.skills?.length].filter(Boolean).length / 4 * 100
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">My Profile</h1>
          <p className="text-gray-600 mt-2">
            Manage your personal information and keep your profile up to date.
          </p>
        </div>

        <ProfileCard />

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bridge-card text-center">
            <h2 className="text-4xl font-bold text-[#6B8F71]">{stats.requestsCreated}</h2>
            <p className="mt-2 text-gray-600">Requests Created</p>
          </div>

          <div className="bridge-card text-center">
            <h2 className="text-4xl font-bold text-[#D08C60]">{stats.applications}</h2>
            <p className="mt-2 text-gray-600">Volunteer Activities</p>
          </div>

          <div className="bridge-card text-center">
            <h2 className="text-4xl font-bold text-[#6B8F71]">{completion}%</h2>
            <p className="mt-2 text-gray-600">Profile Completion</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}