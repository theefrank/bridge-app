import Modal from "../common/Modal";

export default function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Request"
    >
      <p className="text-gray-600">
        Are you sure you want to delete this request?
        This action cannot be undone.
      </p>

      <div className="flex justify-end gap-4 mt-8">

        <button
          onClick={onClose}
          className="px-5 py-2 rounded-lg border"
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          className="px-5 py-2 rounded-lg bg-red-600 text-white"
        >
          Delete
        </button>

      </div>
    </Modal>
  );
}