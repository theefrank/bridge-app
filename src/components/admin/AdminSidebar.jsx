import {
  LayoutDashboard,
  Users,
  ClipboardList,
  HandHeart,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin",
    },
    {
      name: "Manage Users",
      icon: <Users size={20} />,
      path: "/admin/users",
    },
    {
      name: "Manage Requests",
      icon: <ClipboardList size={20} />,
      path: "/admin/requests",
    },
    {
      name: "Manage Volunteers",
      icon: <HandHeart size={20} />,
      path: "/admin/volunteers",
    },
    {
      name: "Reports",
      icon: <BarChart3 size={20} />,
      path: "/admin/reports",
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/admin/settings",
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-[#6B8F71] text-white flex flex-col shadow-xl">

      {/* Logo */}

      <div className="px-8 py-8 border-b border-white/20">

        <h1 className="text-3xl font-bold">
          Bridge
        </h1>

        <p className="text-sm opacity-80 mt-1">
          Administrator Portal
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5 py-8 space-y-2">

        {menuItems.map((item) => {

          const active =
            location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300

                ${
                  active
                    ? "bg-white text-[#6B8F71] font-semibold shadow-md"
                    : "hover:bg-white/10"
                }
              `}
            >
              {item.icon}

              {item.name}
            </Link>
          );
        })}

      </nav>

      {/* Logout */}

      <div className="p-5 border-t border-white/20">

        <button className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-red-500 transition w-full">

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}