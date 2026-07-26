import { Eye, Pencil, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function UserTable({ users }) {
  return (
    <div className="bridge-card overflow-x-auto">

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-4">Name</th>

            <th className="text-left">Email</th>

            <th className="text-left">Role</th>

            <th className="text-left">Status</th>

            <th className="text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr
              key={user.id}
              className="border-b hover:bg-gray-50 transition"
            >

              <td className="py-5 font-medium">
                {user.name}
              </td>

              <td>{user.email}</td>

              <td className="capitalize">
                {user.role}
              </td>

              <td>
                <StatusBadge
                  status={user.status}
                />
              </td>

              <td>

                <div className="flex justify-center gap-3">

                  <button className="p-2 rounded-lg hover:bg-[#FAF1EB]">

                    <Eye
                      size={18}
                      className="text-[#6B8F71]"
                    />

                  </button>

                  <button className="p-2 rounded-lg hover:bg-[#FAF1EB]">

                    <Pencil
                      size={18}
                      className="text-[#D08C60]"
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