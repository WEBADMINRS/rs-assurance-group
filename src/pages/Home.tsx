import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import Philosophy from "../components/about/Philosophy";
import Services from "../components/home/Services";
import WhyRS from "../components/home/WhyRS";
import Industries from "../components/home/Industries";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-white text-[#08142E]">
        <Hero />
        <Philosophy />
        <Services />
        <WhyRS />
        <Industries />
        <CTA />
      </main>

      <Footer />
    </>
  );
}