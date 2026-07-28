import OpportunityCard from "../../components/volunteer/OpportunityCard";


const opportunities = [
  {
    id: 1,
    title: "Math Tutor Needed",
    category: "Education",
    location: "Nairobi",
  },
  {
    id: 2,
    title: "Career Mentor",
    category: "Mentorship",
    location: "Remote",
  },
  {
    id: 3,
    title: "Community Cleanup",
    category: "Community",
    location: "Kiambu",
  },
];

export default function Opportunities() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Volunteer Opportunities
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {opportunities.map((opportunity) => (
          <OpportunityCard
            key={opportunity.id}
            {...opportunity}
          />
        ))}
      </div>
    </div>
  );
}