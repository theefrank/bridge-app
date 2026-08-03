import { Search } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function RequestToolbar({
  search,
  setSearch,
  status,
  setStatus,
  sort,
  setSort,
}) {
  return (
    <div className="bridge-card mb-8">
      <div className="grid gap-4 md:grid-cols-3">

        {/* Search */}

        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search requests..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bridge-input pl-11"
          />
        </div>

        {/* Status */}

        <Select
        value={status}
        onValueChange={setStatus}
        >
        <SelectTrigger className="w-full h-12 rounded-xl">
            <SelectValue placeholder="Filter by status" />
        </SelectTrigger>

        <SelectContent>
            <SelectItem value="All">All Statuses</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Approved">Approved</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Cancelled">Cancelled</SelectItem>
        </SelectContent>
        </Select>           

        {/* Sort */}

        <Select
        value={sort}
        onValueChange={setSort}
        >
        <SelectTrigger className="w-full h-12 rounded-xl">
            <SelectValue placeholder="Sort requests" />
        </SelectTrigger>

        <SelectContent>
            <SelectItem value="Newest">Newest First</SelectItem>
            <SelectItem value="Oldest">Oldest First</SelectItem>
            <SelectItem value="AZ">A - Z</SelectItem>
        </SelectContent>
        </Select>

      </div>
    </div>
  );
}