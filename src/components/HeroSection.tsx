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
      {/* Insignia de última hora */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/50 mb-6"
      >
        <AlertTriangle className="w-4 h-4 text-destructive" />
        <span className="text-sm font-medium text-destructive">
          Última hora — Enero 2026
        </span>
      </motion.div>

      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight"
      >
        Almacén en Barcelona
        <br />
        <span className="text-gradient">Sorteo de iPhone 17</span>
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6"
      >
        Un gran centro de distribución fue descubierto ocultando contenedores de
        almacenamiento llenos de unidades de iPhone 17 no declaradas. 
        Por orden judicial, estos dispositivos ahora deben distribuirse a los residentes elegibles.
      </motion.p>

      {/* Estadísticas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap justify-center gap-6 mb-8"
      >
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-primary">2,847</p>
          <p className="text-sm text-muted-foreground">Unidades disponibles</p>
        </div>
        <div className="w-px h-12 bg-border hidden md:block" />
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-foreground">€0</p>
          <p className="text-sm text-muted-foreground">Costo para ti</p>
        </div>
        <div className="w-px h-12 bg-border hidden md:block" />
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-foreground">48h</p>
          <p className="text-sm text-muted-foreground">Tiempo de entrega</p>
        </div>
      </motion.div>

      

      {/* Botón CTA */}
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
          Verifica tu elegibilidad
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>

      {/* Indicadores de confianza */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center gap-4 mt-6 text-xs text-muted-foreground"
      >
        <span>✓ Verificado por orden judicial</span>
        <span>•</span>
        <span>✓ Distribución oficial</span>
        <span>•</span>
        <span>✓ Envío gratis</span>
      </motion.div>
    </motion.div>
  );
};
