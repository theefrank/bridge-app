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
          <a
            href="#"
            className="text-gray-600 hover:text-(--color-sage-500) transition-colors duration-300" 
          >
            Home
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-(--color-sage-500) transition-colors duration-300" 
          >
            About
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-(--color-sage-500) transition-colors duration-300" 
          >
            Browse Requests
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-(--color-sage-500) transition-colors duration-300" 
          >
            Volunteer
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="btn-outline">
            Login
          </button>

          <button className="btn-primary">
            Sign Up
          </button>
        </div>

        <button className="md:hidden text-2xl">
          ☰
        </button>

      </div>
    </nav>
  );
}