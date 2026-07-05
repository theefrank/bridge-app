export default function Button({
  children,
  variant = "primary",
  onClick,
}) {
  const baseStyles =
    "px-6 py-3 rounded-xl font-medium transition";

  const variants = {
    primary: "bg-[#7C9A92] text-white",
    secondary: "bg-[#D08C60] text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}