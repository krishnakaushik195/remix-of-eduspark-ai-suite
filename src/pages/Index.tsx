import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Gamification from "@/components/landing/Gamification";
import DashboardPreview from "@/components/landing/DashboardPreview";
import TechSection from "@/components/landing/TechSection";
import FutureVision from "@/components/landing/FutureVision";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustStrip />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Gamification />
      <DashboardPreview />
      <TechSection />
      <FutureVision />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
