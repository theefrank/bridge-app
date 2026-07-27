import { useState } from "react";

import AdminSidebar from "../../components/admin/AdminSidebar";
import SettingsSection from "../../components/admin/SettingsSection";
import SettingsToggle from "../../components/admin/SettingsToggle";

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

  const [theme, setTheme] =
    useState("Light");

  function handleSave(e) {
    e.preventDefault();

    alert("Settings saved successfully!");

    console.log({
      platformName,
      supportEmail,
      defaultRole,
      allowRegistration,
      requireApproval,
      emailNotifications,
      sessionTimeout,
      passwordLength,
      theme,
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

          <SettingsSection
            title="General"
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

              <select
                value={defaultRole}
                onChange={(e) =>
                  setDefaultRole(
                    e.target.value
                  )
                }
                className="bridge-input"
              >
                <option>User</option>
                <option>Volunteer</option>

              </select>

            </div>

          </SettingsSection>

          <SettingsSection
            title="Platform"
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
            title="Security"
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

          <SettingsSection
            title="Appearance"
            description="Customize the administrator interface."
          >

            <div>

              <label className="block font-medium mb-2">
                Theme
              </label>

              <select
                value={theme}
                onChange={(e) =>
                  setTheme(
                    e.target.value
                  )
                }
                className="bridge-input"
              >
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>

            </div>

          </SettingsSection>

          <div className="flex justify-end">

            <button
              type="submit"
              className="btn-primary px-8"
            >
              Save Changes
            </button>

          </div>

        </form>

      </main>

    </div>
  );
}