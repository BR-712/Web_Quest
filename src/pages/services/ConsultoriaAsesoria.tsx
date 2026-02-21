import { ClipboardCheck } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicesDetails } from "@/data/services";

const ConsultoriaAsesoria = () => {
  const data = servicesDetails["consultoria-y-asesoria"];

  return (
    <ServicePageTemplate
      icon={ClipboardCheck}
      title={data.title}
      breadcrumb={data.breadcrumb}
      description={data.description}
      subservices={data.subservices}
    />
  );
};

export default ConsultoriaAsesoria;
