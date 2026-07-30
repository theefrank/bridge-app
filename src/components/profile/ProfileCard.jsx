import {
  Mail,
  MapPin,
  User,
  Pencil,
} from "lucide-react";
import { Link } from "react-router-dom";
import SkillBadge from "./SkillBadge";

export default function ProfileCard() {
  const user = {
    name: "Penzi Mbuthia",
    email: "penzi@gmail.com",
    location: "Nairobi, Kenya",
    bio: "Passionate about using technology to connect communities and create meaningful social impact.",
    skills: [
      "React",
      "Flask",
      "Python",
      "SQL",
      "Community Service",
    ],
  };

  return (
    <div className="bridge-card">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Avatar */}

        <div className="flex flex-col items-center">
          <div className="w-36 h-36 rounded-full bg-[#6B8F71] text-white flex items-center justify-center text-5xl font-bold shadow-lg">
            PM
          </div>

          <Link
            to="/profile/edit"
            className="mt-5 btn-primary flex items-center gap-2"
          >
            <Pencil size={18} />
            Edit Profile
          </Link>
        </div>

        {/* Information */}

        <div className="flex-1">
          <h2 className="text-3xl font-bold">
            {user.name}
          </h2>

          <div className="mt-5 space-y-3 text-gray-600">
            <div className="flex items-center gap-3">
              <Mail size={18} />
              {user.email}
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              {user.location}
            </div>

            <div className="flex items-center gap-3">
              <User size={18} />
              Community Member
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">
              About
            </h3>

            <p className="text-gray-600 leading-7">
              {user.bio}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {user.skills.map((skill) => (
                <SkillBadge
                  key={skill}
                  skill={skill}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}