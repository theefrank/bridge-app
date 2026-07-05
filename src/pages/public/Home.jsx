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
    </main>
  );
}