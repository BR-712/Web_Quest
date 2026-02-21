import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ChevronRight, type LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

interface SubService {
  title: string;
  itemsKey: string;
  badges?: string[];
}

interface ServicePageProps {
  icon: LucideIcon;
  title: string;
  description: string;
  breadcrumb: string;
  subservices: SubService[];
  children?: ReactNode;
}

const ServicePageTemplate = ({ icon: Icon, title, description, breadcrumb, subservices, children }: ServicePageProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex items-end overflow-hidden pt-20" style={{ background: "linear-gradient(135deg, hsl(221,53%,23%) 0%, hsl(222,58%,11%) 100%)", minHeight: "40vh" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -right-10 w-64 h-64 opacity-[0.05]" style={{ background: "hsl(36,79%,56%)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
          </div>
          <div className="container mx-auto relative z-10 py-12 md:py-16">
            <div className="flex items-center gap-2 text-sm text-[hsl(215,20%,65%)] mb-6">
              <Link to="/" className="hover:text-white transition-colors">{t("nav.home")}</Link>
              <ChevronRight className="w-3 h-3" />
              <span>{t("nav.services")}</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{t(breadcrumb)}</span>
            </div>
            <Icon className="w-12 h-12 text-gold mb-4" />
            <h1 className="font-heading font-bold text-3xl md:text-[2.625rem] text-white mb-4">{t(title)}</h1>
            <p className="text-[hsl(215,20%,75%)] text-lg max-w-2xl leading-relaxed">{t(description)}</p>
          </div>
        </section>

        {/* Subservices */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container mx-auto max-w-4xl">
            <Accordion type="multiple" className="space-y-4">
              {subservices.map((sub, i) => {
                const items = t(sub.itemsKey, { returnObjects: true }) as string[];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <AccordionItem value={`sub-${i}`} className="bg-card border border-border rounded-xl px-6 overflow-hidden">
                      <AccordionTrigger className="font-heading font-semibold text-primary text-left py-5 hover:no-underline">
                        {t(sub.title)}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5">
                        <ul className="space-y-2 mb-4">
                          {Array.isArray(items) && items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        {sub.badges && (
                          <div className="flex flex-wrap gap-2">
                            {sub.badges.map((b) => (
                              <span key={b} className="bg-navy-light text-primary text-xs font-heading font-medium px-3 py-1 rounded-full">{t(b)}</span>
                            ))}
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>

            {children}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20" style={{ background: "linear-gradient(180deg, hsl(40,90%,96%) 0%, hsl(0,0%,100%) 100%)" }}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="flex flex-col justify-center">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">¿Te interesa este servicio?</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">Cuéntanos sobre tu organización y te asesoraremos en {title.toLowerCase()}.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-accent" /><span>+57 317 680 0661</span></div>
                  <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-accent" /><span>info@questjuntos.com</span></div>
                  <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-accent" /><span>Barranquilla, Colombia</span></div>
                </div>
                <a
                  href="https://wa.me/573176800661?text=Hola%20Quest%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[hsl(142,70%,49%)] text-white font-heading font-semibold px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity w-fit"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ServicePageTemplate;
