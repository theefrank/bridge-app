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
            Find support. Share skills. Build community.
          </p>

          <p className="mt-4 text-gray-500">
            Bridge connects people who need help with those who are ready to
            make a difference.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="btn-primary">
              Get Started
            </button>

            <button className="btn-secondary">
              Browse Requests
            </button>
          </div>
        </div>

        <div className="h-150 lg:h-190 overflow-hidden">
          <img
            src="src/assets/bridge-hero.jpeg"
            alt="Bridge Community"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}