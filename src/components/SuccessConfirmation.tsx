import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Shield, Truck, Clock } from "lucide-react";
import { Button } from "./ui/button";

interface SuccessConfirmationProps {
  onContinue: () => void;
}

export const SuccessConfirmation = ({ onContinue }: SuccessConfirmationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-4"
    >
      {/* Success icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 bg-success-gradient rounded-full blur-xl opacity-50" />
        <div className="relative w-20 h-20 rounded-full bg-success-gradient flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl font-bold text-foreground mb-2"
      >
        Stock Available!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-muted-foreground text-base md:text-lg mb-6 max-w-md"
      >
        We've reserved an iPhone 17 for you. Complete your registration within the next 15 minutes to secure your unit.
      </motion.p>

      {/* Info badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-8"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card-gradient border border-border">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground">15 min reserved</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card-gradient border border-border">
          <Truck className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground">Free delivery</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card-gradient border border-border">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground">Verified offer</span>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-xs"
      >
        <Button
          variant="success"
          size="xl"
          onClick={onContinue}
          className="w-full group"
        >
          Claim Your iPhone
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>

      {/* Urgency text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-xs text-muted-foreground mt-4"
      >
        Only 23 units remaining in stock
      </motion.p>
    </motion.div>
  );
};
