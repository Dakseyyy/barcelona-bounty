import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingCheckProps {
  onComplete: () => void;
}

const loadingSteps = [
  "Connecting to warehouse...",
  "Verifying available stock...",
  "Checking your eligibility...",
  "Reserving your unit...",
];

export const LoadingCheck = ({ onComplete }: LoadingCheckProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepDuration = 800;
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const target = ((currentStep + 1) / loadingSteps.length) * 100;
        if (prev < target) {
          return Math.min(prev + 2, target);
        }
        return prev;
      });
    }, 30);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        clearInterval(progressInterval);
        setTimeout(onComplete, 500);
        return prev;
      });
    }, stepDuration);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center text-center px-4"
    >
      {/* Spinning loader */}
      <div className="relative mb-8">
        <motion.div
          className="w-24 h-24 rounded-full border-4 border-secondary"
          style={{ borderTopColor: "hsl(var(--primary))" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-foreground">{Math.round(progress)}%</span>
        </div>
      </div>

      {/* Current step text */}
      <motion.p
        key={currentStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg md:text-xl font-medium text-foreground mb-4"
      >
        {loadingSteps[currentStep]}
      </motion.p>

      {/* Progress bar */}
      <div className="w-full max-w-xs h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-button-gradient"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Step indicators */}
      <div className="flex gap-2 mt-6">
        {loadingSteps.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index <= currentStep ? "bg-primary" : "bg-secondary"
            }`}
            animate={index === currentStep ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.5, repeat: index === currentStep ? Infinity : 0 }}
          />
        ))}
      </div>
    </motion.div>
  );
};
