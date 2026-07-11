import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Categories from "../components/home/Categories";
import CommunityImpact from "../components/home/CommunityImpact";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <HowItWorks />
            <Categories />
          </div>
        </section>

        <CommunityImpact />
        <CTA />
      </main>

      <Footer />
    </>
  );
}