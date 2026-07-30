import { Link } from "react-router-dom";
export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#F4F7F5] rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Stronger Communities?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you need support or want to help others,
            Bridge makes it easier to connect, collaborate,
            and create meaningful impact.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
            to="/requests/new"
            className="btn-primary"
            >
              Request Help
              </Link>
               <Link
               to="/opportunities"
               className="btn-secondary"
               >
                Become a Volunteer
                </Link>
          </div>
        </div>
      </div>
    </section>
  );
}