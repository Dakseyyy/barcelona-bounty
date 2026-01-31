import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  onStart: () => void;
}

export const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center px-4"
    >
      {/* Breaking news badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/50 mb-6"
      >
        <AlertTriangle className="w-4 h-4 text-destructive" />
        <span className="text-sm font-medium text-destructive">Breaking News — January 2026</span>
      </motion.div>

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight"
      >
        Barcelona Warehouse
        <br />
        <span className="text-gradient">iPhone 17 Giveaway</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6"
      >
        A major distribution center was caught hiding storage containers full of unreported iPhone 17 units. 
        By court order, these devices must now be distributed to eligible residents.
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-6 mb-8"
      >
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-primary">2,847</p>
          <p className="text-sm text-muted-foreground">Units Available</p>
        </div>
        <div className="w-px h-12 bg-border hidden md:block" />
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-foreground">€0</p>
          <p className="text-sm text-muted-foreground">Cost to You</p>
        </div>
        <div className="w-px h-12 bg-border hidden md:block" />
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-foreground">48h</p>
          <p className="text-sm text-muted-foreground">Delivery Time</p>
        </div>
      </motion.div>

      {/* Product image placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-card-gradient border border-border flex items-center justify-center animate-float">
          <div className="text-6xl md:text-8xl">📱</div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Button
          variant="hero"
          size="xl"
          onClick={onStart}
          className="group animate-pulse-glow"
        >
          Check Your Eligibility
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center gap-4 mt-6 text-xs text-muted-foreground"
      >
        <span>✓ Court Verified</span>
        <span>•</span>
        <span>✓ Official Distribution</span>
        <span>•</span>
        <span>✓ Free Shipping</span>
      </motion.div>
    </motion.div>
  );
};
