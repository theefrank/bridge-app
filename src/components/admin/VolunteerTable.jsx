import { useState } from "react";

import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import StatusBadge from "./StatusBadge";
import VolunteerDialog from "./VolunteerDialog";
import EditVolunteerDialog from "./EditVolunteerDialog";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

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

  const [editOpen, setEditOpen] =
    useState(false);

  const [deleteVolunteer, setDeleteVolunteer] =
    useState(null);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  function handleView(volunteer) {
    setSelectedVolunteer(volunteer);
    setDialogOpen(true);
  }

  function handleEdit(volunteer) {
    setEditingVolunteer(volunteer);
    setEditOpen(true);
  }

  function handleDelete(volunteer) {
    setDeleteVolunteer(volunteer);
    setDeleteOpen(true);
  }

  function handleSave(updatedVolunteer) {
    setVolunteers((prev) =>
      prev.map((volunteer) =>
        volunteer.id === updatedVolunteer.id
          ? updatedVolunteer
          : volunteer
      )
    );
  }

  function confirmDelete() {
    setVolunteers((prev) =>
      prev.filter(
        (volunteer) =>
          volunteer.id !== deleteVolunteer.id
      )
    );

    setDeleteOpen(false);
  }

  return (
    <>
      <div className="bridge-card overflow-hidden">

        <div className="overflow-x-auto max-h-150">

          <table className="w-full">

            <thead className="sticky top-0 bg-white z-10 border-b">

              <tr>

                <th className="text-left py-4 px-6 w-[28%]">
                  Volunteer
                </th>

                <th className="text-left w-[22%] ">
                  Email
                </th>

                <th className="text-left w-[10%]">
                  Skill
                </th>

                <th className="text-left w-[10%]">
                  Hours
                </th>

                <th className="text-left w-[10%]">
                  Status
                </th>

                <th className="text-center w-[10%]">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {volunteers.length === 0 ? (

                <tr>

                  <td
                    colSpan="6"
                    className="py-14 text-center text-gray-500"
                  >

                    <p className="text-lg font-medium">
                      No volunteers found
                    </p>

                    <p className="text-sm mt-1">
                      Try adjusting your search or filters.
                    </p>

                  </td>

                </tr>

              ) : (

                volunteers.map((volunteer, index) => (

                  <tr
                    key={volunteer.id}
                    className={`
                      border-b
                      transition
                      hover:bg-[#F8F4EF]

                      ${
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50/50"
                      }
                    `}
                  >

                    {/* Volunteer */}

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-4">

                        <div className="h-10 w-10 rounded-full bg-[#6B8F71]/15 text-[#6B8F71] flex items-center justify-center font-semibold">

                          {volunteer.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)}

                        </div>

                        <span className="font-medium">
                          {volunteer.name}
                        </span>

                      </div>

                    </td>

                    {/* Email */}

                    <td className="text-gray-600">
                      {volunteer.email}
                    </td>

                    {/* Skill */}

                    <td>
                      {volunteer.skill}
                    </td>

                    {/* Hours */}

                    <td>
                      {volunteer.hours} hrs
                    </td>

                    {/* Status */}

                    <td>
                      <StatusBadge
                        status={volunteer.status}
                      />
                    </td>

                    {/* Actions */}

                    <td>

                      <div className="flex justify-center gap-2">

                        <button
                          onClick={() =>
                            handleView(volunteer)
                          }
                          className="h-9 w-9 rounded-full hover:bg-[#FAF1EB] transition flex items-center justify-center"
                        >

                          <Eye
                            size={18}
                            className="text-[#6B8F71]"
                          />

                        </button>

                        <button
                          onClick={() =>
                            handleEdit(volunteer)
                          }
                          className="h-9 w-9 rounded-full hover:bg-[#FAF1EB] transition flex items-center justify-center"
                        >

                          <Pencil
                            size={18}
                            className="text-[#D08C60]"
                          />

                        </button>

                        <button
                          onClick={() =>
                            handleDelete(volunteer)
                          }
                          className="h-9 w-9 rounded-full hover:bg-red-100 transition flex items-center justify-center"
                        >

                          <Trash2
                            size={18}
                            className="text-red-600"
                          />

                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

      <VolunteerDialog
        volunteer={selectedVolunteer}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />

      <EditVolunteerDialog
        volunteer={editingVolunteer}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSave={handleSave}
      />

      <DeleteConfirmationDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onDelete={confirmDelete}
        itemName={deleteVolunteer?.name}
        itemType="Volunteer"
      />
    </>
  );
}