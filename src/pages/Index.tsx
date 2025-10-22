import { useState } from "react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import StorylineSection from "@/components/StorylineSection";
import ProblemStatementsSection from "@/components/ProblemStatementsSection";
import TimelineSection from "@/components/TimelineSection";
import RulesSection from "@/components/RulesSection";
import CoordinatorsSection from "@/components/CoordinatorsSection";
import FooterSection from "@/components/FooterSection";
import SectionDivider from "@/components/SectionDivider";
import LoadingScreen from "@/components/LoadingScreen";

import divider1 from "@/assets/section-divider-1.jpg";
import divider2 from "@/assets/section-divider-2.jpg";
import divider3 from "@/assets/section-divider-3.jpg";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen">
      {/* Sticky Back Button */}
      <a
        href="https://intemstellar-nu.vercel.app/"
        className="fixed top-4 left-4 z-50"
      >
        <Button
          variant="outline"
          size="sm"
          className="font-orbitron bg-background/80 backdrop-blur-sm hover:bg-background/90"
        >
          Back
        </Button>
      </a>

      {/* Sticky Register Button */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeMaMlTMJVuEd-ABRN_clcV1urVX1JFYZVl6cnVbYcdVWJj6A/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 z-50"
      >
        <Button
          variant="default"
          size="sm"
          className="font-orbitron"
        >
          Register
        </Button>
      </a>

      <HeroSection />
      <StorylineSection />

      <SectionDivider imageSrc={divider1} alt="Circuit board divider" />

      <ProblemStatementsSection />

      <SectionDivider imageSrc={divider2} alt="Time mechanism divider" />

      <TimelineSection />

      <SectionDivider imageSrc={divider3} alt="Holographic interface divider" />

      <RulesSection />

      <CoordinatorsSection />

      {/* Large Register Button */}
      <div className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Break the Loop?
          </h3>
          <p className="font-inter text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Assemble your team and join the Paradox Protocol. The timeline awaits your decision.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeMaMlTMJVuEd-ABRN_clcV1urVX1JFYZVl6cnVbYcdVWJj6A/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="font-orbitron text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              REGISTER YOUR TEAM
            </Button>
          </a>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Index;
