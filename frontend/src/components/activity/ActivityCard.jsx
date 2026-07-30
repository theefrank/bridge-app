import {
  CalendarDays,
  Clock3,
} from "lucide-react";

export default function ActivityCard({
  title,
  description,
  date,
  time,
  icon,
}) {
  return (
    <div className="bridge-card hover:shadow-xl transition-all duration-300 border-l-4 border-[#6B8F71]">
      <div className="flex items-start gap-4">

        <div className="w-12 h-12 rounded-full bg-[#6B8F71]/10 text-[#6B8F71] flex items-center justify-center">
          {icon}
        </div>

        <div className="flex-1">

          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="text-gray-600 mt-2">
            {description}
          </p>

          <div className="flex gap-6 mt-4 text-sm text-gray-500">

            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              {date}
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              {time}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}