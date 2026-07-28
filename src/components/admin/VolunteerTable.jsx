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

import VolunteerDialog from "./VolunteerDialog";
import EditVolunteerDialog from "./EditVolunteerDialog";
import DeleteUserDialog from "./DeleteConfirmationDialog";

export default function VolunteerTable({
  volunteers,
  setVolunteers,
}) {

  const [selectedVolunteer, setSelectedVolunteer] =
    useState(null);

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [editingVolunteer, setEditingVolunteer] =
    useState(null);

  const [editDialogOpen, setEditDialogOpen] =
    useState(false);

  const [deleteDialogOpen, setDeleteDialogOpen] =
    useState(false);

  const [volunteerToDelete, setVolunteerToDelete] =
    useState(null);

  function handleView(volunteer) {
    setSelectedVolunteer(volunteer);
    setDialogOpen(true);
  }

  function handleEdit(volunteer) {
    setEditingVolunteer(volunteer);
    setEditDialogOpen(true);
  }

  function handleSave(updatedVolunteer) {

    setVolunteers((previous) =>
      previous.map((volunteer) =>
        volunteer.id === updatedVolunteer.id
          ? updatedVolunteer
          : volunteer
      )
    );

  }

  function handleDelete(volunteer) {

    setVolunteerToDelete(volunteer);

    setDeleteDialogOpen(true);

  }

  function confirmDelete() {

    setVolunteers((previous) =>
      previous.filter(
        (volunteer) =>
          volunteer.id !==
          volunteerToDelete.id
      )
    );

    setDeleteDialogOpen(false);

    setVolunteerToDelete(null);

  }

  function handleStatusChange(
    volunteerId,
    newStatus
  ) {

    setVolunteers((previous) =>
      previous.map((volunteer) =>
        volunteer.id === volunteerId
          ? {
              ...volunteer,
              status: newStatus,
            }
          : volunteer
      )
    );

  }

  return (
    <>

      {volunteers.length === 0 ? (

        <div className="bridge-card text-center py-20">

          <h2 className="text-2xl font-semibold">

            No volunteers found

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
                  Skill
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

              {volunteers.map(
                (volunteer) => (

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

                      <Select
                        value={
                          volunteer.status
                        }
                        onValueChange={(
                          value
                        ) =>
                          handleStatusChange(
                            volunteer.id,
                            value
                          )
                        }
                      >

                        <SelectTrigger
                          className={`w-36 h-9 border-0 shadow-none

                          ${
                            volunteer.status ===
                            "Active"
                              ? "bg-green-100 text-green-700"

                              : volunteer.status ===
                                "Pending"
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

                      <div className="flex justify-center gap-3">

                        <button
                          onClick={() =>
                            handleView(
                              volunteer
                            )
                          }
                          className="p-2 rounded-lg hover:bg-[#FAF1EB]"
                        >

                          <Eye
                            size={18}
                            className="text-[#6B8F71]"
                          />

                        </button>

                        <button
                          onClick={() =>
                            handleEdit(
                              volunteer
                            )
                          }
                          className="p-2 rounded-lg hover:bg-[#FAF1EB]"
                        >

                          <Pencil
                            size={18}
                            className="text-[#D08C60]"
                          />

                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              volunteer
                            )
                          }
                          className="p-2 rounded-lg hover:bg-red-100"
                        >

                          <Trash2
                            size={18}
                            className="text-red-600"
                          />

                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      )}

      <VolunteerDialog
        user={selectedVolunteer}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />

      <EditVolunteerDialog
        volunteer={editingVolunteer}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        onSave={handleSave}
      />

      <DeleteUserDialog
        user={volunteerToDelete}
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onDelete={confirmDelete}
      />

    </>
  );
}