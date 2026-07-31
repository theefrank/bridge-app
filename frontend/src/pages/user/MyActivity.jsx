import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ActivityTimeline from "../../components/activity/ActivityTimeline";

export default function MyActivity() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold">
            My Activity
          </h1>

          <p className="text-gray-600 mt-2">
            Keep track of everything you've done on
            Bridge.
          </p>

        </div>

        <ActivityTimeline />

      </div>

    </DashboardLayout>
  );
}