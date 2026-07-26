import {
  CheckCircle,
  Eye,
  Trash2,
  XCircle,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

export default function RequestTable({
  requests,
}) {
  return (
    <div className="bridge-card overflow-x-auto">

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-4">
              Title
            </th>

            <th className="text-left">
              Category
            </th>

            <th className="text-left">
              Requested By
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

          {requests.map((request) => (

            <tr
              key={request.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="py-5 font-medium">
                {request.title}
              </td>

              <td>
                {request.category}
              </td>

              <td>
                {request.user}
              </td>

              <td>

                <StatusBadge
                  status={request.status}
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

                    <XCircle
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