import { Shield } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicesDetails } from "@/data/services";

const EstrategiasIntervencion = () => {
  const data = servicesDetails["estrategias-e-intervencion"];

  return (
    <ServicePageTemplate
      icon={Shield}
      title={data.title}
      breadcrumb={data.breadcrumb}
      description={data.description}
      subservices={data.subservices}
    />
  );
};

export default EstrategiasIntervencion;
