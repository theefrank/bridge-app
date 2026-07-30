import DashboardLayout from "../../components/dashboard/DashboardLayout";
import VolunteerStats from "../../components/volunteer/VolunteerStats";
import RecommendationSection from "../../components/volunteer/RecommendationSection";

export default function VolunteerDashboard() {
  return (
    <DashboardLayout>

      <div className="space-y-10">

        <div>

          <h1 className="text-4xl font-bold">
            Volunteer Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Discover opportunities, monitor your
            applications and continue making a
            difference in your community.
          </p>

        </div>

        <VolunteerStats />

        <RecommendationSection />

      </div>

    </DashboardLayout>
  );
}