import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { HandHelping, Users, Heart, FileText } from "lucide-react";

export default function VolunteerDashboard() {
  return (
    <DashboardLayout>
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">
        Volunteer Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bridge-card text-center">
          <FileText
            size={40}
            className="mx-auto text-[#D08C60] mb-4"
          />

          <h2 className="text-2xl font-bold">
            12
          </h2>

          <p className="text-gray-600">
            Requests Helped
          </p>
        </div>

        <div className="bridge-card text-center">
          <Users
            size={40}
            className="mx-auto text-[#D08C60] mb-4"
          />

          <h2 className="text-2xl font-bold">
            5
          </h2>

          <p className="text-gray-600">
            Communities
          </p>
        </div>

        <div className="bridge-card text-center">
          <Heart
            size={40}
            className="mx-auto text-[#D08C60] mb-4"
          />

          <h2 className="text-2xl font-bold">
            20
          </h2>

          <p className="text-gray-600">
            Volunteer Hours
          </p>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}