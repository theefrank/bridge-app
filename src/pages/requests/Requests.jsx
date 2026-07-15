import DashboardLayout from "../../components/dashboard/DashboardLayout";
import RequestCard from "../../components/requests/RequestCard";

const requests = [
  {
    id: 1,
    title: "Need Mathematics Tutor",
    category: "Education",
    location: "Nairobi",
    description:
      "Looking for a volunteer tutor for high school mathematics.",
  },
  {
    id: 2,
    title: "Career Guidance",
    category: "Mentorship",
    location: "Remote",
    description:
      "Seeking guidance on software engineering careers.",
  },
  {
    id: 3,
    title: "Community Cleanup",
    category: "Community",
    location: "Kiambu",
    description:
      "Volunteers needed for a weekend cleanup exercise.",
  },
];

export default function Requests() {
  return (
  <DashboardLayout>

    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Community Requests
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((request) => (
          <RequestCard
            key={request.id}
            {...request}
          />
        ))}
      </div>
    </div>
    </DashboardLayout>
  );
}