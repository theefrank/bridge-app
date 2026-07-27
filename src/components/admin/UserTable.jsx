import { useState } from "react";

import {
  Eye,
  Pencil,
  Trash2,
  UserMinus,
  UserCheck,
} from "lucide-react";

import StatusBadge from "./StatusBadge";
import UserDialog from "./UserDialog";
import EditUserDialog from "./EditUserDialog";
import DeleteUserDialog from "./DeleteUserDialog";

export default function UserTable({
  users,
  setUsers,
}) {
  const [selectedUser, setSelectedUser] =
    useState(null);

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [editDialogOpen, setEditDialogOpen] =
    useState(false);

  const [editingUser, setEditingUser] =
    useState(null);

  const [deleteDialogOpen, setDeleteDialogOpen] =
  useState(false);

  const [userToDelete, setUserToDelete] =
    useState(null);  

  function handleView(user) {
    setSelectedUser(user);
    setDialogOpen(true);
  }

  function handleEdit(user) {

  setEditingUser(user);

  setEditDialogOpen(true);

  }

  function handleSuspend(userId) {
    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === userId
          ? {
              ...user,
              status:
                user.status === "Suspended"
                  ? "Active"
                  : "Suspended",
            }
          : user
      )
    );
  }

  function handleDelete(user) {

  setUserToDelete(user);

  setDeleteDialogOpen(true);

 }

  function confirmDelete() {

    setUsers((previousUsers) =>
      previousUsers.filter(
        (user) =>
          user.id !== userToDelete.id
      )
    );

    setDeleteDialogOpen(false);

    setUserToDelete(null);

  }

  function handleSave(updatedUser) {

    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === updatedUser.id
          ? updatedUser
          : user
      )
    );

  }  

  return (
    <>

      {users.length === 0 ? (

        <div className="bridge-card text-center py-20">

          <h2 className="text-2xl font-semibold">
            No users found
          </h2>

          <p className="text-gray-500 mt-3">
            Try changing your search or filters.
          </p>

        </div>

      ) : (

        <div className="bridge-card overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-4">
                  Name
                </th>

                <th className="text-left">
                  Email
                </th>

                <th className="text-left">
                  Role
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

              {users.map((user) => (

                <tr
                  key={user.id}
                  className="border-b"
                >

                  <td className="py-5 font-medium">
                    {user.name}
                  </td>

                  <td>
                    {user.email}
                  </td>

                  <td className="capitalize">
                    {user.role}
                  </td>

                  <td>

                    <StatusBadge
                      status={user.status}
                    />

                  </td>

                  <td>

                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() =>
                          handleView(user)
                        }
                        className="p-2 rounded-lg hover:bg-[#FAF1EB]"
                        title="View User"
                      >

                        <Eye
                          size={18}
                          className="text-[#6B8F71]"
                        />

                      </button>

                      <button
                        onClick={() =>
                          handleEdit(user)
                        }
                        className="p-2 rounded-lg hover:bg-[#FAF1EB]"
                        title="Edit User"
                      >

                        <Pencil
                          size={18}
                          className="text-[#D08C60]"
                        />

                      </button>

                      <button
                        onClick={() =>
                          handleSuspend(user.id)
                        }
                        className="p-2 rounded-lg hover:bg-yellow-100"
                        title={
                          user.status ===
                          "Suspended"
                            ? "Activate User"
                            : "Suspend User"
                        }
                      >

                        {user.status ===
                        "Suspended" ? (

                          <UserCheck
                            size={18}
                            className="text-green-600"
                          />

                        ) : (

                          <UserMinus
                            size={18}
                            className="text-yellow-600"
                          />

                        )}

                      </button>

                      <button
                      onClick={() =>
                      handleDelete(user)
                    }                    
                        className="p-2 rounded-lg hover:bg-red-100"
                        title="Delete User"
                      >

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

      )}

      <UserDialog
        user={selectedUser}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />

      <EditUserDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        user={editingUser}
        onSave={handleSave}
      />      

      <DeleteUserDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        user={userToDelete}
        onDelete={confirmDelete}
      />      

    </>
  );
}