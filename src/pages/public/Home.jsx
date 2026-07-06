import Navbar from "../../components/layout/Navbar";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import {FileText, Users, Sparkles, GraduationCap, Laptop, Briefcase, Heart, HandHelping, BookOpen, Mail, MapPin, HeartHandshake} from "lucide-react";

const categories = [
  { name: "Education", icon: GraduationCap },
  { name: "Technology", icon: Laptop },
  { name: "Career", icon: Briefcase },
  { name: "Wellness", icon: Heart },
  { name: "Community", icon: HandHelping },
  { name: "Mentorship", icon: BookOpen },
];

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
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
                    Bridge connects people who need help with those
                    who are ready to make a difference.                 
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
                            className="w-full
                                       h-full
                                       object-cover"
                             />
                             </div>
                             </div>
                             </section>

       <section className="max-w-7xl mx-auto px-6 py-16">
       <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="bridge-card">
          <h2 className="text-3xl font-bold mb-8">
            How Bridge Works
            </h2>
            <p className="text-gray-600 mb-8">
               Bridge connects people seeking support with volunteers and community members
               who are ready to help.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#F4F7F5] p-8 rounded-2xl">
                <FileText
                size={32}
                className="text-[#D08C60] mb-4"
                />
                <h3 className="font-semibold mb-2">
                  Create a Request
                  </h3>
                  <p className="text-sm text-gray-600">
                    Share what help you need from the community.
                    </p>
                    </div>
                    <div className="bg-[#F4F7F5] p-8 rounded-2xl">
                      <Users
                      size={32}
                      className="text-[#D08C60] mb-4"
                      />
                      <h3 className="font-semibold mb-2">
                        Connect
                        </h3>
                        <p className="text-sm text-gray-600">
                          Volunteers discover your request and offer support.
                          </p>
                          </div>
                          <div className="bg-[#F4F7F5] p-8 rounded-2xl">
                            <Sparkles
                            size={32}
                            className="text-[#D08C60] mb-4"
                            />
                            <h3 className="font-semibold text-lg">
                              Make Impact
                              </h3>
                              <p className="text-gray-600">
                                Build meaningful connections and strengthen communities.
                                </p>
                                </div>
                                </div>
                                </div>

                                <div className="bridge-card">
                                  <h2 className="text-3xl font-bold mb-8">
                                    Popular Categories
                                     </h2>
                                     <p className="text-gray-600 mb-8">
                                      Explore the most common ways community members seek and offer help.
                                     </p>
                                     <div className="grid grid-cols-3 gap-4">
                                      {categories.map((category) => {
                                        const Icon = category.icon;
                                        return (
                                          <div
                                          key={category.name}
                                          className="bg-[#F4F7F5] rounded-2xl p-5.25"
                                          >
                                            <div className="w-12 h-12 rounded-full bg-[#FAF1EB]] flex items-center justify-center mb-4">
                                              <Icon
                                              size={24}
                                              className="text-[#D08C60]"
                                              />
                                              </div>
                                              <h3 className="font-semibold text-lg">
                                                {category.name}
                                                </h3>
                                                  </div>
                                                  );
                                                  })}
                                                  </div>
                                                  </div>
                                                  </div>
                                                  </section>

<section className="py-16 px-6">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-3">
        Community Impact
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto">
        Every connection made through Bridge strengthens communities
        and creates meaningful change.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bridge-card text-center">
        <h3 className="text-4xl font-bold text-[#D08C60]">
          500+
        </h3>

        <p className="text-gray-600 mt-2">
          Requests Fulfilled
        </p>
      </div>

      <div className="bridge-card text-center">
        <h3 className="text-4xl font-bold text-[#D08C60]">
          200+
        </h3>

        <p className="text-gray-600 mt-2">
          Active Volunteers
        </p>
      </div>

      <div className="bridge-card text-center">
        <h3 className="text-4xl font-bold text-[#D08C60]">
          50+
        </h3>

        <p className="text-gray-600 mt-2">
          Communities Reached
        </p>
      </div>

    </div>

  </div>
</section>
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
        

        <button className="btn-primary">
          Request Help
        </button>

        <button className="btn-secondary">
          Become a Volunteer
        </button>

      </div>

    </div>

  </div>
</section>
<footer className="bg-[#5F766F] text-white mt-20">
  <div className="max-w-7xl mx-auto px-6 py-12">

    <div className="grid md:grid-cols-3 gap-10">

      <div>
        <div className="flex items-center gap-2 mb-3">
          <HeartHandshake size={28} />
        <h3 className="text-2xl font-bold">
          Bridge
        </h3>
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
            <a href="#" className="hover:text-[#E7B79B]">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#E7B79B]">
              How It Works
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#E7B79B]">
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
    </main>
    </>
  );
}