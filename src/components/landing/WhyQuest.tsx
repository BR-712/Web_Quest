import { motion } from "framer-motion";
import { Users, MapPin, Handshake, Cpu, Factory } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyQuest = () => {
  const { t } = useTranslation();

  const differentiators = [
    { icon: Users, title: t("why_quest.items.team.title"), desc: t("why_quest.items.team.desc") },
    { icon: MapPin, title: t("why_quest.items.coverage.title"), desc: t("why_quest.items.coverage.desc") },
    { icon: Handshake, title: t("why_quest.items.alliances.title"), desc: t("why_quest.items.alliances.desc") },
    { icon: Cpu, title: t("why_quest.items.digital.title"), desc: t("why_quest.items.digital.desc") },
    { icon: Factory, title: t("why_quest.items.multisector.title"), desc: t("why_quest.items.multisector.desc") },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20 bg-card"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-3xl md:text-4xl text-primary mb-10"
            >
              {t("why_quest.title")}
            </motion.h2>

            <div className="space-y-6">
              {differentiators.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative visual */}
          <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 opacity-20" style={{ background: "hsl(221,53%,23%)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
              <div className="absolute top-8 left-12 w-48 h-48 opacity-25" style={{ background: "hsl(36,79%,56%)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
              <div className="absolute top-16 left-6 w-40 h-40 opacity-20" style={{ background: "hsl(168,62%,42%)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyQuest;
