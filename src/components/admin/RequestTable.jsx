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

import RequestDialog from "./RequestDialog";
import EditRequestDialog from "./EditRequestDialog";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

export default function RequestTable({
  requests,
  setRequests,
}) {

  const [selectedRequest, setSelectedRequest] =
    useState(null);

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [editingRequest, setEditingRequest] =
    useState(null);

  const [editDialogOpen, setEditDialogOpen] =
    useState(false);

  const [deleteDialogOpen, setDeleteDialogOpen] =
    useState(false);

  const [requestToDelete, setRequestToDelete] =
    useState(null);

  function handleView(request) {
    setSelectedRequest(request);
    setDialogOpen(true);
  }

  function handleEdit(request) {
    setEditingRequest(request);
    setEditDialogOpen(true);
  }

  function handleSave(updatedRequest) {

    setRequests((previous) =>
      previous.map((request) =>
        request.id === updatedRequest.id
          ? updatedRequest
          : request
      )
    );

  }

  function handleDelete(request) {

    setRequestToDelete(request);

    setDeleteDialogOpen(true);

  }

  function confirmDelete() {

    setRequests((previous) =>
      previous.filter(
        (request) =>
          request.id !== requestToDelete.id
      )
    );

    setDeleteDialogOpen(false);

    setRequestToDelete(null);

  }

  function handleStatusChange(
    requestId,
    newStatus
  ) {

    setRequests((previous) =>
      previous.map((request) =>
        request.id === requestId
          ? {
              ...request,
              status: newStatus,
            }
          : request
      )
    );

  }

  return (
    <>

      {requests.length === 0 ? (

        <div className="bridge-card text-center py-20">

          <h2 className="text-2xl font-semibold">
            No requests found
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
                  className="border-b"
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

                    <Select
                      value={request.status}
                      onValueChange={(value) =>
                        handleStatusChange(
                          request.id,
                          value
                        )
                      }
                    >

                      <SelectTrigger
                        className={`w-36 h-9 border-0 shadow-none

                        ${
                          request.status === "Approved"
                            ? "bg-green-100 text-green-700"

                          : request.status === "Pending"
                            ? "bg-[#FAF1EB] text-[#D08C60]"

                            : "bg-red-100 text-red-700"
                        }
                        `}
                      >

                        <SelectValue />

                      </SelectTrigger>

                      <SelectContent>

                        <SelectItem value="Pending">
                          Pending
                        </SelectItem>

                        <SelectItem value="Approved">
                          Approved
                        </SelectItem>

                        <SelectItem value="Rejected">
                          Rejected
                        </SelectItem>

                      </SelectContent>

                    </Select>

                  </td>

                  <td>

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() =>
                          handleView(request)
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
                          handleEdit(request)
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
                          handleDelete(request)
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

              ))}

            </tbody>

          </table>

        </div>

      )}

      <RequestDialog
        request={selectedRequest}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />

      <EditRequestDialog
        request={editingRequest}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        onSave={handleSave}
      />

      <DeleteConfirmationDialog
        user={requestToDelete}
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onDelete={confirmDelete}
      />

    </>
  );
}