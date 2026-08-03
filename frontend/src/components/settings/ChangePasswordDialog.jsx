import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { toast } from "sonner";

import api from "../../services/api";

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

export default function ChangePasswordDialog({
  open,
  onOpenChange,
}) {
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  function clearForm() {
    setFormData({
      current_password: "",
      new_password: "",
      confirm_password: "",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.new_password !== formData.confirm_password
    ) {
      toast.error("Passwords do not match.");
      return;
    }

    if (formData.new_password.length < 8) {
      toast.error(
        "Password must be at least 8 characters."
      );
      return;
    }

    try {
      setLoading(true);

      await api.put("/change-password", {
        current_password: formData.current_password,
        new_password: formData.new_password,
      });

      toast.success("Password updated successfully.");

      clearForm();
      onOpenChange(false);

    } catch (error) {
      toast.error(
        error.response?.data?.error ||
          "Could not update password."
      );
    } finally {
      setLoading(false);
    }
  }

  function PasswordInput({
    label,
    value,
    field,
    show,
    setShow,
  }) {
    return (
      <div className="space-y-2">
        <Label>{label}</Label>

        <div className="relative">
          <Input
            type={show ? "text" : "password"}
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [field]: e.target.value,
              })
            }
          />

          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value) clearForm();
        onOpenChange(value);
      }}
    >
      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle className="flex items-center gap-2">
            <Lock size={22} />
            Change Password
          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <PasswordInput
            label="Current Password"
            value={formData.current_password}
            field="current_password"
            show={showCurrent}
            setShow={setShowCurrent}
          />

          <PasswordInput
            label="New Password"
            value={formData.new_password}
            field="new_password"
            show={showNew}
            setShow={setShowNew}
          />

          <PasswordInput
            label="Confirm Password"
            value={formData.confirm_password}
            field="confirm_password"
            show={showConfirm}
            setShow={setShowConfirm}
          />

          <DialogFooter>

            <Button
              variant="outline"
              type="button"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Updating..."
                : "Update Password"}
            </Button>

          </DialogFooter>

        </form>

      </DialogContent>
    </Dialog>
  );
}