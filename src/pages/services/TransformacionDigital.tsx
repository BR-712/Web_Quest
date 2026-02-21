import { Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicesDetails } from "@/data/services";

const TransformacionDigital = () => {
  const { t } = useTranslation();
  const data = servicesDetails["transformacion-digital"];

  return (
    <ServicePageTemplate
      icon={Monitor}
      title={data.title}
      breadcrumb={data.breadcrumb}
      description={data.description}
      subservices={data.subservices}
    >
      {/* QuestAudit card */}
      <div className="mt-10 border-2 border-gold rounded-xl p-8 relative overflow-hidden">
        <span className="absolute top-4 right-4 bg-gold text-gold-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">
          {t("services.digital.quest_audit.tag")}
        </span>
        <h3 className="font-heading font-bold text-xl text-primary mb-2">
          {t("services.digital.quest_audit.title")}
        </h3>
        <p className="text-foreground text-sm leading-relaxed mb-2">
          {t("services.digital.quest_audit.desc")}
        </p>
        <p className="text-muted-foreground text-sm mb-4">
          {t("services.digital.quest_audit.footer")}
        </p>
        <a
          href={`https://wa.me/573176800661?text=${encodeURIComponent(t("services.digital.quest_audit.whatsapp_message"))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-heading font-medium text-sm hover:underline"
        >
          {t("services.digital.quest_audit.cta")}
        </a>
      </div>
    </ServicePageTemplate>
  );
};

export default TransformacionDigital;
