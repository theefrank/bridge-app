import {
  HandHelping,
  UserPlus,
  FilePlus2,
  Pencil,
} from "lucide-react";

import ActivityCard from "./ActivityCard";
import EmptyActivity from "./EmptyActivity";

export default function ActivityTimeline() {

  const activities = [
    {
      id: 1,
      title: "Created a Request",
      description:
        "You created 'Need Mathematics Tutor'.",
      date: "22 July 2026",
      time: "9:20 AM",
      icon: <FilePlus2 size={22} />,
    },

    {
      id: 2,
      title: "Applied to Volunteer",
      description:
        "You volunteered for Community Cleanup.",
      date: "21 July 2026",
      time: "3:40 PM",
      icon: <HandHelping size={22} />,
    },

    {
      id: 3,
      title: "Updated Profile",
      description:
        "You updated your profile information.",
      date: "20 July 2026",
      time: "5:15 PM",
      icon: <Pencil size={22} />,
    },

    {
      id: 4,
      title: "Joined Bridge",
      description:
        "Welcome to Bridge!",
      date: "18 July 2026",
      time: "11:00 AM",
      icon: <UserPlus size={22} />,
    },
  ];

  if (activities.length === 0) {
    return <EmptyActivity />;
  }

  return (
    <div className="space-y-6">

      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          {...activity}
        />
      ))}

    </div>
  );
}