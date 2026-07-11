import { Link } from "react-router-dom";
import { HeartHandshake } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center gap-2">
            <HeartHandshake className="w-8 h-8 text-[#D08C60]" />
          <h1 className="text-2xl font-bold text-sage">
            Bridge
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
  <Link
    to="/"
    className="text-gray-600 hover:text-(--color-sage-500)"
  >
    Home
  </Link>

  <Link
    to="/about"
    className="text-gray-600 hover:text-(--color-sage-500)"
  >
    About
  </Link>

  <Link
    to="/requests"
    className="text-gray-600 hover:text-(--color-sage-500)"
  >
    Browse Requests
  </Link>

  <Link
    to="/opportunities"
    className="text-gray-600 hover:text-(--color-sage-500)"
  >
    Volunteer
  </Link>
</div>

<div className="hidden md:flex items-center gap-4">
<Link
  to="/login"
  className="btn-outline"
>
  Login
</Link>

<Link
  to="/register"
  className="btn-primary"
>
  Sign Up
</Link>    
        </div>

        <button className="md:hidden text-2xl">
          ☰
        </button>

      </div>
    </nav>
  );
}