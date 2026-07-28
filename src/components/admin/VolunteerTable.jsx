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

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

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

  function handleSave(updatedVolunteer) {
    setVolunteers((prev) =>
      prev.map((volunteer) =>
        volunteer.id === updatedVolunteer.id
          ? updatedVolunteer
          : volunteer
      )
    );
  }

  function handleDelete(volunteer) {
    setDeleteVolunteer(volunteer);
    setDeleteOpen(true);
  }

  function confirmDelete() {
    setVolunteers((prev) =>
      prev.filter(
        (volunteer) =>
          volunteer.id !== deleteVolunteer.id
      )
    );

    setDeleteOpen(false);
    setDeleteVolunteer(null);
  }

  function updateStatus(id, status) {
    setVolunteers((prev) =>
      prev.map((volunteer) =>
        volunteer.id === id
          ? {
              ...volunteer,
              status,
            }
          : volunteer
      )
    );
  }

  return (
    <TooltipProvider>
      <>
        <div className="bridge-card overflow-hidden">

          <div className="overflow-x-auto max-h-150">

            <table className="w-full">

              <thead className="sticky top-0 bg-white border-b z-10">

                <tr>

                  <th className="w-[25%] text-left py-4 px-6">
                    Volunteer
                  </th>

                  <th className="w-[25%] text-left">
                    Email
                  </th>

                  <th className="w-[15%] text-left">
                    Skill
                  </th>

                  <th className="w-[10%] text-left">
                    Hours
                  </th>

                  <th className="w-[15%] text-left">
                    Status
                  </th>

                  <th className="w-[20%] text-center">
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

                      <h3 className="text-lg font-semibold">
                        No volunteers found
                      </h3>

                      <p className="text-sm mt-2">
                        Try another search or filter.
                      </p>

                    </td>

                  </tr>

                ) : (

                  volunteers.map((volunteer, index) => (

                    <tr
                      key={volunteer.id}
                      className={`
                        border-b transition hover:bg-[#F8F4EF]

                        ${
                          index % 2 === 0
                            ? "bg-white"
                            : "bg-gray-50/50"
                        }
                      `}
                    >

                      <td className="px-6 py-5">

                        <div>

                          <p className="font-semibold">
                            {volunteer.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            Volunteer #{volunteer.id}
                          </p>

                        </div>

                      </td>

                      <td>
                        {volunteer.email}
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
                          onStatusChange={(status) =>
                            updateStatus(
                              volunteer.id,
                              status
                            )
                          }
                        />

                      </td>

                      <td>

                        <div className="flex justify-center gap-2">

                          <Tooltip>

                            <TooltipTrigger asChild>

                              <button
                                onClick={() =>
                                  handleView(
                                    volunteer
                                  )
                                }
                                className="h-9 w-9 rounded-full hover:bg-[#FAF1EB] transition flex items-center justify-center"
                              >

                                <Eye
                                  size={18}
                                  className="text-[#6B8F71]"
                                />

                              </button>

                            </TooltipTrigger>

                            <TooltipContent>
                              View Volunteer
                            </TooltipContent>

                          </Tooltip>

                          <Tooltip>

                            <TooltipTrigger asChild>

                              <button
                                onClick={() =>
                                  handleEdit(
                                    volunteer
                                  )
                                }
                                className="h-9 w-9 rounded-full hover:bg-[#FAF1EB] transition flex items-center justify-center"
                              >

                                <Pencil
                                  size={18}
                                  className="text-[#D08C60]"
                                />

                              </button>

                            </TooltipTrigger>

                            <TooltipContent>
                              Edit Volunteer
                            </TooltipContent>

                          </Tooltip>

                          <Tooltip>

                            <TooltipTrigger asChild>

                              <button
                                onClick={() =>
                                  handleDelete(
                                    volunteer
                                  )
                                }
                                className="h-9 w-9 rounded-full hover:bg-red-100 transition flex items-center justify-center"
                              >

                                <Trash2
                                  size={18}
                                  className="text-red-600"
                                />

                              </button>

                            </TooltipTrigger>

                            <TooltipContent>
                              Delete Volunteer
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
    </TooltipProvider>
  );
}