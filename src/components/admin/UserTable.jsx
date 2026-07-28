import { useState } from "react";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import StatusBadge from "./StatusBadge";

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

  const [deleteUser, setDeleteUser] =
    useState(null);

  const [deleteDialogOpen, setDeleteDialogOpen] =
    useState(false);

  function handleView(user) {
    setSelectedUser(user);
    setDialogOpen(true);
  }

  function handleEdit(user) {
    setEditingUser(user);
    setEditDialogOpen(true);
  }

  function handleDelete(user) {
    setDeleteUser(user);
    setDeleteDialogOpen(true);
  }

  function handleSave(updatedUser) {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === updatedUser.id
          ? updatedUser
          : user
      )
    );
  }

  function confirmDelete() {
    setUsers((prev) =>
      prev.filter(
        (user) =>
          user.id !== deleteUser.id
      )
    );

    setDeleteDialogOpen(false);
  }

  return (
    <TooltipProvider>
    <>
      <div className="bridge-card overflow-hidden">

        <div className="overflow-x-auto max-h-150">

          <table className="w-full">

            <thead className="sticky top-0 bg-white z-10 border-b">

              <tr>

                <th className="text-left py-4 px-6">
                  User
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

              {users.length === 0 ? (

                <tr>

                  <td
                    colSpan="5"
                    className="py-14 text-center text-gray-500"
                  >

                    <p className="text-lg font-medium">
                      No users found
                    </p>

                    <p className="text-sm mt-1">
                      Try adjusting your search or filters.
                    </p>

                  </td>

                </tr>

              ) : (

                users.map((user, index) => (

                  <tr
                    key={user.id}
                    className={`
                      transition-colors
                      hover:bg-[#F8F4EF]
                      border-b

                      ${
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50/50"
                      }
                    `}
                  >

                    {/* User */}

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-4">

                        <div className="h-10 w-10 rounded-full bg-[#6B8F71]/15 text-[#6B8F71] flex items-center justify-center font-semibold">

                          {user.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)}

                        </div>

                        <span className="font-medium">
                          {user.name}
                        </span>

                      </div>

                    </td>

                    {/* Email */}

                    <td className="text-gray-600">
                      {user.email}
                    </td>

                    {/* Role */}

                    <td className="capitalize">
                      {user.role}
                    </td>

                    {/* Status */}

                    <td>

                      <StatusBadge
                        status={user.status}
                      />

                    </td>

                    {/* Actions */}
                    <td>

                      <div className="flex justify-center gap-2">

                        <Tooltip>

                          <TooltipTrigger asChild>

                            <button
                              onClick={() => handleView(user)}
                              className="h-9 w-9 rounded-full hover:bg-[#FAF1EB] transition flex items-center justify-center"
                            >

                              <Eye
                                size={18}
                                className="text-[#6B8F71]"
                              />

                            </button>

                          </TooltipTrigger>

                          <TooltipContent>

                            View User

                          </TooltipContent>

                        </Tooltip>

                        <Tooltip>

                          <TooltipTrigger asChild>

                            <button
                              onClick={() => handleEdit(user)}
                              className="h-9 w-9 rounded-full hover:bg-[#FAF1EB] transition flex items-center justify-center"
                            >

                              <Pencil
                                size={18}
                                className="text-[#D08C60]"
                              />

                            </button>

                          </TooltipTrigger>

                          <TooltipContent>

                            Edit User

                          </TooltipContent>

                        </Tooltip>

                        <Tooltip>

                          <TooltipTrigger asChild>

                            <button
                              onClick={() => handleDelete(user)}
                              className="h-9 w-9 rounded-full hover:bg-red-100 transition flex items-center justify-center"
                            >

                              <Trash2
                                size={18}
                                className="text-red-600"
                              />

                            </button>

                          </TooltipTrigger>

                          <TooltipContent>

                            Delete User

                          </TooltipContent>

                        </Tooltip>

                      </div>

                    </td>
                    
                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

      <UserDialog
        user={selectedUser}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />

      <EditUserDialog
        user={editingUser}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        onSave={handleSave}
      />

      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onDelete={confirmDelete}
        itemName={deleteUser?.name}
        itemType="User"
      />
    </>
    </TooltipProvider>
  );
}