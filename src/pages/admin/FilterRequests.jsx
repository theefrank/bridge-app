export default function FilterRequests({
  selectedStatus,
  setSelectedStatus,
}) {
  const statuses = [
    "All",
    "Pending",
    "Approved",
    "Rejected",
  ];

  return (
    <select
      value={selectedStatus}
      onChange={(e) =>
        setSelectedStatus(e.target.value)
      }
      className="bridge-input md:w-60"
    >
      {statuses.map((status) => (
        <option
          key={status}
          value={status}
        >
          {status}
        </option>
      ))}
    </select>
  );
}