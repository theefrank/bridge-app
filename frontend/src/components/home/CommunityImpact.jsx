const stats = [
  { value: "500+", label: "Requests Fulfilled" },
  { value: "200+", label: "Active Volunteers" },
  { value: "50+", label: "Communities Reached" },
];

export default function CommunityImpact() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Community Impact
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Every connection made through Bridge strengthens communities
            and creates meaningful change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bridge-card text-center"
            >
              <h3 className="text-4xl font-bold text-[#D08C60]">
                {stat.value}
              </h3>

              <p className="text-gray-600 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}