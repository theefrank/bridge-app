import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HandHelping, Sparkles } from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import VolunteerStats from "../../components/volunteer/VolunteerStats";
import RecommendationSection from "../../components/volunteer/RecommendationSection";
import api from "../../services/api";

export default function VolunteerDashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadApplications() {
      try {
        const response = await api.get("/applications");
        setApplications(response.data || []);
      } catch (error) {
        console.error("Failed to load volunteer applications", error);
        setApplications([]);
      } finally {
        setLoading(false);
      }
    }

    loadApplications();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-10">
        <div>
          <h1 className="text-4xl font-bold">Volunteer Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Discover opportunities, track your applications, and help your community grow.
          </p>
        </div>

        <VolunteerStats applications={applications.length} loading={loading} />

        {applications.length === 0 ? (
          <div className="bridge-card border-dashed border-[#D08C60]/40 bg-[#FFF8F2] p-8 text-center">
            <div className="flex justify-center mb-4 text-[#D08C60]">
              <Sparkles size={36} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">You are just getting started</h2>
            <p className="text-gray-600 mb-6">
              Browse volunteer opportunities and apply to the ones that match your interests.
            </p>
            <Link to="/opportunities" className="btn-primary inline-flex items-center gap-2">
              <HandHelping size={18} />
              Explore Opportunities
            </Link>
          </div>
        ) : (
          <div className="bridge-card">
            <h2 className="text-xl font-semibold mb-4">Your recent applications</h2>
            <div className="space-y-3">
              {applications.slice(0, 3).map((application) => (
                <div key={application.id} className="border rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{application.title}</h3>
                      <p className="text-sm text-gray-600">{application.location || "Remote"}</p>
                    </div>
                    <span className="text-sm text-[#6B8F71] font-medium">{application.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <RecommendationSection />
      </div>
    </DashboardLayout>
  );
}