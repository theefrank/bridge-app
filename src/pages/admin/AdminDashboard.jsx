import {
  Users,
  ClipboardList,
  HandHeart,
  TriangleAlert,
} from "lucide-react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminStats from "../../components/admin/AdminStats";

export default function AdminDashboard() {
  const dashboardStats = [
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
    <div className="flex min-h-screen bg-[#FAF7F2]">

      <AdminSidebar />

      <main className="flex-1 p-10">

        {/* Header */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Monitor platform activity, manage users,
            review requests and oversee volunteers.
          </p>

        </div>

        <AdminStats stats={dashboardStats}/>

        <div className="grid xl:grid-cols-2 gap-8 mt-10">

          {/* Recent Requests */}

          <div className="bridge-card">

            <h2 className="text-2xl font-semibold mb-6">
              Recent Requests
            </h2>

            <div className="space-y-5">

              {[
                "Need Mathematics Tutor",
                "Community Food Drive",
                "Career Mentor Needed",
                "Laptop Repair Assistance",
              ].map((request) => (

                <div
                  key={request}
                  className="flex justify-between items-center border-b pb-3"
                >

                  <span>{request}</span>

                  <button className="text-[#D08C60] font-semibold hover:underline">

                    View

                  </button>

                </div>

              ))}

            </div>

          </div>

          {/* Recent Users */}

          <div className="bridge-card">

            <h2 className="text-2xl font-semibold mb-6">
              Newest Users
            </h2>

            <div className="space-y-5">

              {[
                "Jane Doe",
                "John Mwangi",
                "Mercy Wanjiku",
                "Kevin Otieno",
              ].map((user) => (

                <div
                  key={user}
                  className="flex justify-between items-center border-b pb-3"
                >

                  <span>{user}</span>

                  <span className="text-[#6B8F71]">
                    Active
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}