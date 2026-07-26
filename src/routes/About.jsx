import { HeartHandshake, Users, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-5xl font-bold mb-6">
            About Bridge
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bridge is a community-driven platform that connects
            individuals seeking support with volunteers ready
            to make a difference.
          </p>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bridge-card text-center">
            <HeartHandshake
              size={40}
              className="mx-auto text-[#D08C60] mb-4"
            />

            <h3 className="font-semibold text-xl mb-2">
              Our Mission
            </h3>

            <p className="text-gray-600">
              Connect people with meaningful support and opportunities.
            </p>
          </div>

          <div className="bridge-card text-center">
            <Users
              size={40}
              className="mx-auto text-[#D08C60] mb-4"
            />

            <h3 className="font-semibold text-xl mb-2">
              Our Community
            </h3>

            <p className="text-gray-600">
              Empower volunteers and individuals to collaborate.
            </p>
          </div>

          <div className="bridge-card text-center">
            <Sparkles
              size={40}
              className="mx-auto text-[#D08C60] mb-4"
            />

            <h3 className="font-semibold text-xl mb-2">
              Our Vision
            </h3>

            <p className="text-gray-600">
              Build stronger and more connected communities.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}