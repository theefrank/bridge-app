import { Search } from "lucide-react";

export default function OpportunitySearch({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="relative w-full">

      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search volunteer opportunities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bridge-input pl-12"
      />

    </div>
  );
}