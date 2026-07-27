export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">
        Admin Dashboard
      </h1>

      <p className="text-gray-600">
        Manage users, requests, volunteers, and platform activity.
      </p>
    </div>
  );
}
import AdminSidebar from "../../components/admin/AdminSidebar";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,250",
    },
    {
      title: "Volunteers",
      value: "420",
    },
    {
      title: "Active Requests",
      value: "150",
    },
    {
      title: "Categories",
      value: "6",
    },
  ];

  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bridge-card"
            >
              <h3 className="text-gray-500">
                {stat.title}
              </h3>

              <p className="text-3xl font-bold text-[#D08C60] mt-2">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}