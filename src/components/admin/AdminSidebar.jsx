import {
  LayoutDashboard,
  Users,
  ClipboardList,
  HandHeart,
  BarChart3,
  Settings,
  LogOut,
  HeartHandshake,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

export default function AdminSidebar() {

  const location = useLocation();

  const navigate = useNavigate();

  const { logout, user } = useAuth();

  function handleLogout() {

    logout();

    navigate("/login");

  }

  const menuItems = [

    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/dashboard",
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

    <aside
      className="
      fixed
      left-0
      top-0
      h-screen
      w-72
      bg-[#6B8F71]
      text-white
      flex
      flex-col
      shadow-2xl
      "
    >

      {/* Logo */}

      <div className="px-8 py-8 border-b border-white/20">

        <div className="flex items-center gap-4">

          <div className=" flex items-center text-white text-xl font-bold gap-3">

            <HeartHandshake
              size={32}
              className="text-[#D08C60]"
            />

          </div>

          <div>

            <h1 className="text-3xl font-bold">
              Bridge
            </h1>


          </div>

        </div>

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
              className={`
                flex
                items-center
                gap-4
                px-5
                py-4
                rounded-xl
                font-medium

                ${
                  active
                    ? "bg-white text-[#6B8F71]"
                    : "text-white/90 hover:bg-white/10"
                }
              `}
            >

              {item.icon}

              {item.name}

            </Link>

          );

        })}

      </nav>

      {/* Admin */}

      <div className="px-6 py-5 border-t border-white/20">

        <div className="flex items-center gap-3 mb-5">

          <div className="w-12 h-12 rounded-full bg-[#D08C60] flex items-center justify-center font-bold text-lg">

            {user?.name?.charAt(0) || "A"}

          </div>

          <div>

            <h3 className="font-semibold">

              {user?.name || "Bridge Admin"}

            </h3>

            <p className="text-sm text-white/70">

              {user?.email}

            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="
          flex
          items-center
          gap-3
          w-full
          rounded-xl
          px-5
          py-3
          bg-[#D08C60]
          hover:brightness-95
          transition
          "
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>

  );

}