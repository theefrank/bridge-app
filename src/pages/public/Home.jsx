import Button from "../../components/common/Button";
import Card from "../../components/common/Card";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center">
  <div>
    <h1 className="text-5xl font-bold">
      Need a Helping Hand?
    </h1>

    <p className="mt-4">
      Find Support. Share Skills. Build Community.
    </p>

    <div className="flex gap-4 mt-6">
      <Button>
        Get Started
      </Button>

      <Button variant="secondary">
        Browse Requests
      </Button>
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
    </main>
  );
}