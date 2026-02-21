import React from "react";
import { motion } from "framer-motion";
import clients from "@/data/clients.json";
import { useTranslation } from "react-i18next";

const ClientLogo = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-4">
    <img
      src={logo}
      alt={name}
      className="max-w-full max-h-12 object-contain"
    />
  </div>
);

const Marquee = ({ children, direction = 'left' }: { children: React.ReactNode, direction?: 'left' | 'right' }) => {
  const duration = React.Children.count(children) * 5;
  return (
    <div 
      className={`flex ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
      style={{ '--duration': `${duration}s`, '--gap': '1rem' } as React.CSSProperties}
    >
      {children}
      {children}
    </div>
  );
};

const ClientsSection = () => {
  const { t } = useTranslation();

  const directos1 = clients.directos.slice(0, Math.ceil(clients.directos.length / 2));
  const directos2 = clients.directos.slice(Math.ceil(clients.directos.length / 2));
  const alianza1 = clients.alianza.slice(0, Math.ceil(clients.alianza.length / 2));
  const alianza2 = clients.alianza.slice(Math.ceil(clients.alianza.length / 2));

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20 overflow-hidden bg-secondary"
    >
      <div className="container mx-auto mb-10">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center">
          {t("clients.title")}
        </h2>
        <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto">
          {t("clients.subtitle")}
        </p>
      </div>

      <div className="space-y-8 pause-on-hover">
        <Marquee>
          {directos1.map((client, i) => (
            <ClientLogo key={`directo1-${i}`} name={client.name} logo={client.logo} />
          ))}
        </Marquee>
        <Marquee direction="right">
          {directos2.map((client, i) => (
            <ClientLogo key={`directo2-${i}`} name={client.name} logo={client.logo} />
          ))}
        </Marquee>
      </div>

      <div className="container mx-auto my-12 text-center">
        <div className="inline-block bg-card border border-border rounded-full px-6 py-2 text-sm text-muted-foreground">
          {t("clients.alliance")}
        </div>
      </div>

      <div className="space-y-8 pause-on-hover">
        <Marquee>
          {alianza1.map((client, i) => (
            <ClientLogo key={`alianza1-${i}`} name={client.name} logo={client.logo} />
          ))}
        </Marquee>
        <Marquee direction="right">
          {alianza2.map((client, i) => (
            <ClientLogo key={`alianza2-${i}`} name={client.name} logo={client.logo} />
          ))}
        </Marquee>
      </div>
    </motion.section>
  );
};

export default ClientsSection;
