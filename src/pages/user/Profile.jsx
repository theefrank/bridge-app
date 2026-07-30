import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ProfileCard from "../../components/profile/ProfileCard";

export default function Profile() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}

        <div>
          <h1 className="text-4xl font-bold">
            My Profile
          </h1>

          <p className="text-gray-600 mt-2">
            Manage your personal information and keep
            your profile up to date.
          </p>
        </div>

        {/* Profile Card */}

        <ProfileCard />

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bridge-card text-center">
            <h2 className="text-4xl font-bold text-[#6B8F71]">
              12
            </h2>

            <p className="mt-2 text-gray-600">
              Requests Created
            </p>
          </div>

          <div className="bridge-card text-center">
            <h2 className="text-4xl font-bold text-[#D08C60]">
              8
            </h2>

            <p className="mt-2 text-gray-600">
              Volunteer Activities
            </p>
          </div>

          <div className="bridge-card text-center">
            <h2 className="text-4xl font-bold text-[#6B8F71]">
              94%
            </h2>

            <p className="mt-2 text-gray-600">
              Profile Completion
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}