export default function ProfileCard({
  name,
  email,
  role,
}) {
  return (
    <div className="bridge-card">
      <div className="w-20 h-20 rounded-full bg-[#D08C60] mx-auto mb-4" />

      <h2 className="text-2xl font-bold text-center">
        {name}
      </h2>

      <p className="text-center text-gray-600">
        {email}
      </p>

      <p className="text-center mt-2 text-[#5F766F] font-medium">
        {role}
      </p>
    </div>
  );
}