import { GraduationCap } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicesDetails } from "@/data/services";

const FormacionEspecializada = () => {
  const data = servicesDetails["formacion-especializada"];

  return (
    <ServicePageTemplate
      icon={GraduationCap}
      title={data.title}
      breadcrumb={data.breadcrumb}
      description={data.description}
      subservices={data.subservices}
    />
  );
};

export default FormacionEspecializada;
