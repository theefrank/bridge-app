import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import StatusBadge from "./StatusBadge";

export default function UserDialog({
  user,
  open,
  onOpenChange,
}) {
  if (!user) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle className="text-2xl">

            User Details

          </DialogTitle>

        </DialogHeader>

        <div className="space-y-6">

          <div>

            <p className="text-sm text-gray-500">
              Full Name
            </p>

            <p className="font-semibold text-lg">
              {user.name}
            </p>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Email
            </p>

            <p>{user.email}</p>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Role
            </p>

            <p className="capitalize">
              {user.role}
            </p>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Status
            </p>

            <StatusBadge status={user.status} />

          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}