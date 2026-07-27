import {
  Eye,
  CheckCircle,
  PauseCircle,
  Trash2,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

export default function VolunteerTable({
  volunteers,
}) {
  return (
    <div className="bridge-card overflow-x-auto">

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-4">
              Name
            </th>

            <th className="text-left">
              Skills
            </th>

            <th className="text-left">
              Hours
            </th>

            <th className="text-left">
              Status
            </th>

            <th className="text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {volunteers.map((volunteer) => (

            <tr
              key={volunteer.id}
              className="border-b"
            >

              <td className="py-5 font-medium">
                {volunteer.name}
              </td>

              <td>
                {volunteer.skill}
              </td>

              <td>
                {volunteer.hours} hrs
              </td>

              <td>

                <StatusBadge
                  status={volunteer.status}
                />

              </td>

              <td>

                <div className="flex justify-center gap-2">

                  <button className="p-2 rounded-lg hover:bg-gray-100">

                    <Eye
                      size={18}
                      className="text-[#6B8F71]"
                    />

                  </button>

                  <button className="p-2 rounded-lg hover:bg-green-100">

                    <CheckCircle
                      size={18}
                      className="text-green-600"
                    />

                  </button>

                  <button className="p-2 rounded-lg hover:bg-yellow-100">

                    <PauseCircle
                      size={18}
                      className="text-yellow-600"
                    />

                  </button>

                  <button className="p-2 rounded-lg hover:bg-red-100">

                    <Trash2
                      size={18}
                      className="text-red-600"
                    />

                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}