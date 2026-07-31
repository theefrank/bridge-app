import { useState } from "react";

import {
  Eye,
  Pencil,
  CheckCircle2,
  XCircle,
  Trash2,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

import StatusBadge from "../common/StatusBadge";

import RequestDialog from "./RequestDialog";
import EditRequestDialog from "./EditRequestDialog";
import DeleteConfirmationDialog from "../common/DeleteConfirmationDialog";

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

  const [editOpen, setEditOpen] =
    useState(false);

  const [deleteRequest, setDeleteRequest] =
    useState(null);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  function handleView(request) {
    setSelectedRequest(request);
    setDialogOpen(true);
  }

  function handleEdit(request) {
    setEditingRequest(request);
    setEditOpen(true);
  }

  function handleSave(updatedRequest) {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === updatedRequest.id
          ? updatedRequest
          : request
      )
    );
  }

  function handleDelete(request) {
    setDeleteRequest(request);
    setDeleteOpen(true);
  }

  function confirmDelete() {
    setRequests((prev) =>
      prev.filter(
        (request) =>
          request.id !== deleteRequest.id
      )
    );

    setDeleteOpen(false);
  }

  function updateStatus(id, status) {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === id
          ? {
              ...request,
              status,
            }
          : request
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

                <th className="w-[32%] text-left py-4 px-6">
                  Request
                </th>

                <th className="w-[15%] text-left">
                  Category
                </th>

                <th className="w-[20%] text-left">
                  Requested By
                </th>

                <th className="w-[13%] text-left">
                  Status
                </th>

                <th className="w-[20%] text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {requests.length === 0 ? (

                <tr>

                  <td
                    colSpan="5"
                    className="py-14 text-center text-gray-500"
                  >

                    <h3 className="text-lg font-semibold">
                      No requests found
                    </h3>

                    <p className="text-sm mt-2">
                      Try another search or filter.
                    </p>

                  </td>

                </tr>

              ) : (

                requests.map((request, index) => (

                  <tr
                    key={request.id}
                    className={`
                      border-b transition hover:bg-[#F8F4EF]

                      ${
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50/50"
                      }
                    `}
                  >

                    {/* Request */}

                    <td className="px-6 py-5">

                      <div>

                        <p className="font-semibold">
                          {request.title}
                        </p>

                        <p className="text-sm text-gray-500">
                          Request #{request.id}
                        </p>

                      </div>

                    </td>

                    {/* Category */}

                    <td>

                      <span className="font-medium">
                        {request.category}
                      </span>

                    </td>

                    {/* User */}

                    <td>{request.user}</td>

                    {/* Status */}

                    <td>

                      <StatusBadge
                        status={request.status}
                      />

                    </td>

                    {/* Actions */}

                    <td>

                      <div className="flex justify-center gap-2">
                      <Tooltip>

                        <TooltipTrigger asChild>

                          <button
                            onClick={() => handleView(request)}
                            className="h-9 w-9 rounded-full hover:bg-[#FAF1EB] transition flex items-center justify-center"
                          >
                            <Eye
                              size={18}
                              className="text-[#6B8F71]"
                            />
                          </button>

                        </TooltipTrigger>

                        <TooltipContent>

                          <p>View Request</p>

                        </TooltipContent>

                      </Tooltip>

                        <Tooltip>

                          <TooltipTrigger asChild>

                            <button
                              onClick={() => handleEdit(request)}
                              className="h-9 w-9 rounded-full hover:bg-[#FAF1EB] transition flex items-center justify-center"
                            >
                              <Pencil
                                size={18}
                                className="text-[#D08C60]"
                              />
                            </button>

                          </TooltipTrigger>

                          <TooltipContent>

                            <p>Edit Request</p>

                          </TooltipContent>

                        </Tooltip>

                        <Tooltip>

                          <TooltipTrigger asChild>

                            <button
                              onClick={() =>
                                updateStatus(request.id, "Approved")
                              }
                              className="h-9 w-9 rounded-full hover:bg-green-100 transition flex items-center justify-center"
                            >
                              <CheckCircle2
                                size={18}
                                className="text-green-600"
                              />
                            </button>

                          </TooltipTrigger>

                          <TooltipContent>

                            <p>Approve Request</p>

                          </TooltipContent>

                        </Tooltip>

                        <Tooltip>

                          <TooltipTrigger asChild>

                            <button
                              onClick={() =>
                                updateStatus(request.id, "Rejected")
                              }
                              className="h-9 w-9 rounded-full hover:bg-red-100 transition flex items-center justify-center"
                            >
                              <XCircle
                                size={18}
                                className="text-red-600"
                              />
                            </button>

                          </TooltipTrigger>

                          <TooltipContent>

                            <p>Reject Request</p>

                          </TooltipContent>

                        </Tooltip>                        

                        <Tooltip>

                          <TooltipTrigger asChild>

                            <button
                              onClick={() =>
                                handleDelete(request)
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

                            <p>Delete Request</p>

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

      <RequestDialog
        request={selectedRequest}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />

      <EditRequestDialog
        request={editingRequest}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSave={handleSave}
      />

      <DeleteConfirmationDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        onDelete={confirmDelete}
        itemName={deleteRequest?.title}
        itemType="Request"
      />
    </>
    </TooltipProvider>
  );
}