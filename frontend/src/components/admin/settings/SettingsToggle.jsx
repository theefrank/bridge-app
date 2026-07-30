export default function SettingsToggle({
  enabled,
  onChange,
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 ${
        enabled
          ? "bg-[#6B8F71]"
          : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${
          enabled
            ? "translate-x-6"
            : "translate-x-1"
        }`}
      />
    </button>
  );
}