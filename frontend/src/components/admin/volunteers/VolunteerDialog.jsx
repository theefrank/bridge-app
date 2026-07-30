import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";

import StatusBadge from "../common/StatusBadge";

export default function VolunteerDialog({
  volunteer,
  open,
  onOpenChange,
}) {
  if (!volunteer) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle className="text-2xl">
            Volunteer Details
          </DialogTitle>

        </DialogHeader>

        <div className="space-y-5">

          <div>

            <p className="text-sm text-gray-500">
              Name
            </p>

            <p className="font-semibold">
              {volunteer.name}
            </p>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Email
            </p>

            <p>
              {volunteer.email}
            </p>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Skill
            </p>

            <p>
              {volunteer.skill}
            </p>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Volunteer Hours
            </p>

            <p>
              {volunteer.hours} hrs
            </p>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Status
            </p>

            <StatusBadge
              status={volunteer.status}
            />

          </div>

        </div>

      </DialogContent>

    </Dialog>
  );
}