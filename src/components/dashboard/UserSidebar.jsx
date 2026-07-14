import {
  LayoutDashboard,
  FileText,
  Activity,
  User,
  Settings,
  LogOut,
  HeartHandshake,
  HandHeart,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function UserSidebar() {
  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col justify-between min-h-screen">

      <div>
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <HeartHandshake
              size={32}
              className="text-[#D08C60]"
            />

            <h1 className="text-2xl font-bold text-sage">
              Bridge
            </h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-sage text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/requests"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-sage text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <FileText size={20} />
            Requests
          </NavLink>

        <NavLink
        to="/volunteer-dashboard"
        className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
            isActive
                ? "bg-sage text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`
        }
        >
        <HandHeart size={20} />
        Volunteer Dashboard
        </NavLink>        
          <NavLink
            to="/activity"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-sage text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <Activity size={20} />
            My Activity
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-sage text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <User size={20} />
            Profile
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-sage text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <Settings size={20} />
            Settings
          </NavLink>

        </nav>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-100">
        <button
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition"
        >
          <LogOut size={20} />
          Log Out
        </button>
      </div>

    </aside>
  );
}