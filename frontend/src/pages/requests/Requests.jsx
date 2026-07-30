import { useState } from "react";
import { Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import RequestCard from "../../components/requests/RequestCard";
import SearchBar from "../../components/common/SearchBar";

const requests = [
  {
    id: 1,
    title: "Need Mathematics Tutor",
    category: "Education",
    location: "Nairobi",
    description:
      "Looking for a volunteer tutor for high school mathematics.",
  },
  {
    id: 2,
    title: "Career Guidance",
    category: "Mentorship",
    location: "Remote",
    description:
      "Seeking guidance on software engineering careers.",
  },
  {
    id: 3,
    title: "Community Cleanup",
    category: "Community",
    location: "Kiambu",
    description:
      "Volunteers needed for a weekend cleanup exercise.",
  },
  {
    id: 4,
    title: "Website Development Support",
    category: "Technology",
    location: "Remote",
    description:
      "Looking for volunteers to help build a community website.",
  },
];

export default function Requests() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredRequests = requests.filter(
    (request) => {
      const matchesSearch =
        request.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        request.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        request.category === selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            Community Requests
          </h1>

          <p className="text-gray-600 mt-2">
            Browse requests and offer your support.
          </p>
        </div>

        <Link
          to="/requests/new"
          className="btn-primary mt-4 md:mt-0 flex items-center gap-2"
        >
          <Plus size={18} />
          Create Request
        </Link>
      </div>

      {/* Search + Filter */}
      <div className="bridge-card mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Search */}
          <SearchBar
            placeholder="Search requests..."
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          
          {/* Category Filter */}
          
          
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-full px-4 py-6 rounded-xl border border-gray-200 bg-white outline-none">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="All">
                All Categories
              </SelectItem>

              <SelectItem value="Education">
                Education
              </SelectItem>

              <SelectItem value="Technology">
                Technology
              </SelectItem>

              <SelectItem value="Mentorship">
                Mentorship
              </SelectItem>

              <SelectItem value="Community">
                Community
              </SelectItem>
            </SelectContent>
          </Select>            
            
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-gray-600">
        {filteredRequests.length} request
        {filteredRequests.length !== 1 && "s"} found
      </div>

      {/* Requests Grid */}
      {filteredRequests.length > 0 ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredRequests.map((request) => (
            <RequestCard
              key={request.id}
              {...request}
            />
          ))}
        </div>
      ) : (
        <div className="bridge-card text-center py-12">
          <h3 className="text-xl font-semibold mb-2">
            No requests found
          </h3>

          <p className="text-gray-600">
            Try adjusting your search or
            category filter.
          </p>
        </div>
      )}
    </DashboardLayout>
  );
}