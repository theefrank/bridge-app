import { useState } from "react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import SettingsSection from "../../components/admin/settings/SettingsSection";
import SettingsToggle from "../../components/admin/settings/SettingsToggle";
import ChangePasswordDialog from "../../components/admin/settings/ChangePasswordDialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Building2,
  Globe,
  ShieldCheck,
  UserCircle,
} from "lucide-react";

import { toast } from "sonner";

export default function Settings() {
  const [platformName, setPlatformName] =
    useState("Bridge");

  const [supportEmail, setSupportEmail] =
    useState("support@bridge.org");

  const [defaultRole, setDefaultRole] =
    useState("User");

  const [allowRegistration, setAllowRegistration] =
    useState(true);

  const [requireApproval, setRequireApproval] =
    useState(false);

  const [
    emailNotifications,
    setEmailNotifications,
  ] = useState(true);

  const [sessionTimeout, setSessionTimeout] =
    useState(30);

  const [passwordLength, setPasswordLength] =
    useState(8);
  
  const [adminName, setAdminName] =
  useState("Bridge Administrator");

  const [adminEmail, setAdminEmail] =
  useState("admin@bridge.org"); 
  
  const [
  passwordDialogOpen,
  setPasswordDialogOpen,
  ] = useState(false);

  function handleReset() {
  setPlatformName("Bridge");

  setSupportEmail("support@bridge.org");

  setDefaultRole("User");

  setAllowRegistration(true);

  setRequireApproval(false);

  setEmailNotifications(true);

  setSessionTimeout(30);

  setPasswordLength(8);

  setAdminName(
  "Bridge Administrator"
  );

  setAdminEmail(
  "admin@bridge.org"
  );

  toast.info(
    "Settings have been reset to their default values."
  );
  }   

  function handleSave(e) {
    e.preventDefault();

    toast.success(
      "Settings saved successfully!",
      {
        description:
          "Your platform settings have been updated.",
      }
    );    

    console.log({
      platformName,
      supportEmail,
      defaultRole,
      allowRegistration,
      requireApproval,
      emailNotifications,
      sessionTimeout,
      passwordLength,
      adminName,
      adminEmail,
    });
  }

  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">

      <AdminSidebar />

      <main className="flex-1 ml-72 p-10">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="text-gray-600 mt-2">
            Configure your platform preferences
            and administrative settings.
          </p>

        </div>

        <form
          onSubmit={handleSave}
          className="space-y-8"
        >

          <div className="grid xl:grid-cols-2 gap-8">

          <SettingsSection
            title={
              <div className="flex items-center gap-2">

                <Building2
                  size={20}
                  className="text-[#6B8F71]"
                />

                <span>General</span>

              </div>
            }
            description="Basic platform information."
          >
            <div>

              <label className="block font-medium mb-2">
                Platform Name
              </label>

              <input
                type="text"
                value={platformName}
                onChange={(e) =>
                  setPlatformName(
                    e.target.value
                  )
                }
                className="bridge-input"
              />

            </div>

            <div>

              <label className="block font-medium mb-2">
                Support Email
              </label>

              <input
                type="email"
                value={supportEmail}
                onChange={(e) =>
                  setSupportEmail(
                    e.target.value
                  )
                }
                className="bridge-input"
              />

            </div>

            <div>

              <label className="block font-medium mb-2">
                Default User Role
              </label>

              <Select
                value={defaultRole}
                onValueChange={setDefaultRole}
              >

                <SelectTrigger className="bridge-input">

                  <SelectValue placeholder="Select role" />

                </SelectTrigger>

                <SelectContent>

                  <SelectItem value="User">
                    User
                  </SelectItem>

                  <SelectItem value="Volunteer">
                    Volunteer
                  </SelectItem>

                </SelectContent>

              </Select>

            </div>

          </SettingsSection>

          <SettingsSection
            title={
              <div className="flex items-center gap-2">

                <UserCircle
                  size={20}
                  className="text-[#D08C60]"
                />

                <span>Administrator</span>

              </div>
            }

            description="Manage your administrator account."

          >

            <div>

              <label className="block font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                value={adminName}
                onChange={(e) =>
                  setAdminName(e.target.value)
                }
                className="bridge-input"
              />

            </div>

            <div>

              <label className="block font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={adminEmail}
                onChange={(e) =>
                  setAdminEmail(e.target.value)
                }
                className="bridge-input"
              />

            </div>

            <div>

              <label className="block font-medium mb-2">
                Password
              </label>

            <button
              type="button"
              onClick={() =>
                setPasswordDialogOpen(true)
              }
              className="btn-secondary w-full"
            >
              Change Password
            </button>

            </div>

          </SettingsSection>

          <SettingsSection
            title={
              <div className="flex items-center gap-2">

                <Globe
                  size={20}
                  className="text-[#D08C60]"
                />

                <span>Platform</span>

              </div>
            }
            description="Control platform access."
          >          

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-medium">
                  Allow New Registrations
                </h3>

                <p className="text-gray-500 text-sm">
                  Users can create new accounts.
                </p>

              </div>

              <SettingsToggle
                enabled={allowRegistration}
                onChange={
                  setAllowRegistration
                }
              />

            </div>

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-medium">
                  Require Admin Approval
                </h3>

                <p className="text-gray-500 text-sm">
                  New volunteers require approval.
                </p>

              </div>

              <SettingsToggle
                enabled={requireApproval}
                onChange={
                  setRequireApproval
                }
              />

            </div>

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-medium">
                  Email Notifications
                </h3>

                <p className="text-gray-500 text-sm">
                  Send email updates automatically.
                </p>

              </div>

              <SettingsToggle
                enabled={emailNotifications}
                onChange={
                  setEmailNotifications
                }
              />

            </div>

          </SettingsSection>

          <SettingsSection
            title={
              <div className="flex items-center gap-2">

                <ShieldCheck
                  size={20}
                  className="text-[#6B8F71]"
                />

                <span>Security</span>

              </div>
            }
            description="Authentication and session settings."
          >
            <div>

              <label className="block font-medium mb-2">
                Session Timeout (minutes)
              </label>

              <input
                type="number"
                min="5"
                value={sessionTimeout}
                onChange={(e) =>
                  setSessionTimeout(
                    e.target.value
                  )
                }
                className="bridge-input"
              />

            </div>

            <div>

              <label className="block font-medium mb-2">
                Minimum Password Length
              </label>

              <input
                type="number"
                min="6"
                value={passwordLength}
                onChange={(e) =>
                  setPasswordLength(
                    e.target.value
                  )
                }
                className="bridge-input"
              />

            </div>

          </SettingsSection>
          </div>

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={handleReset}
              className="
                px-6
                py-3
                rounded-xl
                border
                border-gray-300
                bg-white
                text-gray-700
                font-medium
                hover:bg-gray-50
                transition
              "
            >
              Reset Settings
            </button>

            <button
              type="submit"
              className="btn-primary px-8"
            >
              Save Changes
            </button>

          </div>          

        </form>

        <ChangePasswordDialog
        open={passwordDialogOpen}
        onOpenChange={setPasswordDialogOpen}
      />

      </main>

    </div>
  );
}