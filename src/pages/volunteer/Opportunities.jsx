import { useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import OpportunityCard from "../../components/volunteer/OpportunityCard";
import OpportunityFilters from "../../components/volunteer/OpportunityFilters";
import OpportunitySearch from "../../components/volunteer/OpportunitySearch";

export default function Opportunities() {

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const opportunities = [
    {
      id: 1,
      title: "Mathematics Tutor",
      category: "Education",
      location: "Nairobi",
      description:
        "Support high school students every Saturday.",
    },

    {
      id: 2,
      title: "Career Mentor",
      category: "Mentorship",
      location: "Remote",
      description:
        "Guide students pursuing software engineering.",
    },

    {
      id: 3,
      title: "Community Cleanup",
      category: "Community",
      location: "Kiambu",
      description:
        "Join volunteers for a monthly cleanup event.",
    },

    {
      id: 4,
      title: "Computer Trainer",
      category: "Technology",
      location: "Nakuru",
      description:
        "Teach basic computer skills to youth.",
    },
  ];

  const filteredOpportunities =
    opportunities.filter((opportunity) => {

      const matchesSearch =
        opportunity.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        opportunity.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold">
            Volunteer Opportunities
          </h1>

          <p className="text-gray-600 mt-2">
            Find opportunities that match your
            interests and begin making an impact.
          </p>

        </div>

        <div className="flex flex-col md:flex-row gap-4">

          <OpportunitySearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <OpportunityFilters
            selectedCategory={selectedCategory}
            setSelectedCategory={
              setSelectedCategory
            }
          />

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filteredOpportunities.map(
            (opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                {...opportunity}
              />
            )
          )}

        </div>

      </div>

    </DashboardLayout>
  );
}