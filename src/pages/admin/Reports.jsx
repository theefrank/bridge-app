import {
  Users,
  ClipboardList,
  HandHeart,
  Clock3,
} from "lucide-react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import ReportCard from "../../components/admin/reports/ReportCard";
import PopularCategories from "../../components/admin/reports/PopularCategories";
import VolunteerLeaderboard from "../../components/admin/reports/VolunteerLeaderboard";
import RecentActivity from "../../components/admin/reports/RecentActivity";

export default function Reports() {
  const reportStats = [
    {
      title: "Total Users",
      value: 126,
      icon: <Users size={28} />,
      color: "bg-[#6B8F71]/10 text-[#6B8F71]",
      subtitle: "+12 this month",
    },
    {
      title: "Requests",
      value: 82,
      icon: <ClipboardList size={28} />,
      color: "bg-[#FAF1EB] text-[#D08C60]",
      subtitle: "+8 this week",
    },
    {
      title: "Active Volunteers",
      value: 54,
      icon: <HandHeart size={28} />,
      color: "bg-[#6B8F71]/10 text-[#6B8F71]",
      subtitle: "+6 this month",
    },
    {
      title: "Volunteer Hours",
      value: "1,286",
      icon: <Clock3 size={28} />,
      color: "bg-yellow-100 text-yellow-700",
      subtitle: "+145 this week",
    },
  ];

  const categories = [
    {
      name: "Education",
      count: 42,
    },
    {
      name: "Technology",
      count: 35,
    },
    {
      name: "Career",
      count: 26,
    },
    {
      name: "Community",
      count: 19,
    },
    {
      name: "Wellness",
      count: 12,
    },
  ];

  const volunteers = [
    {
      id: 1,
      name: "Jane Doe",
      skill: "Education",
      hours: 58,
    },
    {
      id: 2,
      name: "Kevin Otieno",
      skill: "Technology",
      hours: 46,
    },
    {
      id: 3,
      name: "Mercy Wanjiku",
      skill: "Career",
      hours: 35,
    },
    {
      id: 4,
      name: "John Mwangi",
      skill: "Community",
      hours: 28,
    },
    {
      id: 5,
      name: "Alice Kimani",
      skill: "Wellness",
      hours: 20,
    },
  ];

  const activities = [
    {
      id: 1,
      type: "user",
      message: "Alice Kimani created a new account.",
      time: "5 minutes ago",
    },
    {
      id: 2,
      type: "request",
      message: "A new Education request was submitted.",
      time: "18 minutes ago",
    },
    {
      id: 3,
      type: "approved",
      message:
        "Kevin Otieno approved a volunteer request.",
      time: "35 minutes ago",
    },
    {
      id: 4,
      type: "volunteer",
      message:
        "Jane Doe completed 5 volunteer hours.",
      time: "1 hour ago",
    },
    {
      id: 5,
      type: "rejected",
      message:
        "A Technology request was rejected.",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">
      <AdminSidebar />

      <main className="flex-1 ml-72 p-10">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Reports & Analytics
          </h1>

          <p className="text-gray-600 mt-2">
            Monitor platform growth,
            volunteer participation and
            community engagement.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          {reportStats.map((stat) => (
            <ReportCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
              subtitle={stat.subtitle}
            />
          ))}

        </div>

        {/* Analytics */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">

          <PopularCategories
            categories={categories}
          />

          <VolunteerLeaderboard
            volunteers={volunteers}
          />

        </div>

        {/* Activity */}

        <RecentActivity
          activities={activities}
        />

      </main>
    </div>
  );
}