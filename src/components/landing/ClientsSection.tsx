import { motion } from "framer-motion";

const row1 = ["MOVATE", "Azul Constructores", "Suramericana", "Bureau Veritas", "Fondo Olímpica", "Thermocoil", "Omega Internacional", "Galcomex"];
const row2 = ["Universidad Metropolitana", "Banco Serfinanza", "Fundación Santo Domingo", "Cámara de Comercio de Barranquilla", "Cummins", "Espumados del Litoral", "Lagos de Caujaral"];

const ClientBadge = ({ name }: { name: string }) => (
  <div className="flex-shrink-0 px-6 py-3 rounded-lg bg-white/10 text-white/80 text-sm font-heading font-medium whitespace-nowrap mx-2">
    {name}
  </div>
);

const ClientsSection = () => {
  return (
    <section className="py-12 md:py-20 overflow-hidden" style={{ background: "hsl(221,53%,23%)" }}>
      <div className="container mx-auto mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl text-white text-center"
        >
          Empresas que confían en Quest
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-[hsl(215,20%,65%)] mt-3 max-w-xl mx-auto"
        >
          Hemos trabajado con más de 35 organizaciones fortaleciendo su desarrollo sostenible.
        </motion.p>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4 pause-on-hover">
        <div className="flex animate-marquee-left">
          {[...row1, ...row1].map((name, i) => (
            <ClientBadge key={i} name={name} />
          ))}
        </div>
        <div className="flex animate-marquee-right">
          {[...row2, ...row2].map((name, i) => (
            <ClientBadge key={i} name={name} />
          ))}
        </div>
      </div>

      {/* Alliance badge */}
      <div className="container mx-auto mt-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block border border-gold/50 text-gold rounded-full px-6 py-2 text-sm font-heading font-medium"
        >
          En alianza con Seguros de Vida Suramericana S.A.
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
