import { Trophy, Medal, Award } from "lucide-react";

export default function VolunteerLeaderboard({
  volunteers,
}) {
  return (
    <div className="bridge-card">

      <div className="mb-6">

        <h2 className="text-2xl font-semibold">
          Volunteer Leaderboard
        </h2>

        <p className="text-gray-500 mt-1">
          Top volunteers by completed service hours
        </p>

      </div>

      <div className="space-y-4">

        {volunteers.map((volunteer, index) => {

          let badge;

          if (index === 0) {
            badge = (
              <Trophy
                size={22}
                className="text-yellow-500"
              />
            );
          } else if (index === 1) {
            badge = (
              <Medal
                size={22}
                className="text-gray-500"
              />
            );
          } else if (index === 2) {
            badge = (
              <Award
                size={22}
                className="text-amber-700"
              />
            );
          } else {
            badge = (
              <span className="font-bold text-gray-500">
                #{index + 1}
              </span>
            );
          }

          return (

            <div
              key={volunteer.id}
              className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white"
            >

              <div className="flex items-center gap-4">

                <div className="w-10 flex justify-center">
                  {badge}
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

                <h3 className="text-xl font-bold text-[#6B8F71]">
                  {volunteer.hours}
                </h3>

                <p className="text-sm text-gray-500">
                  Hours
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}