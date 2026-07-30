import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../ui/select";

export default function FilterVolunteers({
  selectedStatus,
  setSelectedStatus,
}) {
  return (
    <Select
      value={selectedStatus}
      onValueChange={setSelectedStatus}
    >
      <SelectTrigger className="w-full h-11 rounded-xl border-gray-200 bg-white shadow-sm hover:border-[#D08C60] focus:ring-[#D08C60]">

        <SelectValue />

      </SelectTrigger>

      <SelectContent>

        <SelectItem value="All">
          All Volunteers
        </SelectItem>

        <SelectItem value="Active">
          Active
        </SelectItem>

        <SelectItem value="Pending">
          Pending
        </SelectItem>

        <SelectItem value="Suspended">
          Suspended
        </SelectItem>

      </SelectContent>

    </Select>
  );
}