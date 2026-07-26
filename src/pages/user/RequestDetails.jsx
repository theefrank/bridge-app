import { useParams } from "react-router-dom";

export default function RequestDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#FAF7F2] p-8">
      <div className="max-w-3xl mx-auto bridge-card">
        <h1 className="text-3xl font-bold mb-4">
          Request Details
        </h1>

        <p className="mb-2">
          <strong>ID:</strong> {id}
        </p>

        <p className="mb-2">
          <strong>Title:</strong> Need Coding Mentor
        </p>

        <p className="mb-2">
          <strong>Category:</strong> Technology
        </p>

        <p className="mb-2">
          <strong>Status:</strong> Open
        </p>

        <p className="mt-4 text-gray-600">
          Looking for someone who can help
          me improve my React skills.
        </p>
      </div>
    </div>
  );
}