import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../ui/dialog";

import { Input } from "../../ui/input";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../ui/select";

export default function EditVolunteerDialog({
  volunteer,
  open,
  onOpenChange,
  onSave,
}) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    skill: "",
    hours: "",
    status: "",
  });

  useEffect(() => {
    if (volunteer) {
      setFormData(volunteer);
    }
  }, [volunteer]);

  function handleSave() {
    onSave({
      ...formData,
      hours: Number(formData.hours),
    });

    onOpenChange(false);
  }

  if (!volunteer) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg rounded-2xl">

        <DialogHeader>

          <DialogTitle className="text-2xl">
            Edit Volunteer
          </DialogTitle>

          <p className="text-sm text-gray-500">
            Update volunteer information.
          </p>

        </DialogHeader>

        <div className="space-y-5 py-4">

          {/* Name */}

          <div>

            <label className="block mb-2 text-sm font-medium">
              Name
            </label>

            <Input
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />

          </div>

          {/* Email */}

          <div>

            <label className="block mb-2 text-sm font-medium">
              Email
            </label>

            <Input
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

          </div>

          {/* Skill */}

          <div>

            <label className="block mb-2 text-sm font-medium">
              Skill
            </label>

            <Select
              value={formData.skill}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  skill: value,
                })
              }
            >

              <SelectTrigger>

                <SelectValue />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="Education">
                  Education
                </SelectItem>

                <SelectItem value="Technology">
                  Technology
                </SelectItem>

                <SelectItem value="Career">
                  Career
                </SelectItem>

                <SelectItem value="Community">
                  Community
                </SelectItem>

                <SelectItem value="Wellness">
                  Wellness
                </SelectItem>

              </SelectContent>

            </Select>

          </div>

          {/* Hours */}

          <div>

            <label className="block mb-2 text-sm font-medium">
              Volunteer Hours
            </label>

            <Input
              type="number"
              min={0}
              value={formData.hours}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  hours: e.target.value,
                })
              }
            />

          </div>

          {/* Status */}

          <div>

            <label className="block mb-2 text-sm font-medium">
              Status
            </label>

            <Select
              value={formData.status}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  status: value,
                })
              }
            >

              <SelectTrigger>

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

          </div>

        </div>

        <DialogFooter className="border-t pt-4">

          <button
            onClick={() => onOpenChange(false)}
            className="px-5 py-2 rounded-lg border hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-lg bg-[#D08C60] text-white hover:bg-[#b9774e] transition"
          >
            Save Changes
          </button>

        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}