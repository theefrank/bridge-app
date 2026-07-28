import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import { Button } from "../ui/button";

import { Input } from "../ui/input";

export default function EditUserDialog({
  open,
  onOpenChange,
  user,
  onSave,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
      });
    }
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      ...user,
      ...formData,
    });

    onOpenChange(false);
  }

  if (!user) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle>

            Edit User

          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 mt-4"
        >

          <div>

            <label className="text-sm font-medium">

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

          <div>

            <label className="text-sm font-medium">

              Email

            </label>

            <Input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />

          </div>

          <div className="flex justify-end gap-3">

            <Button
              type="button"
              variant="outline"
              onClick={() =>
                onOpenChange(false)
              }
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="bg-[#6B8F71] hover:bg-[#5A7A60]"
            >
              Save Changes
            </Button>

          </div>

        </form>

      </DialogContent>
    </Dialog>
  );
}