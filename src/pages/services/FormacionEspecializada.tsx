import { GraduationCap } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const subservices = [
  { title: "Formación especializada para el desarrollo de sistemas de gestión", items: ["Programas adaptados a la normativa vigente y necesidades del cliente"] },
  { title: "Mejora de procesos", items: ["Herramientas y metodologías para la optimización continua"] },
  { title: "Programas de Formación en SST", items: ["Capacitación integral en Seguridad y Salud en el Trabajo"] },
  { title: "Buenas prácticas para la gestión de proyectos PMI®", items: ["Formación alineada a los estándares del Project Management Institute"] },
  { title: "Comunidad saludable", items: ["Programas enfocados en bienestar y salud comunitaria"] },
  { title: "Campañas lúdicas", items: ["Estrategias creativas de sensibilización y aprendizaje"] },
];

const FormacionEspecializada = () => (
  <ServicePageTemplate
    icon={GraduationCap}
    title="Formación Especializada"
    breadcrumb="Formación Especializada"
    description="Creemos en la formación e innovación como herramientas transformadoras, generadoras de cambio, apuntando al desarrollo de procesos empresariales y sociales para potencializar la mejora continua."
    subservices={subservices}
  />
);

export default FormacionEspecializada;
