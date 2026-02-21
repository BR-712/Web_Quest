import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const services = [
    { name: t("services.consultoria.title"), path: "/servicios/consultoria-y-asesoria" },
    { name: t("services.estrategias.title"), path: "/servicios/estrategias-e-intervencion" },
    { name: t("services.formacion.title"), path: "/servicios/formacion-especializada" },
    { name: t("services.digital.title"), path: "/servicios/transformacion-digital" },
  ];

  const transparent = isHome && !scrolled;

  return (
    <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        transparent ? "bg-transparent py-6" : "backdrop-blur-lg shadow-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="block">
          <img src="/Logo.png" alt="Quest Logo" className={`h-12 md:h-16 transition-all ${transparent ? 'brightness-0 invert' : ''}`} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={`text-base font-semibold transition-colors hover:text-accent ${
              transparent ? "text-white/90" : "text-foreground"
            }`}
          >
            {t("nav.home")}
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-base font-semibold transition-colors hover:text-accent ${
                transparent ? "text-white/90" : "text-foreground"
              }`}
            >
              {t("nav.services")}
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-lg border border-border overflow-hidden p-2"
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-secondary rounded-lg transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/nosotros"
            className={`text-base font-semibold transition-colors hover:text-accent ${
              transparent ? "text-white/90" : "text-foreground"
            }`}
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/contacto"
            className={`text-base font-semibold transition-colors hover:text-accent ${
              transparent ? "text-white/90" : "text-foreground"
            }`}
          >
            {t("nav.contact")}
          </Link>
        </div>

        {/* Language Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-secondary/50 rounded-full p-1 backdrop-blur-sm">
            <button
              onClick={() => changeLanguage("es")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                i18n.language === "es"
                  ? "bg-primary text-white shadow-sm"
                  : transparent
                  ? "text-white/70 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                i18n.language === "en"
                  ? "bg-primary text-white shadow-sm"
                  : transparent
                  ? "text-white/70 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <button
            className={`lg:hidden p-2 ${transparent ? "text-white" : "text-foreground"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="text-foreground font-medium py-2 border-b border-border"
              >
                {t("nav.home")}
              </Link>
              <div className="py-2 border-b border-border">
                <div className="text-muted-foreground text-sm mb-2">{t("nav.services")}</div>
                <div className="pl-4 flex flex-col gap-3">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setMobileOpen(false)}
                      className="text-foreground font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/nosotros"
                onClick={() => setMobileOpen(false)}
                className="text-foreground font-medium py-2 border-b border-border"
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/contacto"
                onClick={() => setMobileOpen(false)}
                className="text-foreground font-medium py-2"
              >
                {t("nav.contact")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
