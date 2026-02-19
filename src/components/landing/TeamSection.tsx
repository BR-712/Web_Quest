import { motion } from "framer-motion";
import { Linkedin, User } from "lucide-react";

const teamMembers = [
  {
    name: "Jorge López Ramos",
    role: "Business Partner · Lead Auditor",
    bio: "Ingeniero Industrial con más de 14 años de experiencia liderando procesos de gestión de calidad, ambiental y SST en sectores como minería, transporte, metalmecánica y logística. Lead Auditor IRCA certificado en ISO 9001, 14001, 45001 y 39001.",
    badges: ["IRCA", "TapRoot", "RUC", "Norsok"],
    linkedin: "#",
  },
];

const TeamSection = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-3"
        >
          Nuestro Equipo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Trabajamos de manera permanente en nuestro equipo de colaboradores, apoyándonos en la formación e innovación como herramientas transformadoras.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-xl shadow-sm p-8 text-center"
            >
              {/* Photo placeholder */}
              <div className="w-40 h-40 rounded-full border-[3px] border-gold bg-secondary flex items-center justify-center mx-auto mb-5">
                <User className="w-16 h-16 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary">{member.name}</h3>
              <p className="text-accent font-body text-sm mt-1">{member.role}</p>
              <p className="text-muted-foreground text-sm mt-4 leading-relaxed">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {member.badges.map((b) => (
                  <span key={b} className="bg-navy-light text-primary text-xs font-heading font-medium px-3 py-1 rounded-full">{b}</span>
                ))}
              </div>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center mt-4 w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
