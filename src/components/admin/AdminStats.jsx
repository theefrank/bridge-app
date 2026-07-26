import {
  Users,
  ClipboardList,
  HandHeart,
  TriangleAlert,
} from "lucide-react";

export default function AdminStats() {

  const stats = [
    {
      title: "Total Users",
      value: 126,
      icon: <Users size={28} />,
      color: "bg-[#6B8F71]/10 text-[#6B8F71]",
    },

    {
      title: "Active Requests",
      value: 38,
      icon: <ClipboardList size={28} />,
      color: "bg-[#FAF1EB] text-[#D08C60]",
    },

    {
      title: "Volunteers",
      value: 54,
      icon: <HandHeart size={28} />,
      color: "bg-[#6B8F71]/10 text-[#6B8F71]",
    },

    {
      title: "Pending Reviews",
      value: 14,
      icon: <TriangleAlert size={28} />,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((stat) => (

        <div
          key={stat.title}
          className="bridge-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500">
                {stat.title}
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {stat.value}
              </h2>

            </div>

            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.color}`}
            >
              {stat.icon}
            </div>

          </div>

        </div>

      ))}

    </div>
  );
}