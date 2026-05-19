import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import CTA from "./components/CTA";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <CTA />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}