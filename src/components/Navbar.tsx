import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Consultoría y Asesoría", path: "/servicios/consultoria-y-asesoria" },
  { name: "Estrategias e Intervención", path: "/servicios/estrategias-e-intervencion" },
  { name: "Formación Especializada", path: "/servicios/formacion-especializada" },
  { name: "Transformación Digital", path: "/servicios/transformacion-digital" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [lang, setLang] = useState<"ES" | "EN">("ES");
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-card shadow-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className={`font-heading font-bold text-xl md:text-2xl tracking-tight ${transparent ? "text-white" : "text-primary"}`}>
          QUEST
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`font-heading text-sm font-medium transition-colors hover:text-accent ${transparent ? "text-white" : "text-primary"}`}>
            Inicio
          </Link>

          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className={`font-heading text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 ${transparent ? "text-white" : "text-primary"}`}>
              Servicios <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-card rounded-lg shadow-lg border border-border p-2"
                >
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="block px-4 py-2.5 text-sm font-heading text-primary hover:bg-secondary rounded-md transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/nosotros" className={`font-heading text-sm font-medium transition-colors hover:text-accent ${transparent ? "text-white" : "text-primary"}`}>
            Nosotros
          </Link>
          <Link to="/contacto" className={`font-heading text-sm font-medium transition-colors hover:text-accent ${transparent ? "text-white" : "text-primary"}`}>
            Contacto
          </Link>
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <div className={`flex items-center rounded-full border text-xs font-heading font-medium ${transparent ? "border-white/30" : "border-border"}`}>
            <button
              onClick={() => setLang("ES")}
              className={`px-3 py-1.5 rounded-full transition-colors ${lang === "ES" ? (transparent ? "bg-white/20 text-white" : "bg-primary text-primary-foreground") : (transparent ? "text-white/70" : "text-muted-foreground")}`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("EN")}
              className={`px-3 py-1.5 rounded-full transition-colors ${lang === "EN" ? (transparent ? "bg-white/20 text-white" : "bg-primary text-primary-foreground") : (transparent ? "text-white/70" : "text-muted-foreground")}`}
            >
              EN
            </button>
          </div>
          <Link
            to="/contacto"
            className="bg-gold text-gold-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Contáctanos
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${transparent ? "text-white" : "text-primary"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-16 right-0 bottom-0 w-80 max-w-full bg-card shadow-2xl z-50 p-6 flex flex-col gap-4 overflow-y-auto lg:hidden"
          >
            <Link to="/" className="font-heading text-base font-medium text-primary py-2">Inicio</Link>
            <div>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="font-heading text-base font-medium text-primary py-2 flex items-center gap-1 w-full">
                Servicios <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 flex flex-col gap-1">
                  {services.map((s) => (
                    <Link key={s.path} to={s.path} className="text-sm text-muted-foreground hover:text-primary py-1.5 font-heading">{s.name}</Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/nosotros" className="font-heading text-base font-medium text-primary py-2">Nosotros</Link>
            <Link to="/contacto" className="font-heading text-base font-medium text-primary py-2">Contacto</Link>
            <div className="mt-auto flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center rounded-full border border-border text-xs font-heading font-medium">
                  <button onClick={() => setLang("ES")} className={`px-3 py-1.5 rounded-full ${lang === "ES" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>ES</button>
                  <button onClick={() => setLang("EN")} className={`px-3 py-1.5 rounded-full ${lang === "EN" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>EN</button>
                </div>
              </div>
              <Link to="/contacto" className="bg-gold text-gold-foreground font-heading font-semibold text-sm px-5 py-2.5 rounded-lg text-center hover:opacity-90 transition-opacity">
                Contáctanos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
