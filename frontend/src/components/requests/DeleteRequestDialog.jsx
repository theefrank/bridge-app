import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function DeleteRequestDialog({
  open,
  onOpenChange,
  request,
  onDelete,
}) {
  if (!request) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl">

        <DialogHeader>

          <DialogTitle className="text-2xl font-bold text-red-600">
            Delete Request
          </DialogTitle>

        </DialogHeader>

        <div className="space-y-6">

          <p className="text-gray-600">
            Are you sure you want to permanently delete
          </p>

          <div className="rounded-xl bg-red-50 border border-red-200 p-4">

            <h3 className="font-semibold">
              {request.title}
            </h3>

          </div>

          <p className="text-sm text-gray-500">
            This action cannot be undone.
          </p>

          <div className="flex justify-end gap-3">

            <button
              onClick={() => onOpenChange(false)}
              className="btn-outline"
            >
              Cancel
            </button>

            <button
              onClick={onDelete}
              className="px-5 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700"
            >
              Delete
            </button>

          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}