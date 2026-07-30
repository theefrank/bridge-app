import AdminSidebar from "../../components/admin/AdminSidebar";

export default function UsersManagement() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@email.com",
      role: "User",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@email.com",
      role: "Volunteer",
    },
  ];

  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          User Management
        </h1>

        <div className="bridge-card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">
                  Name
                </th>
                <th className="text-left p-4">
                  Email
                </th>
                <th className="text-left p-4">
                  Role
                </th>
                <th className="text-left p-4">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b"
                >
                  <td className="p-4">
                    {user.name}
                  </td>

                  <td className="p-4">
                    {user.email}
                  </td>

                  <td className="p-4">
                    {user.role}
                  </td>

                  <td className="p-4 flex gap-2">
                    <button className="btn-secondary">
                      Edit
                    </button>

                    <button className="btn-outline">
                      Suspend
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}