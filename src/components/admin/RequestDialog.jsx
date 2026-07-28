import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import StatusBadge from "./StatusBadge";

export default function RequestDialog({
  request,
  open,
  onOpenChange,
}) {
  if (!request) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle className="text-2xl">

            Request Details

          </DialogTitle>

        </DialogHeader>

        <div className="space-y-5">

          <div>

            <p className="text-sm text-gray-500">
              Title
            </p>

            <p className="font-semibold">
              {request.title}
            </p>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Category
            </p>

            <p>{request.category}</p>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Requested By
            </p>

            <p>{request.user}</p>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Status
            </p>

            <StatusBadge
              status={request.status}
            />

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Description
            </p>

            <p>
              {request.description ||
                "No description provided."}
            </p>

          </div>

        </div>

      </DialogContent>

    </Dialog>
  );
}