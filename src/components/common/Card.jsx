export default function Card({
  title,
  children,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      {children}
    </div>
  );
}