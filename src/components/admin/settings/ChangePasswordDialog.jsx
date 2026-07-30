import { useState } from "react";

import {
  Eye,
  EyeOff,
  CheckCircle2,
  Circle,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../ui/dialog";

import { toast } from "sonner";

export default function ChangePasswordDialog({
  open,
  onOpenChange,
}) {
  const [
    currentPassword,
    setCurrentPassword,
  ] = useState("");

  const [
    newPassword,
    setNewPassword,
  ] = useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [showCurrent, setShowCurrent] =
  useState(false);

  const [showNew, setShowNew] =
  useState(false);

  const [showConfirm, setShowConfirm] =
  useState(false);

  const passwordChecks = {
  length: newPassword.length >= 8,
  uppercase: /[A-Z]/.test(newPassword),
  lowercase: /[a-z]/.test(newPassword),
  number: /\d/.test(newPassword),
  special: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
  };

  const passwordValid =
  Object.values(passwordChecks).every(Boolean);

  function PasswordRequirement({
  met,
  text,
    }) {
    return (
        <div
        className={`flex items-center gap-2 ${
            met
            ? "text-[#6B8F71]"
            : "text-gray-400"
        }`}
        >
        {met ? (
            <CheckCircle2 size={16} />
        ) : (
            <Circle size={16} />
        )}

        <span>{text}</span>

        </div>
    );
    }

  function handleSubmit(e) {
    e.preventDefault();

    if (!passwordValid) {
    toast.error(
    "Your password does not meet all the requirements."
    );
    return;
    }

    if (newPassword !== confirmPassword) {
      toast.error(
        "Passwords do not match."
      );
      return;
    }

    toast.success(
      "Password updated successfully."
    );

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    onOpenChange(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md rounded-2xl">

        <DialogHeader>

          <DialogTitle>
            Change Password
          </DialogTitle>

          <DialogDescription>
            Update your administrator password.
          </DialogDescription>

        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 mt-5"
        >
            <div>

            <label className="block font-medium mb-2">
                Current Password
            </label>

            <div className="relative">

                <input
                type={showCurrent ? "text" : "password"}
                value={currentPassword}
                onChange={(e) =>
                    setCurrentPassword(e.target.value)
                }
                className="bridge-input pr-12"
                required
                />

                <button
                type="button"
                onClick={() =>
                    setShowCurrent(!showCurrent)
                }
                className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                "
                >
                {showCurrent ? (
                    <EyeOff size={18} />
                ) : (
                    <Eye size={18} />
                )}
                </button>

            </div>

            </div>

        <div>

        <label className="block font-medium mb-2">
            New Password
        </label>

        <div className="relative">

            <input
            type={showNew ? "text" : "password"}
            value={newPassword}
            onChange={(e) =>
                setNewPassword(e.target.value)
            }
            className="bridge-input pr-12"
            required
            />

            <button
            type="button"
            onClick={() =>
                setShowNew(!showNew)
            }
            className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-gray-500
            "
            >
            {showNew ? (
                <EyeOff size={18} />
            ) : (
                <Eye size={18} />
            )}
            </button>

        </div>

        </div>

        <div className="mt-3 space-y-1 text-sm">

        <PasswordRequirement
            met={passwordChecks.length}
            text="At least 8 characters"
        />

        <PasswordRequirement
            met={passwordChecks.uppercase}
            text="One uppercase letter"
        />

        <PasswordRequirement
            met={passwordChecks.lowercase}
            text="One lowercase letter"
        />

        <PasswordRequirement
            met={passwordChecks.number}
            text="One number"
        />

        <PasswordRequirement
            met={passwordChecks.special}
            text="One special character"
        />

        </div>

        <div>

        <label className="block font-medium mb-2">
            Confirm Password
        </label>

        <div className="relative">

            <input
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) =>
                setConfirmPassword(e.target.value)
            }
            className="bridge-input pr-12"
            required
            />

            <button
            type="button"
            onClick={() =>
                setShowConfirm(!showConfirm)
            }
            className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-gray-500
            "
            >
            {showConfirm ? (
                <EyeOff size={18} />
            ) : (
                <Eye size={18} />
            )}
            </button>

        </div>

        {confirmPassword.length > 0 && (
        <p
            className={`mt-2 text-sm ${
            confirmPassword === newPassword
                ? "text-[#6B8F71]"
                : "text-red-500"
            }`}
        >
            {confirmPassword === newPassword
            ? "✓ Passwords match"
            : "✗ Passwords do not match"}
        </p>
        )}        

        </div>
          
          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={() =>
                onOpenChange(false)
              }
              className="btn-secondary"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn-primary"
            >
              Update Password
            </button>

          </div>

        </form>

      </DialogContent>
    </Dialog>
  );
}