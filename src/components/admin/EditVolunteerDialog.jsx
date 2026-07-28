import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

export default function EditVolunteerDialog({
  volunteer,
  open,
  onOpenChange,
  onSave,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skill: "",
    hours: 0,
    status: "Pending",
  });

  useEffect(() => {
    if (volunteer) {
      setFormData({
        name: volunteer.name || "",
        email: volunteer.email || "",
        skill: volunteer.skill || "",
        hours: volunteer.hours || 0,
        status: volunteer.status || "Pending",
      });
    }
  }, [volunteer]);

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      ...volunteer,
      ...formData,
      hours: Number(formData.hours),
    });

    onOpenChange(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle className="text-2xl">
            Edit Volunteer
          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div className="space-y-2">

            <Label>Name</Label>

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

          <div className="space-y-2">

            <Label>Email</Label>

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

          <div className="space-y-2">

            <Label>Skill</Label>

            <Input
              value={formData.skill}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  skill: e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2">

            <Label>Volunteer Hours</Label>

            <Input
              type="number"
              min="0"
              value={formData.hours}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  hours: e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2">

            <Label>Status</Label>

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

          <DialogFooter>

            <Button
              type="button"
              variant="outline"
              onClick={() =>
                onOpenChange(false)
              }
            >
              Cancel
            </Button>

            <Button type="submit">
              Save Changes
            </Button>

          </DialogFooter>

        </form>

      </DialogContent>

    </Dialog>
  );
}