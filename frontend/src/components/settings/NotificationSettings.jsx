export default function NotificationSettings({
  settings,
  handleCheckbox,
}) {
  return (
    <div className="bridge-card">

      <h2 className="text-2xl font-semibold mb-6">
        Notifications
      </h2>

      <div className="space-y-5">

        <label className="flex justify-between items-center">

          <span>Email Notifications</span>

          <input
            type="checkbox"
            checked={settings.emailNotifications}
            onChange={handleCheckbox}
            name="emailNotifications"
            className="w-5 h-5 accent-[#6B8F71]"
          />

        </label>

        <label className="flex justify-between items-center">

          <span>Volunteer Updates</span>

          <input
            type="checkbox"
            checked={settings.volunteerUpdates}
            onChange={handleCheckbox}
            name="volunteerUpdates"
            className="w-5 h-5 accent-[#6B8F71]"
          />

        </label>

        <label className="flex justify-between items-center">

          <span>Weekly Newsletter</span>

          <input
            type="checkbox"
            checked={settings.newsletter}
            onChange={handleCheckbox}
            name="newsletter"
            className="w-5 h-5 accent-[#6B8F71]"
          />

        </label>

      </div>

    </div>
  );
}