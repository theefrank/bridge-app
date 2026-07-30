export default function AppearanceSettings({
  settings,
  handleChange,
}) {
  return (
    <div className="bridge-card">

      <h2 className="text-2xl font-semibold mb-6">
        Appearance
      </h2>

      <div className="space-y-5">

        <div>

          <label className="block mb-2">
            Language
          </label>

          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="bridge-input"
          >
            <option>English</option>
            <option>Swahili</option>
          </select>

        </div>

        <div>

          <label className="block mb-2">
            Theme
          </label>

          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="bridge-input"
          >
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>

        </div>

      </div>

    </div>
  );
}