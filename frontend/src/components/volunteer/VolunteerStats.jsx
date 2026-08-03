import { Briefcase, Clock3, HandHeart } from "lucide-react";

export default function VolunteerStats({ applications = 0, loading = false }) {
  const stats = [
    {
      title: "Applications",
      value: loading ? "--" : applications,
      icon: <Briefcase size={28} />,
      color: "bg-[#6B8F71]/10 text-[#6B8F71]",
    },
    {
      title: "Hours Volunteered",
      value: "0",
      icon: <Clock3 size={28} />,
      color: "bg-[#FAF1EB] text-[#D08C60]",
    },
    {
      title: "People Helped",
      value: "0",
      icon: <HandHeart size={28} />,
      color: "bg-[#6B8F71]/10 text-[#6B8F71]",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bridge-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">{stat.title}</p>
              <h2 className="text-4xl font-bold mt-2">{stat.value}</h2>
            </div>

            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.color}`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}