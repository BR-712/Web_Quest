import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20" style={{ background: "linear-gradient(180deg, hsl(40,90%,96%) 0%, hsl(0,0%,100%) 100%)" }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              {t("contact.cta_title")}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              {t("contact.cta_desc")}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-foreground">{t("contact.info.phone")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-foreground">{t("contact.info.email")}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-foreground">{t("contact.info.address")}</span>
              </div>
            </div>

            <a
              href="https://wa.me/573176800661?text=Hola%20Quest%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(142,70%,49%)] text-white font-heading font-semibold px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity w-fit"
            >
              <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white">
                <path d="M16.004 2.667c-7.36 0-13.337 5.977-13.337 13.337 0 2.353.613 4.653 1.78 6.683l-1.88 6.86 7.027-1.843a13.28 13.28 0 006.41 1.637c7.36 0 13.337-5.977 13.337-13.337S23.364 2.667 16.004 2.667zm6.073 18.83c-.333-.167-1.97-.97-2.277-1.083-.307-.11-.53-.167-.753.167s-.863 1.083-1.06 1.307c-.193.223-.39.25-.723.083-.333-.167-1.407-.52-2.68-1.653-.99-.883-1.66-1.973-1.853-2.307-.193-.333-.02-.513.147-.68.15-.15.333-.39.5-.583.167-.193.223-.333.333-.557.11-.223.057-.417-.027-.583-.083-.167-.753-1.817-1.033-2.487-.273-.653-.55-.563-.753-.573l-.643-.01a1.23 1.23 0 00-.893.417c-.307.333-1.17 1.143-1.17 2.787s1.197 3.233 1.363 3.457c.167.223 2.357 3.597 5.71 5.047.797.343 1.42.55 1.903.703.8.253 1.527.217 2.103.133.643-.097 1.97-.807 2.25-1.583.277-.78.277-1.447.193-1.583-.083-.14-.307-.223-.64-.39z" />
              </svg>
              {t("contact.info.whatsapp")}
            </a>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
