import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

interface QuizStepProps {
  question: string;
  description?: string;
  onConfirm: () => void;
  buttonText?: string;
}

export const QuizStep = ({
  question,
  description,
  onConfirm,
  buttonText = "Sí, confirmo"
}: QuizStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-16 h-16 rounded-full bg-card-gradient border border-border flex items-center justify-center mb-6"
      >
        <Check className="w-8 h-8 text-primary" />
      </motion.div>
      
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        {question}
      </h2>
      
      {description && (
        <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-md">
          {description}
        </p>
      )}
      
      <Button
        variant="hero"
        size="xl"
        onClick={onConfirm}
        className="w-full max-w-xs"
      >
        {buttonText}
      </Button>
    </motion.div>
  );
};
