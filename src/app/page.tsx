import Hero from "@/components/home/Hero";
import SegmentSelector from "@/components/home/SegmentSelector";
import HowItWorks from "@/components/home/HowItWorks";
import Differentiator from "@/components/home/Differentiator";
import Proof from "@/components/home/Proof";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SegmentSelector />
      <HowItWorks />
      <Differentiator />
      <Proof />
      <CTASection />
    </>
  );
}
