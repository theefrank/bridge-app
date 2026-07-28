import { useState } from "react";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import UserDialog from "./UserDialog";
import EditUserDialog from "./EditUserDialog";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

export default function UserTable({
  users,
  setUsers,
}) {
  const [selectedUser, setSelectedUser] =
    useState(null);

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [editingUser, setEditingUser] =
    useState(null);

  const [editDialogOpen, setEditDialogOpen] =
    useState(false);

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

  function handleSave(updatedUser) {
    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === updatedUser.id
          ? updatedUser
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

  function handleStatusChange(
    userId,
    newStatus
  ) {
    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: newStatus,
            }
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
            Try changing your search.
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

                    <Select
                      value={user.status}
                      onValueChange={(value) =>
                        handleStatusChange(
                          user.id,
                          value
                        )
                      }
                    >

                      <SelectTrigger
                        className={`w-36 h-9 border-0 shadow-none

                        ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"

                            : user.status === "Pending"
                            ? "bg-[#FAF1EB] text-[#D08C60]"

                            : "bg-red-100 text-red-700"
                        }
                        `}
                      >

                        <SelectValue />

                      </SelectTrigger>

                      <SelectContent>

                        <SelectItem value="Active">
                          Active
                        </SelectItem>

                        <SelectItem value="Pending">
                          Pending
                        </SelectItem>

                        <SelectItem value="Suspended">
                          Suspended
                        </SelectItem>

                      </SelectContent>

                    </Select>

                  </td>

                  <td>

                    <div className="flex justify-center items-center gap-3">

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

      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onDelete={confirmDelete}
        itemName={userToDelete?.name}
        itemType="User"
      />

    </>
  );
}