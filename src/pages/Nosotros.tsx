import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Settings, Award, Lock, Linkedin, User, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const howWeWork = [
  { icon: Users, title: "Sinergia", desc: "Trabajo colaborativo con nuestros clientes" },
  { icon: Settings, title: "Gestión por procesos", desc: "Enfoque estructurado y medible" },
  { icon: Award, title: "Mejores prácticas PMI®", desc: "Gestión de proyectos profesional" },
  { icon: Lock, title: "Confidencialidad", desc: "Manejo seguro de la información" },
];

const Nosotros = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex items-end overflow-hidden pt-20" style={{ background: "linear-gradient(135deg, hsl(221,53%,23%) 0%, hsl(222,58%,11%) 100%)", minHeight: "40vh" }}>
          <div className="container mx-auto relative z-10 py-12 md:py-16">
            <div className="flex items-center gap-2 text-sm text-[hsl(215,20%,65%)] mb-6">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">Nosotros</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-[2.625rem] text-white mb-4">Conoce a Quest</h1>
            <p className="text-[hsl(215,20%,75%)] text-lg max-w-2xl leading-relaxed">
              Somos quienes junto a ti construyen estrategias y soluciones para un futuro sostenible.
            </p>
          </div>
        </section>

        {/* Purpose */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading font-bold text-3xl text-primary mb-6">Nuestro Propósito</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  En Quest tenemos como propósito construir estrategias y soluciones conjuntas con las organizaciones, que promuevan un equilibrio en el desarrollo de sus operaciones para lograr un futuro sostenible.
                </p>
                <p className="text-foreground leading-relaxed">
                  Contribuimos a que las organizaciones, sus clientes, proveedores, nuestros colaboradores y la comunidad en general, elevemos el nivel de conciencia y seamos socialmente más responsables.
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
              <h2 className="font-heading font-bold text-3xl text-primary mb-6 text-center">Lo que hacemos</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Nos mantenemos en la búsqueda permanente de las mejores prácticas de gestión de procesos responsables, desarrollando acciones sinérgicas con nuestras partes interesadas, consolidando relaciones de confianza que contribuyan a entornos más competitivos y sostenibles.
              </p>
              <p className="text-foreground leading-relaxed">
                Ayudamos a nuestros clientes a desarrollar soluciones ajustadas a sus características particulares, ofreciendo modelos de gestión para pequeñas, medianas y grandes empresas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container mx-auto">
            <h2 className="font-heading font-bold text-3xl text-primary text-center mb-12">Cómo Trabajamos</h2>
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

        {/* Team */}
        <section className="py-12 md:py-20 bg-secondary">
          <div className="container mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl text-primary mb-10">Nuestro Equipo</h2>
            <div className="max-w-md mx-auto bg-card rounded-xl shadow-sm p-8">
              <div className="w-40 h-40 rounded-full border-[3px] border-gold bg-secondary flex items-center justify-center mx-auto mb-5">
                <User className="w-16 h-16 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary">Jorge López Ramos</h3>
              <p className="text-accent text-sm mt-1">Business Partner · Lead Auditor</p>
              <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                Ingeniero Industrial con más de 14 años de experiencia liderando procesos de gestión de calidad, ambiental y SST en sectores como minería, transporte, metalmecánica y logística. Lead Auditor IRCA certificado en ISO 9001, 14001, 45001 y 39001.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {["IRCA", "TapRoot", "RUC", "Norsok"].map((b) => (
                  <span key={b} className="bg-navy-light text-primary text-xs font-heading font-medium px-3 py-1 rounded-full">{b}</span>
                ))}
              </div>
              <a href="#" className="inline-flex items-center justify-center mt-4 w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Closing quote */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container mx-auto text-center">
            <p className="text-accent font-body italic text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              "Aportar juntos al crecimiento de la economía, el cuidado del medio ambiente y el bienestar social."
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Nosotros;
