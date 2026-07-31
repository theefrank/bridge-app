import {
  UserPlus,
  ClipboardList,
  CheckCircle,
  XCircle,
  HandHeart,
} from "lucide-react";

export default function RecentActivity({
  activities,
}) {
  function getActivityIcon(type) {
    switch (type) {
      case "user":
        return (
          <UserPlus
            size={20}
            className="text-blue-600"
          />
        );

      case "request":
        return (
          <ClipboardList
            size={20}
            className="text-[#D08C60]"
          />
        );

      case "approved":
        return (
          <CheckCircle
            size={20}
            className="text-green-600"
          />
        );

      case "rejected":
        return (
          <XCircle
            size={20}
            className="text-red-600"
          />
        );

      case "volunteer":
        return (
          <HandHeart
            size={20}
            className="text-[#6B8F71]"
          />
        );

      default:
        return (
          <ClipboardList
            size={20}
            className="text-gray-500"
          />
        );
    }
  }

  return (
    <div className="bridge-card">

      <div className="mb-6">

        <h2 className="text-2xl font-semibold">
          Recent Activity
        </h2>

        <p className="text-gray-500 mt-1">
          Latest activity across the platform
        </p>

      </div>

      <div className="space-y-5">

        {activities.map((activity) => (

          <div
            key={activity.id}
            className="flex items-start gap-4 pb-4 border-b last:border-b-0"
          >

            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center">

              {getActivityIcon(activity.type)}

            </div>

            <div className="flex-1">

              <p className="font-medium">
                {activity.message}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {activity.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}