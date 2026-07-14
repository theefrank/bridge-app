import { useAuth } from "../../context/AuthContext";
import {
  FileText,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function UserDashboard() {
  const stats = [
    {
      title: "Requests Created",
      value: "12",
      icon: FileText,
    },
    {
      title: "Active Requests",
      value: "5",
      icon: Clock,
    },
    {
      title: "Completed Requests",
      value: "7",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] p-8">
      <h1 className="text-4xl font-bold mb-8">
        User Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bridge-card"
            >
              <Icon
                size={32}
                className="text-[#D08C60] mb-4"
              />

              <h3 className="text-gray-600">
                {stat.title}
              </h3>

              <p className="text-3xl font-bold mt-2">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}