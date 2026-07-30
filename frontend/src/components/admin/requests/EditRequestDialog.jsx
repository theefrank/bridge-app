import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../ui/dialog";

import { Input } from "../../ui/input";

import { Label } from "../../ui/label";

import { Textarea } from "../../ui/textarea";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../../ui/select";

import { Button } from "../../ui/button";

export default function EditRequestDialog({
  request,
  open,
  onOpenChange,
  onSave,
}) {

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    user: "",
    description: "",
    status: "Pending",
  });

  useEffect(() => {

    if (request) {

      setFormData({
        title: request.title || "",
        category: request.category || "",
        user: request.user || "",
        description: request.description || "",
        status: request.status || "Pending",
      });

    }

  }, [request]);

  function handleSubmit(e) {

    e.preventDefault();

    onSave({
      ...request,
      ...formData,
    });

    onOpenChange(false);

  }

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent className="sm:max-w-2xl">

        <DialogHeader>

          <DialogTitle className="text-2xl">

            Edit Request

          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div className="space-y-2">

            <Label>
              Request Title
            </Label>

            <Input
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2">

            <Label>
              Category
            </Label>

            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  category: value,
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

                <SelectItem value="Mentorship">
                  Mentorship
                </SelectItem>

              </SelectContent>

            </Select>

          </div>

          <div className="space-y-2">

            <Label>
              Requested By
            </Label>

            <Input
              value={formData.user}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  user: e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2">

            <Label>
              Description
            </Label>

            <Textarea
              rows={5}
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description:
                    e.target.value,
                })
              }
            />

          </div>

          <div className="space-y-2">

            <Label>
              Status
            </Label>

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

                <SelectItem value="Pending">
                  Pending
                </SelectItem>

                <SelectItem value="Approved">
                  Approved
                </SelectItem>

                <SelectItem value="Rejected">
                  Rejected
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

            <Button
              type="submit"
            >

              Save Changes

            </Button>

          </DialogFooter>

        </form>

      </DialogContent>

    </Dialog>

  );

}