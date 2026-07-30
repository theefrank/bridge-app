import {
  ClipboardList,
  UserPlus,
  HandHeart,
} from "lucide-react";

export default function RecentActivity({
  requests,
  users,
  volunteers,
}) {
  const activities = [
    ...requests.slice(-2).map((request) => ({
      icon: ClipboardList,
      color: "text-[#D08C60]",
      title: `New request: ${request.title}`,
      subtitle: `by ${request.user}`,
    })),

    ...users.slice(-2).map((user) => ({
      icon: UserPlus,
      color: "text-[#6B8F71]",
      title: `${user.name} joined`,
      subtitle: user.role,
    })),

    ...volunteers.slice(-2).map((volunteer) => ({
      icon: HandHeart,
      color: "text-[#D08C60]",
      title: `${volunteer.name} is volunteering`,
      subtitle: volunteer.skill,
    })),
  ].reverse();

  return (
    <div className="bridge-card p-6">

      <h2 className="text-xl font-semibold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#FAF1EB] flex items-center justify-center">

                <Icon
                  size={18}
                  className={activity.color}
                />

              </div>

              <div>

                <p className="font-medium">
                  {activity.title}
                </p>

                <p className="text-sm text-gray-500">
                  {activity.subtitle}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}