import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 - Logo */}
          <div>
            <Link to="/" className="font-heading font-bold text-2xl tracking-tight">QUEST</Link>
            <p className="mt-4 text-sm leading-relaxed text-[hsl(215,20%,65%)]">
              {t("footer.description")}
            </p>
          </div>

          {/* Col 2 - Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">{t("footer.services")}</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/servicios/consultoria-y-asesoria" className="text-sm text-[hsl(215,20%,65%)] hover:text-accent transition-colors">{t("services.consultoria.title")}</Link>
              <Link to="/servicios/estrategias-e-intervencion" className="text-sm text-[hsl(215,20%,65%)] hover:text-accent transition-colors">{t("services.estrategias.title")}</Link>
              <Link to="/servicios/formacion-especializada" className="text-sm text-[hsl(215,20%,65%)] hover:text-accent transition-colors">{t("services.formacion.title")}</Link>
              <Link to="/servicios/transformacion-digital" className="text-sm text-[hsl(215,20%,65%)] hover:text-accent transition-colors">{t("services.digital.title")}</Link>
            </div>
          </div>

          {/* Col 3 - Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">{t("footer.company")}</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/nosotros" className="text-sm text-[hsl(215,20%,65%)] hover:text-accent transition-colors">{t("nav.about")}</Link>
              <Link to="/contacto" className="text-sm text-[hsl(215,20%,65%)] hover:text-accent transition-colors">{t("nav.contact")}</Link>
            </div>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">{t("footer.contact")}</h4>
            <div className="flex flex-col gap-2.5 text-sm text-[hsl(215,20%,65%)]">
              <span>{t("contact.info.phone")}</span>
              <span>{t("contact.info.email")}</span>
              <span>{t("contact.info.address")}</span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[hsl(215,20%,30%)] flex items-center justify-center text-[hsl(215,20%,65%)] hover:border-accent hover:text-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-[hsl(215,20%,18%)] mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
