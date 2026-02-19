import { ClipboardCheck } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const subservices = [
  {
    title: "Sistemas de Gestión",
    items: [
      "Gestión integral de riesgos",
      "Sistema de Gestión para la Responsabilidad social empresarial (ISO 26000)",
      "Requisitos normativos legales en SST y gestión ambiental",
      "Integración de sistemas de gestión HSEQ",
    ],
    badges: ["Decreto 1072:15", "Res.0312:19", "ISO 45001:18", "RUC", "Norsok", "ISO 14001:2015", "ISO 9001:2015", "ISO 39001:2012"],
  },
  {
    title: "Gestión de la Contratación con Terceros",
    items: [
      "Gestión integral de proveedores",
      "Control de contratistas",
      "Auditorías a proveedores",
      "Asesoría jurídica en realización de contratos",
    ],
  },
  {
    title: "Auditorías de Sistemas de Gestión Integradas",
    items: [
      "Sistema de gestión ambiental (Decreto 1076:15, ISO 14001:2015)",
      "Sistema de Gestión de Calidad (ISO 9001:2015)",
      "Sistema de Gestión de responsabilidad social (ISO 26000:2010)",
      "Sistema de gestión en SST (Decreto 1072:15, Res.0312:19, ISO 45001:18, RUC, Norsok)",
    ],
  },
];

const ConsultoriaAsesoria = () => (
  <ServicePageTemplate
    icon={ClipboardCheck}
    title="Consultoría y Asesoría"
    breadcrumb="Consultoría y Asesoría"
    description="Te acompañamos en el desarrollo de los procesos de tu organización, brindando servicios técnicos especializados para una operación más segura y que garantice la continuidad del negocio."
    subservices={subservices}
  />
);

export default ConsultoriaAsesoria;
