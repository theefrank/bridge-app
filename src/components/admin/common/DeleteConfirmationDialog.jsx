import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../ui/dialog";

import { Button } from "../../ui/button";

export default function DeleteConfirmationDialog({
  open,
  onOpenChange,
  onDelete,
  itemName,
  itemType,
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md">

        <DialogHeader>

          <DialogTitle className="text-red-600">
            Delete {itemType}
          </DialogTitle>

          <DialogDescription>
            Are you sure you want to delete{" "}
            <span className="font-semibold">
              "{itemName}"
            </span>
            ? This action cannot be undone.
          </DialogDescription>

        </DialogHeader>

        <DialogFooter>

          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={onDelete}
          >
            Delete
          </Button>

        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
}