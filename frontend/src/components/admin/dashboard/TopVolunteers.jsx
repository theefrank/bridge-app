import { Trophy } from "lucide-react";

export default function TopVolunteers({
  volunteers,
}) {
  const topVolunteers = [...volunteers]
    .sort((a, b) => b.hours - a.hours)
    .slice(0, 5);

  return (
    <div className="bridge-card">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-11 h-11 rounded-xl bg-[#FAF1EB] flex items-center justify-center">

          <Trophy className="text-[#D08C60]" />

        </div>

        <div>

          <h2 className="text-2xl font-semibold">
            Top Volunteers
          </h2>

          <p className="text-sm text-gray-500">
            Ranked by completed volunteer hours
          </p>

        </div>

      </div>

      <div className="space-y-5">

        {topVolunteers.map(
          (volunteer, index) => (

            <div
              key={volunteer.id}
              className="flex items-center justify-between"
            >

              <div className="flex items-center gap-4">

                <div className="w-10 h-10 rounded-full bg-[#6B8F71]/10 flex items-center justify-center font-bold text-[#6B8F71]">

                  #{index + 1}

                </div>

                <div>

                  <h3 className="font-semibold">

                    {volunteer.name}

                  </h3>

                  <p className="text-sm text-gray-500">

                    {volunteer.skill}

                  </p>

                </div>

              </div>

              <div className="text-right">

                <h3 className="font-bold text-[#D08C60]">

                  {volunteer.hours} hrs

                </h3>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
}