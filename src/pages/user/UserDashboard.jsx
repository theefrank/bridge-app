import UserSidebar from "../../components/dashboard/UserSidebar";

export default function MyActivity() {
  return (
    <div className="flex bg-[#FAF7F2] min-h-screen">
      <UserSidebar />

      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold">
          My Activity
        </h1>
      </main>
    </div>
  );
}