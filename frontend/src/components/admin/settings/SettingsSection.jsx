export default function SettingsSection({
  title,
  description,
  children,
}) {
  return (
    <section className="bridge-card">

      <div className="mb-6">

        <h2 className="flex items-center text-2xl font-semibold">
          {title}
        </h2>

        <p className="text-gray-500 mt-1">
          {description}
        </p>

      </div>

      <div className="space-y-6">

        {children}

      </div>

    </section>
  );
}