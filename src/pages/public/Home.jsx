import Navbar from "../../components/layout/Navbar";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import {FileText, Users, Sparkles, GraduationCap, Laptop, Briefcase, Heart, HandHelping, BookOpen} from "lucide-react";

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
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Make a Difference?
        </h2>

        <p className="mb-8">
          Join Bridge today and become part of a supportive community.
        </p>

        <Button>Join Bridge</Button>
      </section>
    </main>
    </>
  );
}