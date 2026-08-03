import UserSidebar from "./UserSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      <UserSidebar />

      <main className="ml-72 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
}