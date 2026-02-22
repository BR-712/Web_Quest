import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Settings, Award, Lock, Linkedin, User, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import TeamSection from "@/components/landing/TeamSection";

const Nosotros = () => {
  const { t } = useTranslation();

  const howWeWork = [
    { icon: Users, title: t("about_us.how_we_work.items.sinergia.title"), desc: t("about_us.how_we_work.items.sinergia.desc") },
    { icon: Settings, title: t("about_us.how_we_work.items.procesos.title"), desc: t("about_us.how_we_work.items.procesos.desc") },
    { icon: Award, title: t("about_us.how_we_work.items.pmi.title"), desc: t("about_us.how_we_work.items.pmi.desc") },
    { icon: Lock, title: t("about_us.how_we_work.items.confidencialidad.title"), desc: t("about_us.how_we_work.items.confidencialidad.desc") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden pt-20" style={{ background: "linear-gradient(135deg, hsl(221,53%,23%) 0%, hsl(222,58%,11%) 100%)", minHeight: "40vh" }}>
          <div className="container mx-auto relative z-10 py-12 md:py-16">
            <div className="flex items-center gap-2 text-sm text-[hsl(215,20%,65%)] mb-6">
              <Link to="/" className="hover:text-white transition-colors">{t("nav.home")}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{t("nav.about")}</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-[2.625rem] text-white mb-4">{t("about_us.title")}</h1>
            <p className="text-[hsl(215,20%,75%)] text-lg max-w-2xl leading-relaxed">
              {t("about_us.subtitle")}
            </p>
          </div>
        </section>

        {/* Purpose */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading font-bold text-3xl text-primary mb-6">{t("about_us.purpose.title")}</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  {t("about_us.purpose.p1")}
                </p>
                <p className="text-foreground leading-relaxed">
                  {t("about_us.purpose.p2")}
                </p>
              </motion.div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 opacity-20" style={{ background: "hsl(221,53%,23%)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
                  <div className="absolute top-6 left-10 w-44 h-44 opacity-25" style={{ background: "hsl(36,79%,56%)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
                  <div className="absolute top-12 left-5 w-36 h-36 opacity-20" style={{ background: "hsl(168,62%,42%)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-12 md:py-20 bg-secondary">
          <div className="container mx-auto max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading font-bold text-3xl text-primary mb-6 text-center">{t("about_us.what_we_do.title")}</h2>
              <p className="text-foreground leading-relaxed mb-4">
                {t("about_us.what_we_do.p1")}
              </p>
              <p className="text-foreground leading-relaxed">
                {t("about_us.what_we_do.p2")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container mx-auto">
            <h2 className="font-heading font-bold text-3xl text-primary text-center mb-12">{t("about_us.how_we_work.title")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howWeWork.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-secondary rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <TeamSection />

        {/* Closing quote */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container mx-auto text-center">
            <p className="text-accent font-body italic text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {t("about_us.closing_quote")}
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Nosotros;
