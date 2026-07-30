export default function SecuritySettings({
  settings,
  handleChange,
  errors,
}) {
  return (
    <div className="bridge-card">

      <h2 className="text-2xl font-semibold mb-6">
        Security
      </h2>

      <div className="space-y-5">

        <div>

          <label className="block mb-2">
            New Password
          </label>

          <input
            type="password"
            name="password"
            value={settings.password}
            onChange={handleChange}
            className="bridge-input"
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password}
            </p>
          )}

        </div>

        <div>

          <label className="block mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={settings.confirmPassword}
            onChange={handleChange}
            className="bridge-input"
          />

          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}

        </div>

      </div>

    </div>
  );
}