import { useTranslation } from "react-i18next";
import { equipo } from "@/data/team";
import { motion } from "framer-motion";
import { User, Linkedin, Mail } from "lucide-react";

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 md:py-20 bg-background"
    >
      <div className="container mx-auto text-center">
        <h2 className="font-heading font-bold text-3xl text-primary mb-10">{t("team.title")}</h2>
        <div className="flex justify-center">
          {equipo.map((member, i) => (
            <div key={i} className="bg-card rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl w-full">
              <div className="md:w-1/3">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <User className="w-24 h-24 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className="md:w-2/3 p-8 text-left">
                <p className="text-accent font-semibold text-sm uppercase tracking-wider">Liderazgo</p>
                <h3 className="font-heading font-bold text-2xl text-primary mt-2">{member.name}</h3>
                <p className="text-muted-foreground mt-1">{t(member.role)}</p>
                <p className="text-foreground text-sm mt-4 leading-relaxed">
                  {t(member.bio)}
                </p>
                <div className="flex items-center gap-4 mt-6">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  <a href="mailto:info@questjuntos.com" className="text-muted-foreground hover:text-accent transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
