import { Mail, MapPin, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#5F766F] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <div className="flex items-center gap-2 mb-3">
              <HeartHandshake size={28} />
              <h3 className="text-2xl font-bold">Bridge</h3>
            </div>

            <p className="text-gray-200">
              Connecting communities through meaningful support,
              collaboration, and volunteerism.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
  <Link
    to="/"
    className="hover:text-[#E7B79B]"
  >
    Home
  </Link>
</li>
          

          <li>
            <a href="/#how-it-works" className="hover:text-[#E7B79B]">
              How It Works
            </a>
          </li>

          <li>
            <a href="/#categories" className="hover:text-[#E7B79B]">
              Categories
            </a>
          </li>
        </ul>

           
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>hello@bridge.com</span>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <MapPin size={18} />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#7C9A92] mt-10 pt-6 text-center">
          <p className="text-sm text-gray-200">
            © 2026 Bridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}