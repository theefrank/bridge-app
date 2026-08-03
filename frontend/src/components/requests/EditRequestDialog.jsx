import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";

import { Input } from  "../ui/input";

import { Label } from "../ui/label";

import { Textarea } from "../ui/textarea";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../ui/select";

import { Button } from "../ui/button";

import api from "../../services/api";

export default function EditRequestDialog({
  request,
  open,
  onOpenChange,
  onUpdated,
}) {

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    user: "",
    description: "",
    location: "",
  });

  useEffect(() => {

    if (request) {

      setFormData({
        title: request.title || "",
        category: request.category || "",
        user: request.user || "",
        description: request.description || "",
        location: request.location || "",
      });

    }

  }, [request]);

  async function handleSubmit(e) {
  e.preventDefault();

  try {
    await api.put(`/requests/${request.id}`, {
      title: formData.title,
      description: formData.description,
      location: formData.location,
    });

    await onUpdated();
    onOpenChange(false);

  } catch (error) {
    console.error(error.response?.data);
    console.error(error);

    alert(
      error.response?.data?.error ||
      "Could not update request."
    );
  }
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
            <Label>Location</Label>

            <Input
                value={formData.location}
                onChange={(e) =>
                setFormData({
                    ...formData,
                    location: e.target.value,
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