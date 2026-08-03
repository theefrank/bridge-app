import {
  Mail,
  MapPin,
  User,
  Pencil,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import SkillBadge from "./SkillBadge";

export default function ProfileCard() {
  const { user } = useAuth();

  const displayName = user?.full_name || user?.username || "Community Member";
  const location = user?.location || "Add your location";
  const bio = user?.bio || "Share a short bio so others can learn more about you.";
  const skills = user?.skills?.length ? user?.skills : ["Add your first skill"];
  const completion = Math.round(
    [user?.full_name, user?.location, user?.bio, user?.skills?.length].filter(Boolean).length / 4 * 100
  );

  const completionChecklist = [
    {
      label: "Full name",
      done: Boolean(user?.full_name || user?.username),
      hint: "Add your name so people know who you are.",
    },
    {
      label: "Location",
      done: Boolean(user?.location),
      hint: "Share the area you’re based in.",
    },
    {
      label: "Bio",
      done: Boolean(user?.bio),
      hint: "Write a short introduction about yourself.",
    },
    {
      label: "Skills",
      done: Boolean(user?.skills?.length),
      hint: "Mention the skills you can contribute.",
    },
  ];

  const initials = displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="bridge-card">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center">
          <div className="w-36 h-36 rounded-full bg-[#6B8F71] text-white flex items-center justify-center text-5xl font-bold shadow-lg">
            {initials}
          </div>

          <Link
            to="/profile/edit"
            className="mt-5 btn-primary flex items-center gap-2"
          >
            <Pencil size={18} />
            Edit Profile
          </Link>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">{displayName}</h2>
              <p className="text-sm text-[#D08C60] mt-1">{user?.role === "admin" ? "Admin" : "Community Member"}</p>
            </div>
            <div className="rounded-full bg-[#FFF8F2] px-4 py-2 text-sm text-[#D08C60] font-medium inline-flex items-center gap-2">
              <Sparkles size={16} />
              Profile is {completion}% complete
            </div>
          </div>

          <div className="mt-4 h-2 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full rounded-full bg-[#6B8F71] transition-all" style={{ width: `${completion}%` }} />
          </div>

          <p className="text-sm text-gray-600 mt-2">
            {completion < 100
              ? "Complete the checklist below to improve your profile and make it easier for others to connect with you."
              : "Your profile looks complete. Great work!"}
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {completionChecklist.map((item) => (
              <div
                key={item.label}
                className={`rounded-xl border p-3 text-sm ${
                  item.done
                    ? "border-[#6B8F71]/20 bg-[#F3F8F2] text-[#44614B]"
                    : "border-gray-200 bg-white text-gray-600"
                }`}
              >
                <div className="flex items-center gap-2 font-medium">
                  <span>{item.done ? "✓" : "•"}</span>
                  {item.label}
                </div>
                <p className="text-xs mt-1">{item.done ? "Completed" : item.hint}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-3 text-gray-600">
            <div className="flex items-center gap-3">
              <Mail size={18} />
              {user?.email || "No email yet"}
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              {location}
            </div>

            <div className="flex items-center gap-3">
              <User size={18} />
              {user?.role === "admin" ? "Admin" : "Community Member"}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">About</h3>
            <p className="text-gray-600 leading-7">{bio}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}