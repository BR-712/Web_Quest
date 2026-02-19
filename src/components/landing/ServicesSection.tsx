import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ClipboardCheck, Shield, GraduationCap, Monitor, ArrowRight } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Consultoría y Asesoría",
    description: "Sistemas de gestión, auditorías integradas y gestión de contratación con terceros para operaciones seguras y continuas.",
    tags: ["ISO 9001", "ISO 14001", "ISO 45001", "HSEQ"],
    path: "/servicios/consultoria-y-asesoria",
    color: "accent" as const,
  },
  {
    icon: Shield,
    title: "Estrategias e Intervención",
    description: "Proyectos de intervención de riesgos alineados al contexto de tu organización, desde seguridad vial hasta higiene industrial.",
    tags: ["SST", "Riesgo Químico", "Medicina Laboral"],
    path: "/servicios/estrategias-e-intervencion",
    color: "gold" as const,
  },
  {
    icon: GraduationCap,
    title: "Formación Especializada",
    description: "Programas de formación en sistemas de gestión, SST y gestión de proyectos PMI® para el desarrollo de tu equipo.",
    tags: ["PMI®", "SST", "Mejora Continua"],
    path: "/servicios/formacion-especializada",
    color: "accent" as const,
  },
  {
    icon: Monitor,
    title: "Transformación Digital",
    description: "Automatización de procesos y asesoría técnica para digitalizar tus sistemas de gestión con herramientas modernas.",
    tags: ["Automatización", "Software", "Aplicativos"],
    path: "/servicios/transformacion-digital",
    color: "gold" as const,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-12"
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
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
                  service.color === "accent" ? "border-t-accent" : "border-t-gold"
                }`}
              >
                <service.icon className={`w-10 h-10 md:w-12 md:h-12 mb-4 ${service.color === "accent" ? "text-accent" : "text-gold"}`} />
                <h3 className="font-heading font-semibold text-lg md:text-xl text-primary mb-2">{service.title}</h3>
                <p className="text-foreground text-sm md:text-base leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span key={tag} className="bg-navy-light text-primary text-xs font-heading font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-accent font-heading font-medium text-sm">
                  Ver más <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
