import {
  LayoutDashboard,
  FileText,
  Activity,
  User,
  Settings,
  LogOut,
  HeartHandshake,
  HandHelping,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function UserSidebar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const navClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
      isActive
        ? "bg-[#6B8F71] text-white"
        : "text-gray-700 hover:bg-[#F3F6F4]"
    }`;

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-gray-200 flex flex-col justify-between z-40">

      {/* Top Section */}
      <div>

        {/* Logo */}
        <div className="px-6 py-7 border-b border-gray-100">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-[#FAF1EB] flex items-center justify-center">
              <HeartHandshake
                size={24}
                className="text-[#D08C60]"
              />
            </div>

            <div>

              <h1 className="text-2xl font-bold text-[#6B8F71]">
                Bridge
              </h1>

              <p className="text-xs text-gray-500">
                Community Platform
              </p>

            </div>

          </div>

        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 space-y-2">

          <NavLink
            to="/dashboard"
            className={navClass}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/my-requests"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-sage text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <FileText size={20} />
            My Requests
          </NavLink>

          <NavLink
            to="/volunteer-dashboard"
            className={navClass}
          >
            <HandHelping size={20} />
            Volunteer Dashboard
          </NavLink>

          <NavLink
            to="/my-activity"
            className={navClass}
          >
            <Activity size={20} />
            My Activity
          </NavLink>

          <NavLink
            to="/profile"
            className={navClass}
          >
            <User size={20} />
            Profile
          </NavLink>

          <NavLink
            to="/settings"
            className={navClass}
          >
            <Settings size={20} />
            Settings
          </NavLink>

        </nav>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 p-4">

        <div className="flex items-center gap-3 mb-4">

          <div className="w-11 h-11 rounded-full bg-[#6B8F71] text-white flex items-center justify-center font-semibold text-lg">
            {user?.username?.charAt(0).toUpperCase() || "U"}
          </div>

          <div className="min-w-0">

            <p className="font-semibold text-gray-900 truncate">
              {user?.username || "User"}
            </p>

            <p className="text-sm text-gray-500 truncate">
              {user?.email}
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-600 hover:bg-red-50"
        >
          <LogOut size={20} />
          Log Out
        </button>

      </div>

    </aside>
  );
}