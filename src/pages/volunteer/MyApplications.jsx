import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ApplicationCard from "../../components/volunteer/ApplicationCard";

export default function MyApplications() {
  const applications = [
    {
      id: 1,
      title: "Mathematics Tutor",
      organization: "Bridge Community",
      location: "Nairobi",
      appliedDate: "24 Jul 2026",
      status: "Pending",
    },

    {
      id: 2,
      title: "Career Mentor",
      organization: "Bridge Community",
      location: "Remote",
      appliedDate: "21 Jul 2026",
      status: "Approved",
    },

    {
      id: 3,
      title: "Community Cleanup",
      organization: "Bridge Community",
      location: "Kiambu",
      appliedDate: "18 Jul 2026",
      status: "Rejected",
    },
  ];

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold">
            My Applications
          </h1>

          <p className="text-gray-600 mt-2">
            Keep track of all volunteer
            opportunities you've applied for.
          </p>

        </div>

        <div className="space-y-6">

          {applications.map((application) => (
            <ApplicationCard
              key={application.id}
              {...application}
            />
          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}