export default function StatusBadge({ status }) {
  const styles = {
    Active: "bg-green-100 text-green-700",
    Pending: "bg-[#FAF1EB] text-[#D08C60]",
    Suspended: "bg-red-100 text-red-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        min-w-26.25
        px-3
        py-1.5
        rounded-full
        text-sm
        font-medium
        ${
          styles[status] ??
          "bg-gray-100 text-gray-700"
        }
      `}
    >
      {status}
    </span>
  );
}