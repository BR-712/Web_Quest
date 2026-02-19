import { Monitor } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const subservices = [
  { title: "Asesoría en automatización de procesos", items: ["Análisis, diseño e implementación de flujos automatizados para sistemas de gestión"] },
  { title: "Soporte/asesoría técnica en SG para desarrollo de software", items: ["Acompañamiento técnico para integrar sistemas de gestión en soluciones de software"] },
  { title: "Implementación de aplicativos (Distribuidores autorizados)", items: ["Instalación, configuración y soporte de herramientas digitales para gestión empresarial"] },
];

const TransformacionDigital = () => (
  <ServicePageTemplate
    icon={Monitor}
    title="Transformación Digital de Sistemas de Gestión"
    breadcrumb="Transformación Digital"
    description="La automatización e incorporación de tecnologías son claves para un mejor desempeño de los procesos, haciendo que estos sean más eficientes, flexibles y confiables."
    subservices={subservices}
  >
    {/* QuestAudit card */}
    <div className="mt-10 border-2 border-gold rounded-xl p-8 relative overflow-hidden">
      <span className="absolute top-4 right-4 bg-gold text-gold-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">Próximamente</span>
      <h3 className="font-heading font-bold text-xl text-primary mb-2">QuestAudit — Plataforma Digital de Auditoría</h3>
      <p className="text-foreground text-sm leading-relaxed mb-2">
        Estamos desarrollando una plataforma propia que digitaliza el ciclo completo de auditoría, desde la planificación hasta el seguimiento de hallazgos con inteligencia artificial.
      </p>
      <p className="text-muted-foreground text-sm mb-4">Próximamente en 2026</p>
      <a
        href="https://wa.me/573176800661?text=Hola%20Quest%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20QuestAudit."
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent font-heading font-medium text-sm hover:underline"
      >
        ¿Te interesa? Escríbenos para saber más →
      </a>
    </div>
  </ServicePageTemplate>
);

export default TransformacionDigital;
