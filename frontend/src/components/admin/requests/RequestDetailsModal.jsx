import Modal from "../../common/Modal";
import StatusBadge from "../common/StatusBadge";

export default function RequestDetailsModal({
  request,
  isOpen,
  onClose,
}) {
  if (!request) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Request Details"
    >
      <div className="space-y-5">

        <div>
          <p className="text-sm text-gray-500">
            Title
          </p>

          <h3 className="text-xl font-semibold">
            {request.title}
          </h3>
        </div>

        <div>

          <p className="text-sm text-gray-500">
            Requested By
          </p>

          <p>{request.user}</p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Category
          </p>

          <p>{request.category}</p>

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Status
          </p>

          <StatusBadge
            status={request.status}
          />

        </div>

        <div>

          <p className="text-sm text-gray-500">
            Description
          </p>

          <p>
            {request.description ||
              "No description provided."}
          </p>

        </div>

      </div>
    </Modal>
  );
}