import OpportunityCard from "./OpportunityCard";

export default function RecommendationSection() {
  const opportunities = [
    {
      id: 1,
      title: "Mathematics Tutor",
      category: "Education",
      location: "Nairobi",
      description:
        "Support high school students in Mathematics every Saturday.",
    },

    {
      id: 2,
      title: "Community Cleanup",
      category: "Community",
      location: "Kiambu",
      description:
        "Join volunteers in keeping our environment clean.",
    },

    {
      id: 3,
      title: "Career Mentor",
      category: "Mentorship",
      location: "Remote",
      description:
        "Guide university students interested in technology.",
    },
  ];

  return (
    <section>

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Recommended Opportunities
          </h2>

          <p className="text-gray-500">
            Opportunities that match your interests.
          </p>

        </div>

        <button className="text-[#D08C60] font-semibold hover:underline">
          View All
        </button>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {opportunities.map((opportunity) => (
          <OpportunityCard
            key={opportunity.id}
            {...opportunity}
          />
        ))}

      </div>

    </section>
  );
}