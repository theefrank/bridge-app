import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function Profile() {
  return (
    <DashboardLayout>
    <div className="min-h-screen bg-[#FAF7F2] p-8">
      <div className="max-w-3xl mx-auto bridge-card">
        <h1 className="text-3xl font-bold mb-6">
          My Profile
        </h1>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              Name
            </h3>
            <p>Jane Doe</p>
          </div>

          <div>
            <h3 className="font-semibold">
              Email
            </h3>
            <p>jane@email.com</p>
          </div>

          <div>
            <h3 className="font-semibold">
              Role
            </h3>
            <p>User</p>
          </div>

          <div>
            <h3 className="font-semibold">
              Bio
            </h3>
            <p>
              Passionate about community
              support and learning.
            </p>
          </div>

          <button className="btn-primary">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}