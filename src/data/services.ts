export type ServicioOverview = {
  id: "consultoria-y-asesoria" | "estrategias-e-intervencion" | "formacion-especializada" | "transformacion-digital";
  title: string;
  description: string;
  tags: string[];
  path: string;
  accent: "accent" | "gold";
  icon: "ClipboardCheck" | "Shield" | "GraduationCap" | "Monitor";
};

export const serviciosOverview: ServicioOverview[] = [
  {
    id: "consultoria-y-asesoria",
    title: "services.consultoria.title",
    description: "services.consultoria.desc",
    tags: ["services.tags.iso9001", "services.tags.iso14001", "services.tags.iso45001", "services.tags.hseq"],
    path: "/servicios/consultoria-y-asesoria",
    accent: "accent",
    icon: "ClipboardCheck",
  },
  {
    id: "estrategias-e-intervencion",
    title: "services.estrategias.title",
    description: "services.estrategias.desc",
    tags: ["services.tags.sst", "services.tags.riesgo_quimico", "services.tags.medicina_laboral"],
    path: "/servicios/estrategias-e-intervencion",
    accent: "gold",
    icon: "Shield",
  },
  {
    id: "formacion-especializada",
    title: "services.formacion.title",
    description: "services.formacion.desc",
    tags: ["services.tags.pmi", "services.tags.sst", "services.tags.mejora_continua"],
    path: "/servicios/formacion-especializada",
    accent: "accent",
    icon: "GraduationCap",
  },
  {
    id: "transformacion-digital",
    title: "services.digital.title",
    description: "services.digital.desc",
    tags: ["services.tags.automatizacion", "services.tags.software", "services.tags.aplicativos"],
    path: "/servicios/transformacion-digital",
    accent: "gold",
    icon: "Monitor",
  },
];

export interface SubService {
  title: string;
  itemsKey: string;
  badges?: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  breadcrumb: string;
  description: string;
  subservices: SubService[];
}

export const servicesDetails: Record<string, ServiceDetail> = {
  "consultoria-y-asesoria": {
    id: "consultoria-y-asesoria",
    title: "services.consultoria.title",
    breadcrumb: "services.consultoria.title",
    description: "services.consultoria.full_desc",
    subservices: [
      {
        title: "services.consultoria.subservices.sistemas.title",
        itemsKey: "services.consultoria.subservices.sistemas.items",
        badges: [
          "services.badges.decreto_1072_15",
          "services.badges.res_0312_19",
          "services.badges.iso_45001_18",
          "services.badges.ruc",
          "services.badges.norsok",
          "services.badges.iso_14001_2015",
          "services.badges.iso_9001_2015",
          "services.badges.iso_39001_2012",
        ],
      },
      {
        title: "services.consultoria.subservices.contratacion.title",
        itemsKey: "services.consultoria.subservices.contratacion.items",
      },
      {
        title: "services.consultoria.subservices.auditorias.title",
        itemsKey: "services.consultoria.subservices.auditorias.items",
      },
    ],
  },
  "estrategias-e-intervencion": {
    id: "estrategias-e-intervencion",
    title: "services.estrategias.title",
    breadcrumb: "services.estrategias.title",
    description: "services.estrategias.full_desc",
    subservices: [
      {
        title: "services.estrategias.subservices.movilidad.title",
        itemsKey: "services.estrategias.subservices.movilidad.items",
      },
      {
        title: "services.estrategias.subservices.quimico.title",
        itemsKey: "services.estrategias.subservices.quimico.items",
      },
      {
        title: "services.estrategias.subservices.higiene.title",
        itemsKey: "services.estrategias.subservices.higiene.items",
      },
      {
        title: "services.estrategias.subservices.medicina.title",
        itemsKey: "services.estrategias.subservices.medicina.items",
      },
      {
        title: "services.estrategias.subservices.otros.title",
        itemsKey: "services.estrategias.subservices.otros.items",
      },
    ],
  },
  "formacion-especializada": {
    id: "formacion-especializada",
    title: "services.formacion.title",
    breadcrumb: "services.formacion.title",
    description: "services.formacion.full_desc",
    subservices: [
      {
        title: "services.formacion.subservices.gestion.title",
        itemsKey: "services.formacion.subservices.gestion.items",
      },
      {
        title: "services.formacion.subservices.procesos.title",
        itemsKey: "services.formacion.subservices.procesos.items",
      },
      {
        title: "services.formacion.subservices.sst.title",
        itemsKey: "services.formacion.subservices.sst.items",
      },
      {
        title: "services.formacion.subservices.pmi.title",
        itemsKey: "services.formacion.subservices.pmi.items",
      },
      {
        title: "services.formacion.subservices.comunidad.title",
        itemsKey: "services.formacion.subservices.comunidad.items",
      },
      {
        title: "services.formacion.subservices.ludicas.title",
        itemsKey: "services.formacion.subservices.ludicas.items",
      },
    ],
  },
  "transformacion-digital": {
    id: "transformacion-digital",
    title: "services.digital.title",
    breadcrumb: "services.digital.title",
    description: "services.digital.full_desc",
    subservices: [
      {
        title: "services.digital.subservices.automatizacion.title",
        itemsKey: "services.digital.subservices.automatizacion.items",
      },
      {
        title: "services.digital.subservices.software.title",
        itemsKey: "services.digital.subservices.software.items",
      },
      {
        title: "services.digital.subservices.aplicativos.title",
        itemsKey: "services.digital.subservices.aplicativos.items",
      },
    ],
  },
};
