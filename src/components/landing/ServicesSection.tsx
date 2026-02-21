import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ClipboardCheck, Shield, GraduationCap, Monitor, ArrowRight, type LucideIcon } from "lucide-react";
import { serviciosOverview } from "@/data/services";
import { useTranslation } from "react-i18next";

const iconMap: Record<string, LucideIcon> = {
  ClipboardCheck,
  Shield,
  GraduationCap,
  Monitor,
};

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="servicios"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20 bg-secondary"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-12"
        >
          {t("services.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {serviciosOverview.map((service, i) => {
            const Icon = iconMap[service.icon];
            const isAccent = service.accent === "accent";
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={service.path}
                className={`block bg-card rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 p-6 md:p-8 border-t-[3px] ${
                  isAccent ? "border-t-accent" : "border-t-gold"
                }`}
              >
                <Icon className={`w-10 h-10 md:w-12 md:h-12 mb-4 ${isAccent ? "text-accent" : "text-gold"}`} />
                <h3 className="font-heading font-semibold text-lg md:text-xl text-primary mb-2">{t(service.title)}</h3>
                <p className="text-foreground text-sm md:text-base leading-relaxed mb-4">{t(service.description)}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span key={tag} className="bg-navy-light text-primary text-xs font-heading font-medium px-3 py-1 rounded-full">
                      {t(tag)}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-accent font-heading font-medium text-sm">
                  {t("hero.cta_primary")} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          )})}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
