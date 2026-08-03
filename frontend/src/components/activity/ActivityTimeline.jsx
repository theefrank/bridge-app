import { useEffect, useState } from "react";
import { HandHelping, FilePlus2 } from "lucide-react";

import ActivityCard from "./ActivityCard";
import EmptyActivity from "./EmptyActivity";
import api from "../../services/api";

export default function ActivityTimeline() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadActivities() {
      try {
        const response = await api.get("/activity");
        setActivities(response.data || []);
      } catch (error) {
        console.error("Failed to load activity", error);
        setActivities([]);
      } finally {
        setLoading(false);
      }
    }

    loadActivities();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading your activity...</p>;
  }

  if (activities.length === 0) {
    return <EmptyActivity />;
  }

  return (
    <div className="space-y-6">
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          title={activity.title}
          description={activity.description}
          date={activity.date}
          time={activity.time}
          icon={activity.type === "application" ? <HandHelping size={22} /> : <FilePlus2 size={22} />}
        />
      ))}
    </div>
  );
}