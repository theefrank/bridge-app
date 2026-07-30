import { ClipboardList } from "lucide-react";

export default function EmptyActivity() {
  return (
    <div className="bridge-card text-center py-16">

      <ClipboardList
        size={60}
        className="mx-auto text-[#D08C60]"
      />

      <h2 className="text-2xl font-semibold mt-6">
        No Activity Yet
      </h2>

      <p className="text-gray-600 mt-3">
        Once you begin requesting help or volunteering,
        your activity history will appear here.
      </p>

    </div>
  );
}