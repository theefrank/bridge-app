import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ApplicationCard from "../../components/volunteer/ApplicationCard";

export default function ApplicationHistory() {

  const history = [
    {
      id: 1,
      title: "Coding Mentor",
      organization: "Bridge Community",
      location: "Remote",
      appliedDate: "15 Jun 2026",
      status: "Approved",
    },

    {
      id: 2,
      title: "Food Distribution",
      organization: "Bridge Community",
      location: "Nairobi",
      appliedDate: "30 May 2026",
      status: "Approved",
    },

    {
      id: 3,
      title: "Youth Coach",
      organization: "Bridge Community",
      location: "Kiambu",
      appliedDate: "18 May 2026",
      status: "Rejected",
    },
  ];

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold">
            Application History
          </h1>

          <p className="text-gray-600 mt-2">
            View your previous volunteer
            applications.
          </p>

        </div>

        <div className="space-y-6">

          {history.map((application) => (

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