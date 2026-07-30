import DashboardLayout from "../../components/dashboard/DashboardLayout";
import SettingsForm from "../../components/settings/SettingsForm";

export default function Settings() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="text-gray-600 mt-2">
            Manage your preferences and account settings.
          </p>

        </div>

        <SettingsForm />

      </div>

    </DashboardLayout>
  );
}