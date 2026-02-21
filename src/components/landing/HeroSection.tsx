import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  const scrollToServices = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative min-h-[90vh] md:min-h-[90vh] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(221,53%,23%) 0%, hsl(222,58%,11%) 100%)" }}>
      {/* Decorative triangles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 opacity-[0.07]" style={{ background: "linear-gradient(180deg, hsl(36,79%,56%) 0%, transparent 100%)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
        <div className="absolute bottom-10 -left-16 w-72 h-72 opacity-[0.06]" style={{ background: "linear-gradient(180deg, hsl(168,62%,42%) 0%, transparent 100%)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 opacity-[0.04]" style={{ background: "linear-gradient(180deg, hsl(221,53%,40%) 0%, transparent 100%)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 opacity-[0.05] rotate-45" style={{ background: "linear-gradient(180deg, hsl(36,79%,56%) 0%, transparent 100%)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
      </div>

      <div className="container mx-auto relative z-10 py-32 md:py-0">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.75rem] leading-tight text-white"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-[hsl(215,20%,65%)] max-w-2xl leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-gold text-gold-foreground font-heading font-semibold text-base px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              {t("hero.cta_secondary")}
            </Link>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center border-2 border-white/30 text-white font-heading font-medium text-base px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              {t("hero.cta_primary")}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
