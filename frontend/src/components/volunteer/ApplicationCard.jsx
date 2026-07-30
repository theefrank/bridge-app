import {
  CalendarDays,
  MapPin,
} from "lucide-react";

import ApplicationStatusBadge from "./ApplicationStatusBadge";

export default function ApplicationCard({
  title,
  organization,
  location,
  appliedDate,
  status,
}) {
  return (
    <div className="bridge-card hover:shadow-lg transition-all">

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-xl font-semibold">
            {title}
          </h2>

          <p className="text-[#6B8F71] mt-1">
            {organization}
          </p>

        </div>

        <ApplicationStatusBadge
          status={status}
        />

      </div>

      <div className="flex flex-wrap gap-6 mt-5 text-gray-500">

        <div className="flex items-center gap-2">

          <MapPin size={18} />

          {location}

        </div>

        <div className="flex items-center gap-2">

          <CalendarDays size={18} />

          Applied {appliedDate}

        </div>

      </div>

    </div>
  );
}