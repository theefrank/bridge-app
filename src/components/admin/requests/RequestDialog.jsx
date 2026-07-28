import {
  ClipboardList,
  User,
  Tag,
  FileText,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";

import StatusBadge from "../common/StatusBadge";

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
      <DialogContent className="sm:max-w-2xl rounded-2xl">

        <DialogHeader>

          <DialogTitle className="text-2xl font-bold">
            Request Details
          </DialogTitle>

          <p className="text-gray-500 text-sm">
            View complete information about this request.
          </p>

        </DialogHeader>

        <div className="space-y-6 mt-4">

          {/* Request Title */}

          <div className="rounded-xl bg-[#FAF7F2] p-5">

            <div className="flex items-center gap-3 mb-3">

              <ClipboardList
                size={20}
                className="text-[#6B8F71]"
              />

              <span className="text-sm text-gray-500">
                Request Title
              </span>

            </div>

            <h2 className="text-xl font-semibold">
              {request.title}
            </h2>

          </div>

          {/* Information */}

          <div className="grid grid-cols-2 gap-5">

            {/* Category */}

            <div className="rounded-xl border p-4">

              <div className="flex items-center gap-2 mb-2">

                <Tag
                  size={18}
                  className="text-[#D08C60]"
                />

                <span className="text-sm text-gray-500">
                  Category
                </span>

              </div>

              <p className="font-medium">
                {request.category}
              </p>

            </div>

            {/* Requested By */}

            <div className="rounded-xl border p-4">

              <div className="flex items-center gap-2 mb-2">

                <User
                  size={18}
                  className="text-[#6B8F71]"
                />

                <span className="text-sm text-gray-500">
                  Requested By
                </span>

              </div>

              <p className="font-medium">
                {request.user}
              </p>

            </div>

          </div>

          {/* Status */}

          <div className="rounded-xl border p-5">

            <p className="text-sm text-gray-500 mb-3">
              Current Status
            </p>

            <StatusBadge
              status={request.status}
            />

          </div>

          {/* Description */}

          <div className="rounded-xl border p-5">

            <div className="flex items-center gap-2 mb-3">

              <FileText
                size={18}
                className="text-[#D08C60]"
              />

              <span className="text-sm text-gray-500">
                Description
              </span>

            </div>

            <p className="leading-7 text-gray-700">
              {request.description ||
                "No description provided."}
            </p>

          </div>

        </div>

      </DialogContent>

    </Dialog>
  );
}