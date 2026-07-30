import UserSidebar from "../../components/dashboard/UserSidebar";

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">
      <UserSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}