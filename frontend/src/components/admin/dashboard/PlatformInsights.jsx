import {
  Activity,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function PlatformInsights({
  requests,
  volunteers,
}) {
  const totalVolunteerHours = volunteers.reduce(
    (total, volunteer) => total + volunteer.hours,
    0
  );

  const approved = requests.filter(
    (request) => request.status === "Approved"
  ).length;

  const pending = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const approvalRate =
    requests.length === 0
      ? 0
      : Math.round((approved / requests.length) * 100);

  return (
    <div className="bridge-card">

      <h2 className="text-2xl font-semibold mb-8">
        Platform Insights
      </h2>

      <div className="space-y-6">

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <Activity className="text-[#6B8F71]" />

            <span>Total Volunteer Hours</span>

          </div>

          <span className="font-bold text-lg">
            {totalVolunteerHours} hrs
          </span>

        </div>

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <CheckCircle2 className="text-green-600" />

            <span>Approval Rate</span>

          </div>

          <span className="font-bold text-lg">
            {approvalRate}%
          </span>

        </div>

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <Clock3 className="text-[#D08C60]" />

            <span>Pending Reviews</span>

          </div>

          <span className="font-bold text-lg">
            {pending}
          </span>

        </div>

      </div>

    </div>
  );
}