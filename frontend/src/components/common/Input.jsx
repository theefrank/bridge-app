export default function Input({
  label,
  type,
  placeholder,
  value,
  name,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className="border rounded-xl px-4 py-3"
      />
    </div>
  );
}