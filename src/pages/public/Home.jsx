import Navbar from "../../components/layout/Navbar";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";

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

                            
<section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          How Bridge Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Create a Request">
            <p>
              Tell the community what help you need.
            </p>
          </Card>

          <Card title="Connect">
            <p>
              Find volunteers and community members ready to help.
            </p>
          </Card>

          <Card title="Make Impact">
            <p>
              Volunteer your skills and make a difference.
            </p>
          </Card>
        </div>
      </section>
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="Education" />
          <Card title="Technology" />
          <Card title="Career" />
          <Card title="Mentorship" />
          <Card title="Community" />
          <Card title="Wellness" />
        </div>
      </section>
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Community Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bridge-card">
            <h3 className="text-4xl font-bold">150+</h3>
            <p>Requests Posted</p>
          </div>

          <div className="bridge-card">
            <h3 className="text-4xl font-bold">75+</h3>
            <p>Volunteers</p>
          </div>

          <div className="bridge-card">
            <h3 className="text-4xl font-bold">300+</h3>
            <p>Successful Connections</p>
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