import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";

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

          <DialogTitle>

            User Details

          </DialogTitle>

        </DialogHeader>

        <div className="space-y-6 mt-4">

          <div>

            <p className="text-sm text-gray-500">
              Full Name
            </p>

            <h3 className="text-lg font-semibold">

              {user.name}

            </h3>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Email
            </p>

            <p>

              {user.email}

            </p>

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

            <StatusBadge
              status={user.status}
            />

          </div>

        </div>

      </DialogContent>

    </Dialog>

  );

}