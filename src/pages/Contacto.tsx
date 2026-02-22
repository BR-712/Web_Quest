import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import ContactForm from "@/components/ContactForm";

const Contacto = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden pt-20" style={{ background: "linear-gradient(135deg, hsl(221,53%,23%) 0%, hsl(222,58%,11%) 100%)", minHeight: "40vh" }}>
          <div className="container mx-auto relative z-10 py-12 md:py-16">
            <div className="flex items-center gap-2 text-sm text-[hsl(215,20%,65%)] mb-6">
              <Link to="/" className="hover:text-white transition-colors">{t("nav.home")}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{t("nav.contact")}</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-[2.625rem] text-white mb-4">{t("contact.title")}</h1>
            <p className="text-[hsl(215,20%,75%)] text-lg max-w-2xl leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Form */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <ContactForm />
              </motion.div>

              {/* Contact info */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
                <h2 className="font-heading font-bold text-2xl text-primary mb-6">{t("contact.info.title")}</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-accent" /><span>{t("contact.info.phone")}</span></div>
                  <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-accent" /><span>{t("contact.info.email")}</span></div>
                  <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-accent" /><span>{t("contact.info.address")}</span></div>
                </div>

                <a
                  href={`https://wa.me/573176800661?text=${encodeURIComponent(t("contact_page.whatsapp_message"))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[hsl(142,70%,49%)] text-white font-heading font-semibold px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity w-fit mb-8"
                >
                  {t("contact.info.whatsapp")}
                </a>

                {/* Map placeholder */}
                <div className="w-full h-48 rounded-xl bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground font-heading text-sm">{t("contact_page.map_label")}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contacto;
