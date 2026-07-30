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

export default function EditUserDialog({
  user,
  open,
  onOpenChange,
  onSave,
}) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
    status: "",
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  function handleSave() {
    onSave(formData);
    onOpenChange(false);
  }

  if (!user) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg rounded-2xl">

        <DialogHeader>

          <DialogTitle className="text-2xl">
            Edit User
          </DialogTitle>

          <p className="text-gray-500 text-sm">
            Update this user's information.
          </p>

        </DialogHeader>

        <div className="space-y-5 py-4">

          {/* Name */}

          <div>

            <label className="text-sm font-medium mb-2 block">
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

            <label className="text-sm font-medium mb-2 block">
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

          {/* Role */}

          <div>

            <label className="text-sm font-medium mb-2 block">
              Role
            </label>

            <Select
              value={formData.role}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  role: value,
                })
              }
            >

              <SelectTrigger className="w-full">

                <SelectValue />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="user">
                  User
                </SelectItem>

                <SelectItem value="volunteer">
                  Volunteer
                </SelectItem>

                <SelectItem value="admin">
                  Admin
                </SelectItem>

              </SelectContent>

            </Select>

          </div>

          {/* Status */}

          <div>

            <label className="text-sm font-medium mb-2 block">
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

              <SelectTrigger className="w-full">

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