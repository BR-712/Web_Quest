import { Shield } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const subservices = [
  {
    title: "Movilidad Segura",
    items: [
      "Plan estratégico de seguridad vial",
      "Estrategias de prevención de riesgo",
      "Formación en movilidad",
      "Normatividad transporte en servicio público",
      "Transporte de mercancías peligrosas (Res. 1409)",
    ],
  },
  {
    title: "Riesgo Químico",
    items: [
      "Gestión integral del Riesgo Químico",
      "SGA (Sistema Globalmente Armonizado)",
      "Matriz de compatibilidad",
      "Áreas Clasificadas",
    ],
  },
  {
    title: "Higiene Industrial",
    items: ["Asesoría e intervención", "Trazabilidad"],
  },
  {
    title: "Medicina Laboral",
    items: [
      "Calificación y manejo de casos complejos",
      "Ausentismo",
      "Sistemas de vigilancia",
    ],
  },
  {
    title: "Otros servicios",
    items: [
      "Disminución de defectos",
      "Intervención de accidentalidad",
      "Riesgo con Radiaciones",
      "Tareas de alto riesgo",
    ],
  },
];

const EstrategiasIntervencion = () => (
  <ServicePageTemplate
    icon={Shield}
    title="Estrategias y Proyectos de Intervención"
    breadcrumb="Estrategias e Intervención"
    description="Diseñamos y desarrollamos estrategias y proyectos de intervención de riesgos y mejora alineados al contexto de tu organización, orientando las respuestas a riesgos potenciales."
    subservices={subservices}
  />
);

export default EstrategiasIntervencion;
