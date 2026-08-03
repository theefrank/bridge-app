import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="pb-12">
      <div className="grid lg:grid-cols-[45%_55%] items-center">
        <div className="max-w-7xl ml-auto px-6 lg:px-12">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm mb-6">
            Building stronger communities together
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-800">
            Need a
            <br />
            Helping Hand?
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Find support, offer help, and build stronger local connections.
          </p>

          <p className="mt-4 text-gray-500">
            Bridge helps neighbors request support and volunteers respond with
            care, clarity, and purpose.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
             to="/register"
             className="btn-primary"
             >
              Get Started
              </Link>
              <Link
              to="/requests"
              className="btn-secondary"
              >
              Browse Requests
              </Link>
            
          </div>
        </div>

        <div className="h-150 lg:h-190 overflow-hidden">
          <img
            src="frontend/src/assets/bridge-hero.jpeg"
            alt="Bridge Community"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}