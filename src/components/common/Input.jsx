export default function Input({
  label,
  type,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className="border rounded-xl px-4 py-3"
      />
    </div>
  );
}