import { useState } from "react";

import {
  Users,
  ClipboardList,
  HandHeart,
  Clock3,
  Search,
  CalendarDays,
  Download,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import AdminSidebar from "../../components/admin/AdminSidebar";
import ReportCard from "../../components/admin/reports/ReportCard";
import VolunteerLeaderboard from "../../components/admin/reports/VolunteerLeaderboard";
import RecentActivity from "../../components/admin/reports/RecentActivity";
import RequestsByCategoryChart from "../../components/admin/reports/RequestsByCategoryChart";
import PopularCategories from "../../components/admin/reports/PopularCategories";
import RequestStatusChart from "../../components/admin/common/RequestStatusChart";
import VolunteerHoursChart from "../../components/admin/reports/VolunteerHoursChart";
import GenerateReportDialog from "../../components/admin/dashboard/GenerateReportDialog";

import {
  users as initialUsers,
  volunteers as initialVolunteers,
  requests as initialRequests,
} from "../../data/adminData";

export default function Reports() {
  const [users] = useState(initialUsers);

  const [volunteers] = useState(initialVolunteers);

  const [requests] = useState(initialRequests);
  const [search, setSearch] = useState("");

  const [dateFilter, setDateFilter] =
  useState("All Time");

  const [reportOpen, setReportOpen] =
  useState(false);

  const reportStats = [
  {
    title: "Total Users",
    value: users.length,
    icon: <Users size={28} />,
    color: "bg-[#6B8F71]/10 text-[#6B8F71]",
    subtitle: `${users.filter(
      (user) => user.status === "Active"
    ).length} Active`,
  },

  {
    title: "Requests",
    value: requests.length,
    icon: <ClipboardList size={28} />,
    color: "bg-[#FAF1EB] text-[#D08C60]",
    subtitle: `${requests.filter(
      (request) => request.status === "Pending"
    ).length} Pending`,
  },

  {
    title: "Active Volunteers",
    value: volunteers.filter(
      (volunteer) =>
        volunteer.status === "Active"
    ).length,
    icon: <HandHeart size={28} />,
    color: "bg-[#6B8F71]/10 text-[#6B8F71]",
    subtitle: `${volunteers.length} Total`,
  },

  {
    title: "Volunteer Hours",
    value: volunteers.reduce(
      (total, volunteer) =>
        total + volunteer.hours,
      0
    ),
    icon: <Clock3 size={28} />,
    color: "bg-yellow-100 text-yellow-700",
    subtitle: "Total Hours",
  },
];

  const categories = Object.entries(
  requests.reduce((acc, request) => {
    acc[request.category] =
      (acc[request.category] || 0) + 1;

    return acc;
  }, {})
).map(([name, count]) => ({
  name,
  count,
}));

  const leaderboard = [...volunteers]
  .sort((a, b) => b.hours - a.hours)
  .slice(0, 5);

  const activities = [
  ...requests
    .slice(-2)
    .reverse()
    .map((request) => ({
      id: `request-${request.id}`,
      type: "request",
      message: `${request.user} submitted "${request.title}".`,
      time: "Recently",
    })),

  ...users
    .slice(-2)
    .reverse()
    .map((user) => ({
      id: `user-${user.id}`,
      type: "user",
      message: `${user.name} joined Bridge.`,
      time: "Recently",
    })),

  ...volunteers
    .slice(-2)
    .reverse()
    .map((volunteer) => ({
      id: `volunteer-${volunteer.id}`,
      type: "volunteer",
      message: `${volunteer.name} has logged ${volunteer.hours} volunteer hours.`,
      time: "Recently",
    })),
];

const visibleCategories = categories.filter((category) =>
  category.name
    .toLowerCase()
    .includes(search.toLowerCase())
);

const visibleLeaderboard = leaderboard.filter(
  (volunteer) =>
    volunteer.name
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    volunteer.skill
      .toLowerCase()
      .includes(search.toLowerCase())
);

const visibleActivities = activities.filter(
  (activity) =>
    activity.message
      .toLowerCase()
      .includes(search.toLowerCase())
);

function filterByDate(data) {

  switch (dateFilter) {

    case "Today":
      return data.slice(0, 2);

    case "This Week":
      return data.slice(0, 4);

    case "This Month":
      return data.slice(0, Math.ceil(data.length / 2));

    default:
      return data;

  }

}

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

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">

          <div className="relative flex-1">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search reports..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                py-3
                pl-11
                pr-4
              "
            />

          </div>
          
            <div className="flex flex-col sm:flex-row gap-4">


          <div className="flex gap-3">

            <Select
              value={dateFilter}
              onValueChange={setDateFilter}
            >

                
              <SelectTrigger className="w-44 rounded-xl px-5 py-3">

                <SelectValue />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="Today">
                  Today
                </SelectItem>

                <SelectItem value="This Week">
                  This Week
                </SelectItem>

                <SelectItem value="This Month">
                  This Month
                </SelectItem>

                <SelectItem value="All Time">
                  All Time
                </SelectItem>

              </SelectContent>

            </Select>

            <button
              onClick={() =>
                setReportOpen(true)
              }
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#6B8F71]
                px-5
                py-3
                text-white
                font-medium
                hover:bg-[#5C7B62]
                transition
              "
            >

              <Download size={18} />

              Download Report

            </button>

          </div>

        </div>    
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

          <RequestsByCategoryChart
            categories={visibleCategories}
          />

          <RequestStatusChart
            requests={requests}
          />

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">

          <VolunteerHoursChart
          volunteers={volunteers}
        />

        <VolunteerLeaderboard
        volunteers={visibleLeaderboard}
      />

          

        </div>            

        {/* Activity */}

        <div className="mb-8">
        <PopularCategories
            categories={visibleCategories}
          />
          </div>

        <RecentActivity
          activities={visibleActivities}
        />

        <GenerateReportDialog
          open={reportOpen}
          onOpenChange={setReportOpen}
          users={users}
          volunteers={volunteers}
          requests={requests}
        />

      </main>
    </div>
  );
}