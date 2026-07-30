import DashboardLayout from "../../components/dashboard/DashboardLayout";
import EditProfileForm from "../../components/profile/EditProfileForm";

export default function EditProfile() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Edit Profile
          </h1>

          <p className="text-gray-600 mt-2">
            Keep your profile information accurate and
            up to date.
          </p>
        </div>

        <EditProfileForm />
      </div>
    </DashboardLayout>
  );
}