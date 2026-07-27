import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FolderOpen,
  Tags,
} from "lucide-react";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <nav className="space-y-4">
        <Link
          to="/admin-dashboard"
          className="flex items-center gap-3 text-gray-700 hover:text-[#D08C60]"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          to="/admin/users"
          className="flex items-center gap-3 text-gray-700 hover:text-[#D08C60]"
        >
          <Users size={20} />
          Users
        </Link>

        <Link
          to="/admin/requests"
          className="flex items-center gap-3 text-gray-700 hover:text-[#D08C60]"
        >
          <FolderOpen size={20} />
          Requests
        </Link>

        <Link
          to="/admin/categories"
          className="flex items-center gap-3 text-gray-700 hover:text-[#D08C60]"
        >
          <Tags size={20} />
          Categories
        </Link>
      </nav>
    </aside>
  );
}