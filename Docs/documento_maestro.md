# 🧭 QUEST ESTRATEGIAS Y SOSTENIBILIDAD — DOCUMENTO MAESTRO DE PROYECTO

> **Versión:** 2.0 (Actualizado para Vite + React Router + shadcn-ui)
> **Fecha:** 19 de febrero de 2026
> **Tipo de proyecto:** Rediseño web completo
> **Metodología:** Vibe Coding con asistencia IA (Trae.ai)
> **Estado:** En desarrollo — Proyecto clonado desde Lovable, dependencias instaladas

---

## ÍNDICE

1. [Contexto del Proyecto](#1-contexto-del-proyecto)
2. [Objetivos y KPIs](#2-objetivos-y-kpis)
3. [Stack Tecnológico (Actual)](#3-stack-tecnológico-actual)
4. [Estructura de Carpetas](#4-estructura-de-carpetas)
5. [Sistema de Diseño](#5-sistema-de-diseño)
6. [Arquitectura de Páginas y Rutas](#6-arquitectura-de-páginas-y-rutas)
7. [Especificación por Página](#7-especificación-por-página)
8. [Componentes Reutilizables](#8-componentes-reutilizables)
9. [Sistema de Internacionalización (i18n)](#9-sistema-de-internacionalización-i18n)
10. [Funcionalidades Específicas](#10-funcionalidades-específicas)
11. [SEO y Metadatos](#11-seo-y-metadatos)
12. [Base de Datos de Contenido](#12-base-de-datos-de-contenido)
13. [Guía de Despliegue](#13-guía-de-despliegue)
14. [Fases de Desarrollo](#14-fases-de-desarrollo)
15. [Checklist de Calidad](#15-checklist-de-calidad)

---

## 1. CONTEXTO DEL PROYECTO

### Sobre la empresa

**Quest Estrategias y Sostenibilidad S.A.S.** es una consultora colombiana fundada hace 6 años, con sede en Barranquilla, Colombia. Se especializa en auditoría, consultoría en sistemas de gestión, intervención de riesgos, formación empresarial y transformación digital de sistemas de gestión.

### Líder

**Jorge López Ramos** — Business Partner / Lead Auditor
- Ingeniero Industrial
- Especialista en Salud Ocupacional
- Lead Auditor IRCA: ISO 9001, 14001, 45001, 39001
- Certificado TapRoot (investigación de incidentes y análisis de causa raíz)
- Certificado RUC, Norsok
- +14 años de experiencia
- Sectores: minería, metalmecánica, ferroviaria, transporte, aduanera, comercio internacional, logística, salud, construcción, educación

### Datos clave para contenido

| Métrica | Valor |
|---------|-------|
| Años de operación | +6 años |
| Empresas atendidas (directas) | 12 empresas |
| Empresas atendidas (alianza Suramericana) | +25 empresas |
| Total empresas impactadas | +35 empresas |
| Sectores cubiertos | +8 sectores |
| Normas/estándares manejados | +10 (ISO 9001, 14001, 45001, 26000, 39001, HSEQ, RUC, Norsok, Decreto 1072:15, Res.0312:19) |

### Contacto actual

| Canal | Dato |
|-------|------|
| WhatsApp | +57 317 680 0661 |
| Email | info@questjuntos.com |
| Dominio | questjuntos.com (registrado en ColombiaHosting) |
| LinkedIn | Por confirmar URL exacta |
| Instagram | Por confirmar URL exacta |
| Facebook | Por confirmar URL exacta |

### Problemas del sitio actual (lo que estamos resolviendo)

1. Construido en Mobirise (2020) — tecnología obsoleta
2. Google no indexa ninguna página (SEO muerto)
3. Contenido genérico sin jerarquía visual
4. Sin prueba social fuerte (solo 2 logos de clientes visibles, pero tienen +35)
5. Solo 1 persona visible en equipo
6. Sin CTAs claros ni WhatsApp flotante
7. No es responsive real
8. Copyright 2020 — transmite inactividad

---

## 2. OBJETIVOS Y KPIs

### Objetivos principales

1. **Visibilidad:** Que Google indexe todas las páginas (pasar de 0 a 7+ páginas indexadas)
2. **Conversión:** Generar leads a través de formulario y WhatsApp
3. **Credibilidad:** Mostrar experiencia, clientes y certificaciones de forma profesional
4. **Escalabilidad:** Estructura preparada para agregar QuestAudit, más miembros de equipo y blog
5. **Alcance:** Soporte bilingüe español/inglés para clientes internacionales

### KPIs objetivo post-lanzamiento

- Tiempo de carga: < 2 segundos (Lighthouse Performance > 90)
- Lighthouse SEO: > 95
- Lighthouse Accessibility: > 90
- Páginas indexadas en Google: 7+
- Tasa de contacto: > 3% de visitantes

---

## 3. STACK TECNOLÓGICO (ACTUAL)

> ⚠️ **IMPORTANTE:** Este proyecto fue generado por Lovable y usa **Vite + React Router**, NO Next.js. Todo el desarrollo debe seguir este stack.

### Core (ya instalado)

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| **Vite** | 5.4+ | Bundler y dev server |
| **React** | 18.3+ | UI Framework |
| **TypeScript** | 5.8+ | Tipado estático |
| **React Router DOM** | 6.30+ | Routing (SPA multi-página) |
| **Tailwind CSS** | 3.4+ | Estilos utility-first |
| **shadcn-ui** | (Radix primitives) | Componentes UI base |
| **Framer Motion** | 12+ | Animaciones y transiciones |
| **Lucide React** | 0.462+ | Librería de íconos |
| **React Hook Form** | 7.61+ | Manejo de formularios |
| **Zod** | 3.25+ | Validación de esquemas |
| **clsx + tailwind-merge** | ya instalado | Utilidades de clases CSS |
| **Sonner** | ya instalado | Notificaciones toast |

### Pendiente de instalar

| Librería | Propósito | Comando |
|----------|-----------|---------|
| **react-i18next + i18next** | Internacionalización ES/EN | `npm install react-i18next i18next i18next-browser-languagedetector` |
| **react-helmet-async** | Meta tags dinámicos para SEO | `npm install react-helmet-async` |
| **@emailjs/browser** | Envío de formulario sin backend | `npm install @emailjs/browser` |

### Servicios externos

| Servicio | Uso |
|----------|-----|
| **Vercel** (o Lovable Publish) | Hosting + CDN |
| **GitHub** | Repositorio de código |
| **EmailJS** (o Web3Forms / Formspree) | Envío de emails del formulario (sin backend) |
| **Google Analytics 4** | Analytics |
| **Google Search Console** | SEO monitoring |
| **ColombiaHosting** | Solo DNS del dominio questjuntos.com |

### Nota sobre formulario de contacto

Al usar Vite (sin backend/API Routes como en Next.js), el formulario se envía mediante un servicio externo. Opciones recomendadas:

**Opción A — EmailJS (recomendada, gratis hasta 200 emails/mes):**
```typescript
import emailjs from '@emailjs/browser';

emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
  from_name: formData.name,
  from_email: formData.email,
  company: formData.company,
  message: formData.message,
}, 'PUBLIC_KEY');
```

**Opción B — Web3Forms (gratis, sin registro de cuenta):**
```typescript
fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    access_key: 'TU_ACCESS_KEY',
    ...formData
  })
});
```

**Opción C — Formspree:**
```typescript
fetch('https://formspree.io/f/TU_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

---

## 4. ESTRUCTURA DE CARPETAS

> Esta estructura refleja un proyecto Vite + React Router generado por Lovable con shadcn-ui.

```
quest-web/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   │   ├── quest-logo-full.png
│   │   │   ├── quest-logo-full.webp
│   │   │   ├── quest-logo-icon.png
│   │   │   └── quest-logo-white.png
│   │   ├── team/
│   │   │   └── jorge-lopez.jpg
│   │   ├── clients/                     # Logos de clientes (cuando estén disponibles)
│   │   ├── services/                    # Imágenes de servicios
│   │   └── og/
│   │       └── og-image.png             # Open Graph image (1200x630)
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── main.tsx                          # Entry point de React
│   ├── App.tsx                           # Router principal con todas las rutas
│   ├── index.css                         # Estilos globales + Tailwind imports
│   │
│   ├── pages/                            # Páginas (una por ruta)
│   │   ├── Index.tsx                     # Landing page principal (/)
│   │   ├── Nosotros.tsx                  # Página Nosotros (/nosotros)
│   │   ├── Contacto.tsx                  # Página Contacto (/contacto)
│   │   ├── ConsultoriaAsesoria.tsx       # Servicio 1 (/servicios/consultoria-y-asesoria)
│   │   ├── EstrategiasIntervencion.tsx   # Servicio 2 (/servicios/estrategias-e-intervencion)
│   │   ├── FormacionEspecializada.tsx    # Servicio 3 (/servicios/formacion-especializada)
│   │   ├── TransformacionDigital.tsx     # Servicio 4 (/servicios/transformacion-digital)
│   │   └── NotFound.tsx                  # Página 404
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                # Navbar con scroll effect
│   │   │   ├── Footer.tsx                # Footer completo
│   │   │   ├── WhatsAppButton.tsx        # Botón flotante WhatsApp
│   │   │   └── LanguageSwitcher.tsx      # Toggle ES/EN
│   │   │
│   │   ├── home/                         # Secciones de la landing page
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── WhyQuest.tsx
│   │   │   ├── ClientsCarousel.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   ├── services/                     # Componentes para páginas de servicios
│   │   │   ├── ServiceHero.tsx
│   │   │   ├── ServiceDetail.tsx
│   │   │   └── ServiceCTA.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── ContactForm.tsx           # Formulario reutilizable
│   │   │
│   │   └── ui/                           # shadcn-ui components (ya generados por Lovable)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── textarea.tsx
│   │       ├── accordion.tsx
│   │       ├── badge.tsx
│   │       ├── separator.tsx
│   │       ├── toast.tsx
│   │       ├── tooltip.tsx
│   │       └── ... (otros componentes shadcn)
│   │
│   ├── lib/
│   │   ├── utils.ts                      # cn() helper (clsx + tailwind-merge)
│   │   └── constants.ts                  # Datos constantes
│   │
│   ├── data/                             # Datos estáticos del contenido
│   │   ├── services.ts                   # Info de los 4 servicios
│   │   ├── clients.ts                    # Lista de clientes
│   │   ├── team.ts                       # Datos del equipo
│   │   └── standards.ts                  # Certificaciones y normas
│   │
│   ├── hooks/                            # Custom hooks
│   │   ├── useScrollPosition.ts          # Para navbar scroll effect
│   │   └── useAnimateOnScroll.ts         # Para animaciones al scroll
│   │
│   └── i18n/                             # Internacionalización (Fase 3)
│       ├── index.ts                      # Config de i18next
│       ├── es.json                       # Traducciones español
│       └── en.json                       # Traducciones inglés
│
├── index.html                            # HTML entry point (Vite)
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 5. SISTEMA DE DISEÑO

### 5.1 Paleta de Colores

Derivada directamente del logo de Quest (3 colores: navy, dorado, teal).

**Configuración para tailwind.config.ts:**

```typescript
// tailwind.config.ts — extender en theme.extend.colors
colors: {
  quest: {
    navy: {
      DEFAULT: '#1B2E5A',
      50: '#EEF1F6',
      100: '#D5DAE5',
      200: '#ABB5CB',
      300: '#8190B1',
      400: '#576B97',
      500: '#1B2E5A',
      600: '#162548',
      700: '#111C36',
      800: '#0B1224',
      900: '#060912',
    },
    gold: {
      DEFAULT: '#E8A838',
      50: '#FEF7E8',
      100: '#FDEBC5',
      200: '#FBD78B',
      300: '#F9C351',
      400: '#E8A838',
      500: '#D4952A',
      600: '#B07B1F',
      700: '#8C6118',
    },
    teal: {
      DEFAULT: '#28B5A0',
      50: '#E6F7F5',
      100: '#C0ECE6',
      200: '#80D9CD',
      300: '#40C6B4',
      400: '#28B5A0',
      500: '#209E8B',
      600: '#188171',
      700: '#106457',
    },
  },
}
```

**Uso de colores:**
| Rol | Color | Uso |
|-----|-------|-----|
| `quest-navy` | #1B2E5A | Textos principales, headers, fondos premium, navbar scroll |
| `quest-gold` | #E8A838 | Botones CTA primarios, highlights, badges, borde equipo |
| `quest-teal` | #28B5A0 | Enlaces, íconos servicios, estados hover/active, borde cards |
| `gray-50` | #FAFBFC | Fondo principal |
| `gray-100` | #F0F2F5 | Fondo secciones alternas |
| `gray-700` | #374151 | Texto body |
| `gray-500` | #6B7280 | Texto secundario, labels |

### 5.2 Tipografía

**Google Fonts a importar en `index.html` o `index.css`:**

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Source+Serif+4:wght@400;500;600&display=swap" rel="stylesheet">
```

**Configuración para tailwind.config.ts:**

```typescript
fontFamily: {
  heading: ['DM Sans', 'sans-serif'],
  body: ['Source Serif 4', 'serif'],
}
```

**Reglas de uso:**
- `font-heading` (DM Sans): Navbar, títulos h1-h4, botones, labels, stats, badges
- `font-body` (Source Serif 4): Párrafos de descripción, contenido de servicios, textos largos
- Headlines siempre en `quest-navy`
- Body text en `gray-700`
- Links y elementos interactivos en `quest-teal`

**Escala tipográfica:**
| Elemento | Desktop | Mobile | Font |
|----------|---------|--------|------|
| Hero h1 | 60px (text-6xl) | 36px (text-4xl) | DM Sans Bold |
| Section h2 | 36px (text-4xl) | 28px (text-3xl) | DM Sans Bold |
| Card title h3 | 20px (text-xl) | 18px (text-lg) | DM Sans SemiBold |
| Body | 16px (text-base) | 16px | Source Serif 4 |
| Small/Labels | 14px (text-sm) | 14px | DM Sans Medium |

### 5.3 Espaciado

```css
/* Padding de secciones */
Secciones desktop: py-20 (80px top/bottom)
Secciones mobile: py-12 (48px top/bottom)

/* Container */
max-width: 1280px (max-w-7xl)
padding horizontal: px-6 (24px)
```

### 5.4 Bordes y Sombras

```css
/* Border radius */
Cards: rounded-xl (12px)
Botones: rounded-lg (8px)
Inputs: rounded-lg (8px)
Badges: rounded-full (pill)
Avatar: rounded-full

/* Sombras — con tinte navy para cohesión */
Cards: shadow-md → hover: shadow-xl
Navbar scroll: shadow-md
Formulario card: shadow-lg
```

### 5.5 Animaciones (Framer Motion)

```typescript
// === Configuraciones reutilizables ===

// Fade in desde abajo (para secciones al scroll)
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Stagger para grids y listas
export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Card hover
export const cardHover = {
  whileHover: { y: -8, transition: { duration: 0.3 } }
};

// Slide desde izquierda/derecha
export const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const slideInRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};
```

### 5.6 Gradientes y Elementos Decorativos

```css
/* Hero background */
bg-gradient-to-br from-quest-navy-500 via-quest-navy-600 to-quest-navy-700

/* Sección CTA */
bg-gradient-to-b from-quest-gold-50 to-white

/* Secciones alternas */
bg-gradient-to-b from-gray-50 to-gray-100

/* Footer */
bg-quest-navy-800
```

**Elementos decorativos:** Formas geométricas triangulares (inspiradas en el isotipo/vela del logo) como SVGs con opacidad baja en fondos de hero y secciones. Los 3 colores del logo (navy, gold, teal) aparecen en estos elementos decorativos.

---

## 6. ARQUITECTURA DE PÁGINAS Y RUTAS

### Configuración de React Router en App.tsx

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import ConsultoriaAsesoria from "./pages/ConsultoriaAsesoria";
import EstrategiasIntervencion from "./pages/EstrategiasIntervencion";
import FormacionEspecializada from "./pages/FormacionEspecializada";
import TransformacionDigital from "./pages/TransformacionDigital";
import NotFound from "./pages/NotFound";

// Layout components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios/consultoria-y-asesoria" element={<ConsultoriaAsesoria />} />
          <Route path="/servicios/estrategias-e-intervencion" element={<EstrategiasIntervencion />} />
          <Route path="/servicios/formacion-especializada" element={<FormacionEspecializada />} />
          <Route path="/servicios/transformacion-digital" element={<TransformacionDigital />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
```

### Mapa de rutas completo

| Ruta | Página | Archivo |
|------|--------|---------|
| `/` | Landing Page Principal | `pages/Index.tsx` |
| `/nosotros` | Sobre Quest | `pages/Nosotros.tsx` |
| `/contacto` | Formulario + Datos | `pages/Contacto.tsx` |
| `/servicios/consultoria-y-asesoria` | Servicio 1 | `pages/ConsultoriaAsesoria.tsx` |
| `/servicios/estrategias-e-intervencion` | Servicio 2 | `pages/EstrategiasIntervencion.tsx` |
| `/servicios/formacion-especializada` | Servicio 3 | `pages/FormacionEspecializada.tsx` |
| `/servicios/transformacion-digital` | Servicio 4 | `pages/TransformacionDigital.tsx` |
| `*` | Error 404 | `pages/NotFound.tsx` |

**Total: 8 rutas (7 páginas + 404)**

### Layout Global (presente en todas las páginas)

- **Navbar** (fijo en top, transparente en hero → sólido blanco al scroll)
- **Footer** (completo con sitemap, redes, datos de contacto)
- **WhatsApp Flotante** (botón fijo esquina inferior derecha)

---

## 7. ESPECIFICACIÓN POR PÁGINA

### 7.1 LANDING PAGE PRINCIPAL ( / ) — `pages/Index.tsx`

Esta es la página más importante. Debe convencer a un visitante en 5 segundos de que Quest es la consultora correcta. Se compone de 7 secciones importadas como componentes.

```typescript
// pages/Index.tsx
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyQuest from "@/components/home/WhyQuest";
import ClientsCarousel from "@/components/home/ClientsCarousel";
import TeamSection from "@/components/home/TeamSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <>
    <HeroSection />
    <StatsSection />
    <ServicesOverview />
    <WhyQuest />
    <ClientsCarousel />
    <TeamSection />
    <CTASection />
  </>
);
```

---

#### COMPONENTE: HeroSection.tsx

**Layout:** Full-width, fondo oscuro con gradiente navy, altura min-h-[90vh] desktop / min-h-[80vh] mobile.

**Contenido:**
```
[Headline — font-heading, text-6xl desktop / text-4xl mobile, blanco, font-bold]
"Construimos juntos estrategias para un futuro sostenible"

[Subheadline — font-body, text-xl, text-slate-300, max-w-2xl]
"Consultoría, auditoría y formación en sistemas de gestión para
organizaciones que buscan operar de forma segura, eficiente y responsable."

[CTA Primario — botón bg-quest-gold text-quest-navy, tamaño lg, rounded-lg]
"Agenda una consulta gratuita" → abre WhatsApp con mensaje predefinido

[CTA Secundario — botón border-white text-white variant outline, tamaño lg]
"Conoce nuestros servicios" → scroll suave al id="servicios"
```

**Fondo:** `bg-gradient-to-br from-quest-navy via-quest-navy-600 to-quest-navy-700` con formas triangulares decorativas (SVGs) en opacidad baja.

**Animación:** Headlines con fade-in staggered (headline → subheadline 200ms → CTAs 400ms).

---

#### COMPONENTE: StatsSection.tsx

**Layout:** Fondo blanco, grid de 4 columnas (grid-cols-4 desktop, grid-cols-2 tablet, grid-cols-1 mobile).

**Datos:**
```typescript
const stats = [
  { icon: "Calendar", value: 6, prefix: "+", label: "Años de experiencia" },
  { icon: "Building2", value: 35, prefix: "+", label: "Empresas atendidas" },
  { icon: "Layers", value: 8, prefix: "+", label: "Sectores cubiertos" },
  { icon: "ShieldCheck", value: 10, prefix: "+", label: "Estándares ISO" },
];
```

**Cada stat:**
- Ícono Lucide en `text-quest-teal` (32px)
- Número con animación contador de 0 al valor final (cuando entra al viewport)
- Número: `font-heading text-5xl font-bold text-quest-navy`
- Label: `font-body text-base text-gray-500`

---

#### COMPONENTE: ServicesOverview.tsx

**Layout:** Fondo `bg-gray-50`, grid de 4 cards.
**Section id:** `id="servicios"` (para scroll desde hero).

**Heading centrado:** "Nuestros Servicios"

**Cards:**

| # | Borde | Ícono | Título | Descripción | Tags | Link |
|---|-------|-------|--------|-------------|------|------|
| 1 | teal | ClipboardCheck | Consultoría y Asesoría | Sistemas de gestión, auditorías integradas y gestión de contratación con terceros para operaciones seguras y continuas. | ISO 9001 · ISO 14001 · ISO 45001 · HSEQ | /servicios/consultoria-y-asesoria |
| 2 | gold | Shield | Estrategias e Intervención | Proyectos de intervención de riesgos alineados al contexto de tu organización, desde seguridad vial hasta higiene industrial. | SST · Riesgo Químico · Medicina Laboral | /servicios/estrategias-e-intervencion |
| 3 | teal | GraduationCap | Formación Especializada | Programas de formación en sistemas de gestión, SST y gestión de proyectos PMI® para el desarrollo de tu equipo. | PMI® · SST · Mejora Continua | /servicios/formacion-especializada |
| 4 | gold | Monitor | Transformación Digital | Automatización de procesos y asesoría técnica para digitalizar tus sistemas de gestión con herramientas modernas. | Automatización · Software · Aplicativos | /servicios/transformacion-digital |

**Diseño de cada card:**
- `bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300`
- Borde superior: `border-t-[3px] border-quest-teal` o `border-quest-gold` (alternado)
- Ícono: 48px en el color del borde
- Tags: badges con `bg-quest-navy-50 text-quest-navy text-xs rounded-full px-3 py-1`
- Link: `text-quest-teal hover:underline` con texto "Ver más →"
- Usar `<Link to="...">` de React Router para navegación

---

#### COMPONENTE: WhyQuest.tsx

**Layout:** Fondo blanco, 2 columnas (60% texto / 40% visual decorativo).

**Heading:** "¿Por qué las organizaciones confían en Quest?"

**5 diferenciadores (lista con íconos):**

```typescript
const diferenciadores = [
  {
    icon: "Users",
    title: "Equipo interdisciplinario certificado",
    desc: "Auditores con certificaciones IRCA, TapRoot e ISO reconocidas internacionalmente."
  },
  {
    icon: "MapPin",
    title: "Cobertura nacional",
    desc: "Llegamos a cualquier lugar de Colombia aprovechando la tecnología y herramientas digitales."
  },
  {
    icon: "Handshake",
    title: "Alianzas estratégicas",
    desc: "Trabajamos en alianza con aseguradoras como Suramericana, multiplicando nuestro alcance."
  },
  {
    icon: "Cpu",
    title: "Enfoque en transformación digital",
    desc: "Incorporamos tecnología para hacer tus procesos más eficientes, flexibles y confiables."
  },
  {
    icon: "Factory",
    title: "Experiencia multisectorial",
    desc: "Minería, transporte, salud, educación, construcción, logística, comercio y más."
  },
];
```

Cada item: ícono teal a la izquierda, título en DM Sans SemiBold navy, descripción en Source Serif 4 gray-700.
**Animación:** Stagger de izquierda a derecha.
**Visual derecho:** Composición geométrica decorativa con triángulos navy/gold/teal.

---

#### COMPONENTE: ClientsCarousel.tsx

**Layout:** Fondo `bg-quest-navy` (#1B2E5A), texto blanco.

**Heading (blanco):** "Empresas que confían en Quest"
**Subheading (slate-400):** "Hemos trabajado con más de 35 organizaciones fortaleciendo su desarrollo sostenible."

**Marquee infinito (2 filas):**
- Fila 1 (izquierda → derecha): nombres de clientes directos
- Fila 2 (derecha → izquierda): nombres de clientes alianza Suramericana

Como no tenemos los logos reales, cada logo es un **placeholder rectangular** con el nombre de la empresa en texto blanco sobre fondo `rgba(255,255,255,0.1)`, `rounded-lg px-6 py-3`.

**Badge debajo:** "En alianza con Seguros de Vida Suramericana S.A." con borde dorado y texto dorado.

**CSS del marquee:**
```css
@keyframes marquee-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes marquee-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
.animate-marquee-left { animation: marquee-left 30s linear infinite; }
.animate-marquee-right { animation: marquee-right 30s linear infinite; }
.animate-marquee-left:hover, .animate-marquee-right:hover { animation-play-state: paused; }
```

Los elementos del marquee se duplican en el DOM para crear el efecto infinito sin saltos.

---

#### COMPONENTE: TeamSection.tsx

**Layout:** Fondo blanco, centrado.
**Heading:** "Nuestro Equipo"
**Subheading:** "Trabajamos de manera permanente en nuestro equipo de colaboradores, apoyándonos en la formación e innovación como herramientas transformadoras."

**Estructura escalable (grid que acepta múltiples cards):**

```typescript
// data/team.ts
export const equipo = [
  {
    name: "Jorge López Ramos",
    role: "Business Partner · Lead Auditor",
    photo: "/images/team/jorge-lopez.jpg", // placeholder si no existe
    bio: "Ingeniero Industrial con más de 14 años de experiencia liderando procesos de gestión de calidad, ambiental y SST en sectores como minería, transporte, metalmecánica y logística. Lead Auditor IRCA certificado en ISO 9001, 14001, 45001 y 39001.",
    certifications: ["IRCA", "TapRoot", "RUC", "Norsok"],
    linkedin: "", // URL por confirmar
  },
  // → Agregar más miembros aquí en el futuro
];
```

**Card de miembro:**
- Foto circular (200x200) con borde `border-[3px] border-quest-gold`
- Nombre: `font-heading text-2xl font-bold text-quest-navy`
- Cargo: `font-body text-base text-quest-teal`
- Bio: `font-body text-gray-700`
- Badges de certificaciones: `bg-quest-navy-50 text-quest-navy text-xs rounded-full px-3 py-1`
- LinkedIn icon clickeable

**Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8` — actualmente 1 card centrada, pero el grid soporta más.

---

#### COMPONENTE: CTASection.tsx

**Layout:** Fondo `bg-gradient-to-b from-quest-gold-50 to-white`, 2 columnas.

**Columna izquierda:**
- Heading: "¿Listo para construir juntos?"
- Texto: "Cuéntanos sobre tu organización y un consultor se pondrá en contacto contigo en menos de 24 horas."
- Info contacto: 📱 +57 317 680 0661 / 📧 info@questjuntos.com / 📍 Barranquilla, Colombia
- Botón WhatsApp grande: `bg-[#25D366] text-white` "Escríbenos por WhatsApp"

**Columna derecha:** `<ContactForm />` (componente reutilizable).

---

#### COMPONENTE: ContactForm.tsx (reutilizable en Landing y Contacto)

**Card blanca con shadow-lg, rounded-2xl, p-8.**

**Campos:**
```typescript
const formSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  company: z.string().min(2, "La empresa es requerida"),
  companySize: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().optional(),
});
```

| Campo | Tipo | Requerido | Opciones |
|-------|------|-----------|----------|
| Nombre completo | text input | Sí | — |
| Correo electrónico | email input | Sí | — |
| Empresa | text input | Sí | — |
| Tamaño de empresa | select (shadcn) | No | 1-10 / 11-50 / 51-200 / 200+ empleados |
| Servicio de interés | select (shadcn) | No | Consultoría y Asesoría / Estrategias e Intervención / Formación Especializada / Transformación Digital / Otro |
| Mensaje | textarea | No | — |

**Botón submit:** `bg-quest-gold text-quest-navy w-full rounded-lg font-heading font-semibold`
- Loading: muestra spinner + "Enviando..."
- Success: toast de Sonner con "¡Mensaje enviado! Te contactaremos pronto."
- Error: toast de Sonner con "Error al enviar. Intenta de nuevo o escríbenos por WhatsApp."

**Focus de inputs:** borde cambia a `border-quest-teal` al recibir focus.

---

### 7.2 NAVBAR — `components/layout/Navbar.tsx`

**Comportamiento de scroll:**
```typescript
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 100);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**Sin scroll (hero):** `bg-transparent text-white`
**Con scroll (>100px):** `bg-white text-quest-navy shadow-md`
**Transición:** `transition-all duration-300`

**Contenido:**
- Logo Quest (blanco sin scroll / color con scroll)
- Links: Inicio, Servicios (dropdown con los 4), Nosotros, Contacto
- Toggle idioma: ES | EN (pill)
- Botón CTA: "Contáctanos" → link a /contacto

**Mobile:** Hamburger icon → slide-in panel desde la derecha con todos los links.

**Dropdown de Servicios (desktop):**
Usa el componente NavigationMenu de shadcn-ui (ya instalado vía @radix-ui/react-navigation-menu).

---

### 7.3 FOOTER — `components/layout/Footer.tsx`

**Fondo:** `bg-quest-navy-800` (#0B1224)
**Layout:** 4 columnas desktop (grid-cols-4), 2x2 tablet, stacked mobile.

**Columna 1:** Logo (texto "QUEST" en blanco como placeholder) + descripción en slate-400
**Columna 2 — "Servicios":** 4 links a páginas de servicios
**Columna 3 — "Empresa":** Links a Nosotros, Contacto
**Columna 4 — "Contacto":** Teléfono, email, ubicación + íconos redes sociales

**Copyright:** "© 2026 Quest Estrategias y Sostenibilidad S.A.S. Todos los derechos reservados."

---

### 7.4 WHATSAPP FLOTANTE — `components/layout/WhatsAppButton.tsx`

- Posición: `fixed bottom-6 right-6 z-50`
- Tamaño: `w-14 h-14 rounded-full`
- Color: `bg-[#25D366]` con sombra
- Ícono: SVG de WhatsApp blanco centrado
- Hover: `hover:scale-110 transition-transform`
- Aparece con fade-in después de 3 segundos
- Pulse animation sutil cada 5 segundos
- Link: `https://wa.me/573176800661?text=Hola%20Quest%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios.`
- `target="_blank" rel="noopener noreferrer"`

---

### 7.5 PÁGINA: NOSOTROS — `pages/Nosotros.tsx`

**Hero interno:** Gradiente navy, altura ~40vh
- Heading: "Conoce a Quest"
- Subheading: "Somos quienes junto a ti construyen estrategias y soluciones para un futuro sostenible."

**Sección Propósito (2 columnas):**
"En Quest tenemos como propósito construir estrategias y soluciones conjuntas con las organizaciones, que promuevan un equilibrio en el desarrollo de sus operaciones para lograr un futuro sostenible. Contribuimos a que las organizaciones, sus clientes, proveedores, nuestros colaboradores y la comunidad en general, elevemos el nivel de conciencia y seamos socialmente más responsables."

**Sección Lo que hacemos:**
"Nos mantenemos en la búsqueda permanente de las mejores prácticas de gestión de procesos responsables, desarrollando acciones sinérgicas con nuestras partes interesadas, consolidando relaciones de confianza que contribuyan a entornos más competitivos y sostenibles. Ayudamos a nuestros clientes a desarrollar soluciones ajustadas a sus características particulares, ofreciendo modelos de gestión para pequeñas, medianas y grandes empresas."

**Sección Cómo Trabajamos (grid de 4 cards):**
1. **Sinergia** — Trabajo colaborativo con nuestros clientes
2. **Gestión por procesos** — Enfoque estructurado y medible
3. **Mejores prácticas PMI®** — Gestión de proyectos profesional
4. **Confidencialidad** — Manejo seguro de la información

**Sección Equipo:** Reutiliza `<TeamSection />` de la landing.

**Frase cierre (centrada, italic, text-2xl, text-quest-teal):**
"Aportar juntos al crecimiento de la economía, el cuidado del medio ambiente y el bienestar social."

---

### 7.6 PÁGINA: CONTACTO — `pages/Contacto.tsx`

**Hero interno:** "Contáctanos" / "Estamos listos para ayudarte. Escríbenos y un consultor te contactará en menos de 24 horas."

**2 columnas:**
- Izquierda: `<ContactForm />` (mismo componente reutilizable)
- Derecha: Datos de contacto con íconos, botón WhatsApp, placeholder de mapa

---

### 7.7 PÁGINAS DE SERVICIOS (4 páginas)

Todas siguen el mismo template. Cada una importa componentes reutilizables:

```typescript
// Template de página de servicio
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetail from "@/components/services/ServiceDetail";
import ServiceCTA from "@/components/services/ServiceCTA";

const ServicioPage = () => (
  <>
    <ServiceHero
      icon="ClipboardCheck"
      title="Consultoría y Asesoría"
      description="Te acompañamos en el desarrollo de..."
      breadcrumb="Consultoría y Asesoría"
    />
    <ServiceDetail subservices={subservicesData} />
    <ServiceCTA serviceName="Consultoría y Asesoría" />
  </>
);
```

---

#### 7.7.1 Consultoría y Asesoría

**Ícono:** ClipboardCheck | **Borde:** teal

**Descripción general:** "Te acompañamos en el desarrollo de los procesos de tu organización, brindando servicios técnicos especializados para una operación más segura y que garantice la continuidad del negocio."

**Subservicios:**

**A) Sistemas de Gestión**
- Gestión integral de riesgos
- Sistema de Gestión para la Responsabilidad social empresarial (ISO 26000)
- Requisitos normativos legales en seguridad y salud en el trabajo y gestión ambiental
- Integración de sistemas de gestión de estándares internacionales HSEQ
- Normativas: Decreto 1072:15, Res.0312:19, ISO 45001:18, RUC, Norsok
- ISO 14001:2015, ISO 9001:2015, ISO 39001:2012, Res 1565 de 2012

**B) Gestión de la Contratación con Terceros**
- Gestión integral de proveedores
- Control de contratistas
- Auditorías a proveedores
- Asesoría jurídica en realización de contratos

**C) Auditorías de Sistemas de Gestión Integradas**
- Ambiental: Decreto 1076:15, ISO 14001:2015
- Calidad: ISO 9001:2015
- Responsabilidad social: ISO 26000:2010
- SST: Decreto 1072:15, Res.0312:19, ISO 45001:18, RUC, Norsok

---

#### 7.7.2 Estrategias e Intervención

**Ícono:** Shield | **Borde:** gold

**Descripción general:** "Diseñamos y desarrollamos estrategias y proyectos de intervención de riesgos y mejora alineados al contexto de tu organización."

**Subservicios:**

**A) Movilidad Segura** — Plan estratégico de seguridad vial, Estrategias de prevención, Formación en movilidad, Normatividad transporte en servicio público, Transporte de mercancías peligrosas Res. 1409

**B) Riesgo Químico** — Gestión integral, SGA, Matriz de compatibilidad, Áreas Clasificadas

**C) Higiene Industrial** — Asesoría e intervención, Trazabilidad

**D) Medicina Laboral** — Calificación de casos complejos, Ausentismo, Sistemas de vigilancia

**E) Otros** — Disminución de defectos, Intervención de accidentalidad, Riesgo con Radiaciones, Tareas de alto riesgo

---

#### 7.7.3 Formación Especializada

**Ícono:** GraduationCap | **Borde:** teal

**Descripción general:** "Creemos en la formación e innovación como herramientas transformadoras, generadoras de cambio."

**Subservicios:**
- Formación en sistemas de gestión
- Mejora de procesos
- Programas de Formación en SST
- Buenas prácticas PMI®
- Comunidad saludable
- Campañas lúdicas

---

#### 7.7.4 Transformación Digital

**Ícono:** Monitor | **Borde:** gold

**Descripción general:** "La automatización e incorporación de tecnologías son claves para un mejor desempeño de los procesos."

**Subservicios:**
- Asesoría en automatización de procesos
- Soporte/asesoría técnica en SG para desarrollo de software
- Implementación de aplicativos (Distribuidores autorizados)

**Placeholder QuestAudit:**
```typescript
const QUEST_AUDIT_ENABLED = false; // Cambiar a true cuando esté listo

// Card especial con borde dorado y badge "Próximamente"
// Título: "QuestAudit — Plataforma Digital de Auditoría"
// Texto: "Estamos desarrollando una plataforma propia que digitaliza el ciclo
//         completo de auditoría con inteligencia artificial."
// Badge: "Próximamente en 2026"
// CTA: "¿Te interesa? Escríbenos" → WhatsApp
```

---

## 8. COMPONENTES REUTILIZABLES

### Componentes shadcn-ui ya disponibles (no recrear)

Estos componentes ya están instalados por Lovable. Usarlos directamente desde `@/components/ui/`:

`button`, `card`, `input`, `select`, `textarea`, `accordion`, `badge`, `separator`, `toast`, `tooltip`, `dialog`, `dropdown-menu`, `navigation-menu`, `avatar`, `tabs`, `collapsible`

### Componentes personalizados a crear

#### SectionHeading

```typescript
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean; // Para fondos oscuros (text-white)
}
```

#### ScrollReveal (wrapper Framer Motion)

```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right' | 'none';
  delay?: number;
}
```

#### AnimatedCounter

```typescript
interface AnimatedCounterProps {
  target: number;
  prefix?: string;  // "+"
  suffix?: string;
  duration?: number; // default 2s
}
```

#### ServiceHero

```typescript
interface ServiceHeroProps {
  icon: string;            // Nombre del ícono Lucide
  title: string;
  description: string;
  breadcrumb: string;      // Nombre para breadcrumb
}
```

---

## 9. SISTEMA DE INTERNACIONALIZACIÓN (i18n) — FASE 3

> Se implementa en la Fase 3. Por ahora todo el contenido va hardcoded en español.

**Librería:** `react-i18next` + `i18next` + `i18next-browser-languagedetector`

**Archivos:** `src/i18n/es.json` y `src/i18n/en.json`

**LanguageSwitcher:** Toggle pill en navbar que cambia el idioma en runtime sin recargar página.

**Rutas:** Se mantienen iguales (SPA), el idioma se guarda en localStorage.

---

## 10. FUNCIONALIDADES ESPECÍFICAS

### 10.1 Formulario de Contacto (sin backend)

Usa **EmailJS**, **Web3Forms** o **Formspree** para enviar sin servidor. Ver opciones en Sección 3.

**Flujo:**
1. Usuario llena formulario → validación con Zod
2. Submit → fetch al servicio externo
3. Success → toast de Sonner verde + limpiar formulario
4. Error → toast rojo + opción "Escríbenos por WhatsApp"

### 10.2 WhatsApp Flotante

URL: `https://wa.me/573176800661?text=Hola%20Quest%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios.`

### 10.3 Navbar Scroll Effect

Ver implementación en Sección 7.2.

### 10.4 Scroll to Top on Navigation

```typescript
// En App.tsx o como wrapper
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
```

### 10.5 Smooth Scroll to Section

```typescript
// Para el CTA "Conoce nuestros servicios" del hero
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
```

---

## 11. SEO Y METADATOS

### Librería: react-helmet-async

```bash
npm install react-helmet-async
```

**Uso por página:**

```typescript
import { Helmet } from 'react-helmet-async';

const Index = () => (
  <>
    <Helmet>
      <title>Quest Estrategias y Sostenibilidad</title>
      <meta name="description" content="Consultoría, auditoría y formación en sistemas de gestión para un futuro sostenible." />
      <meta property="og:title" content="Quest — Estrategias y Sostenibilidad" />
      <meta property="og:description" content="Construimos juntos estrategias y soluciones en tu organización." />
      <meta property="og:image" content="/images/og/og-image.png" />
      <meta property="og:url" content="https://www.questjuntos.com" />
      <link rel="canonical" href="https://www.questjuntos.com" />
    </Helmet>
    {/* ... componentes */}
  </>
);
```

### robots.txt (en /public/)

```
User-agent: *
Allow: /
Sitemap: https://www.questjuntos.com/sitemap.xml
```

### Schema Markup (JSON-LD en index.html o via Helmet)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Quest Estrategias y Sostenibilidad S.A.S.",
  "description": "Consultoría, auditoría y formación en sistemas de gestión",
  "url": "https://www.questjuntos.com",
  "telephone": "+573176800661",
  "email": "info@questjuntos.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Barranquilla",
    "addressCountry": "CO"
  },
  "founder": {
    "@type": "Person",
    "name": "Jorge López Ramos",
    "jobTitle": "Business Partner - Lead Auditor"
  },
  "areaServed": "CO",
  "serviceType": ["Auditoría de Sistemas de Gestión", "Consultoría en SST", "Formación Empresarial", "Transformación Digital"]
}
```

### SPA + SEO: Prerendering

Como es una SPA (Vite + React Router), Google puede tener dificultad indexando. Se recomienda agregar **prerendering** para SEO:

```bash
npm install vite-plugin-prerender
```

Esto genera HTML estático para cada ruta en build time, similar a SSG de Next.js.

---

## 12. BASE DE DATOS DE CONTENIDO

### Archivo: `src/data/clients.ts`

```typescript
export const clientesDirectos = [
  { name: "MOVATE S.A.S", logo: "movate.png" },
  { name: "Azul Constructores e Ingenieros S.A.S", logo: "azul-constructores.png" },
  { name: "Seguros de Vida Suramericana S.A.", logo: "suramericana.png" },
  { name: "Unidad Gastroenterología y Endoscopia Digestiva S.A", logo: "gastroenterologia.png" },
  { name: "J&Y Arquitectura y Construcción S.A.S", logo: "jy-arquitectura.png" },
  { name: "Galcomex S.A.S", logo: "galcomex.png" },
  { name: "Bureau Veritas", logo: "bureau-veritas.png" },
  { name: "Recurso Empresarial Cartagena", logo: "recurso-empresarial.png" },
  { name: "Fondo Olímpica", logo: "fondo-olimpica.png" },
  { name: "Thermocoil Ltda", logo: "thermocoil.png" },
  { name: "Omega Internacional S.A.S", logo: "omega-internacional.png" },
];

export const clientesAlianza = [
  { name: "Transmetano ESP S.A", logo: "transmetano.png" },
  { name: "Tierra Santa S.A.S", logo: "tierra-santa.png" },
  { name: "Arrocera del Litoral", logo: "arrocera-litoral.png" },
  { name: "Geopilotajes S.A.S", logo: "geopilotajes.png" },
  { name: "Universidad Metropolitana", logo: "universidad-metropolitana.png" },
  { name: "Serviparamo S.A.S", logo: "serviparamo.png" },
  { name: "Centro Inca Limitada", logo: "centro-inca.png" },
  { name: "Zafarco Comercial S.A", logo: "zafarco.png" },
  { name: "Corporación Club Lagos de Caujaral", logo: "lagos-caujaral.png" },
  { name: "Laboratorios Rety de Colombia S.A.S", logo: "laboratorios-rety.png" },
  { name: "Banco Serfinanza S.A", logo: "banco-serfinanza.png" },
  { name: "Abaton S.A.S", logo: "abaton.png" },
  { name: "Fundación Santo Domingo", logo: "fundacion-santo-domingo.png" },
  { name: "Cummins Norte de Colombia S.A.S", logo: "cummins.png" },
  { name: "Pinturas y Acabados El Oso S.A.S", logo: "pinturas-oso.png" },
  { name: "CI Quality Bunkers Supply S.A.S", logo: "quality-bunkers.png" },
  { name: "Hada International S.A.S", logo: "hada-international.png" },
  { name: "Espumados del Litoral S.A.", logo: "espumados-litoral.png" },
  { name: "Cámara de Comercio de Barranquilla", logo: "camara-comercio-baq.png" },
  { name: "Canguro International S.A.S", logo: "canguro-international.png" },
  { name: "Sindicato de Promotores y Técnicos de Colombia", logo: "sindicato-promotores.png" },
  { name: "Promioriente S.A ESP", logo: "promioriente.png" },
  { name: "Enterprise Management Services S.A.S", logo: "enterprise-management.png" },
  { name: "Escenarios Deportivos S.A.S", logo: "escenarios-deportivos.png" },
];
```

### Archivo: `src/data/team.ts`

```typescript
export const equipo = [
  {
    name: "Jorge López Ramos",
    role: "Business Partner · Lead Auditor",
    photo: "/images/team/jorge-lopez.jpg",
    bio: "Ingeniero Industrial con más de 14 años de experiencia liderando procesos de gestión de calidad, ambiental y SST en sectores como minería, transporte, metalmecánica y logística. Lead Auditor IRCA certificado en ISO 9001, 14001, 45001 y 39001.",
    certifications: ["IRCA", "TapRoot", "RUC", "Norsok"],
    linkedin: "",
  },
  // Agregar más miembros aquí en el futuro
];
```

### Archivo: `src/data/services.ts`

```typescript
export const servicios = [
  {
    id: "consultoria-y-asesoria",
    icon: "ClipboardCheck",
    title: "Consultoría y Asesoría",
    accentColor: "teal" as const,
    shortDesc: "Sistemas de gestión, auditorías integradas y gestión de contratación con terceros para operaciones seguras y continuas.",
    fullDesc: "Te acompañamos en el desarrollo de los procesos de tu organización, brindando servicios técnicos especializados para una operación más segura y que garantice la continuidad del negocio.",
    tags: ["ISO 9001", "ISO 14001", "ISO 45001", "HSEQ"],
    path: "/servicios/consultoria-y-asesoria",
    subservices: [
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
        badges: [],
      },
      {
        title: "Auditorías de Sistemas de Gestión Integradas",
        items: [
          "Sistema de gestión ambiental (Decreto 1076:15, ISO 14001:2015)",
          "Sistema de Gestión de Calidad (ISO 9001:2015)",
          "Sistema de Gestión de responsabilidad social (ISO 26000:2010)",
          "Sistema de gestión en SST (Decreto 1072:15, Res.0312:19, ISO 45001:18, RUC, Norsok)",
        ],
        badges: [],
      },
    ],
  },
  {
    id: "estrategias-e-intervencion",
    icon: "Shield",
    title: "Estrategias y Proyectos de Intervención",
    accentColor: "gold" as const,
    shortDesc: "Proyectos de intervención de riesgos alineados al contexto de tu organización, desde seguridad vial hasta higiene industrial.",
    fullDesc: "Diseñamos y desarrollamos estrategias y proyectos de intervención de riesgos y mejora alineados al contexto de tu organización.",
    tags: ["SST", "Riesgo Químico", "Medicina Laboral"],
    path: "/servicios/estrategias-e-intervencion",
    subservices: [
      {
        title: "Movilidad Segura",
        items: ["Plan estratégico de seguridad vial", "Estrategias de prevención de riesgo", "Formación en movilidad", "Normatividad transporte en servicio público", "Transporte de mercancías peligrosas (Res. 1409)"],
        badges: [],
      },
      {
        title: "Riesgo Químico",
        items: ["Gestión integral del Riesgo Químico", "SGA (Sistema Globalmente Armonizado)", "Matriz de compatibilidad", "Áreas Clasificadas"],
        badges: [],
      },
      {
        title: "Higiene Industrial",
        items: ["Asesoría e intervención", "Trazabilidad"],
        badges: [],
      },
      {
        title: "Medicina Laboral",
        items: ["Calificación y manejo de casos complejos", "Ausentismo", "Sistemas de vigilancia"],
        badges: [],
      },
      {
        title: "Otros servicios de intervención",
        items: ["Disminución de defectos", "Intervención de accidentalidad", "Riesgo con Radiaciones", "Tareas de alto riesgo"],
        badges: [],
      },
    ],
  },
  {
    id: "formacion-especializada",
    icon: "GraduationCap",
    title: "Formación Especializada",
    accentColor: "teal" as const,
    shortDesc: "Programas de formación en sistemas de gestión, SST y gestión de proyectos PMI® para el desarrollo de tu equipo.",
    fullDesc: "Creemos en la formación e innovación como herramientas transformadoras, generadoras de cambio, apuntando al desarrollo de procesos empresariales y sociales.",
    tags: ["PMI®", "SST", "Mejora Continua"],
    path: "/servicios/formacion-especializada",
    subservices: [
      {
        title: "Programas de Formación",
        items: [
          "Formación especializada para el desarrollo de sistemas de gestión",
          "Mejora de procesos",
          "Programas de Formación en SST",
          "Buenas prácticas para la gestión de proyectos PMI®",
          "Comunidad saludable",
          "Campañas lúdicas",
        ],
        badges: [],
      },
    ],
  },
  {
    id: "transformacion-digital",
    icon: "Monitor",
    title: "Transformación Digital de Sistemas de Gestión",
    accentColor: "gold" as const,
    shortDesc: "Automatización de procesos y asesoría técnica para digitalizar tus sistemas de gestión con herramientas modernas.",
    fullDesc: "La automatización e incorporación de tecnologías son claves para un mejor desempeño de los procesos, haciendo que estos sean más eficientes, flexibles y confiables.",
    tags: ["Automatización", "Software", "Aplicativos"],
    path: "/servicios/transformacion-digital",
    subservices: [
      {
        title: "Servicios de Transformación Digital",
        items: [
          "Asesoría en automatización de procesos",
          "Soporte/asesoría técnica en SG para desarrollo de software",
          "Implementación de aplicativos (Distribuidores autorizados)",
        ],
        badges: [],
      },
    ],
  },
];
```

### Archivo: `src/data/standards.ts`

```typescript
export const estandares = [
  { code: "ISO 9001:2015", name: "Gestión de Calidad" },
  { code: "ISO 14001:2015", name: "Gestión Ambiental" },
  { code: "ISO 45001:2018", name: "Seguridad y Salud en el Trabajo" },
  { code: "ISO 26000", name: "Responsabilidad Social" },
  { code: "ISO 39001:2012", name: "Seguridad Vial" },
  { code: "Decreto 1072:2015", name: "SST Colombia" },
  { code: "Res. 0312:2019", name: "Estándares Mínimos SG-SST" },
  { code: "RUC", name: "Registro Uniforme de Contratistas" },
  { code: "Norsok", name: "Estándar Noruego Oil & Gas" },
  { code: "HSEQ", name: "Health, Safety, Environment & Quality" },
];
```

### Archivo: `src/lib/constants.ts`

```typescript
export const COMPANY = {
  name: "Quest Estrategias y Sostenibilidad S.A.S.",
  shortName: "Quest",
  tagline: "Junto a ti construimos estrategias y soluciones para un futuro sostenible.",
  phone: "+57 317 680 0661",
  phoneClean: "573176800661",
  email: "info@questjuntos.com",
  website: "https://www.questjuntos.com",
  location: "Barranquilla, Colombia",
  foundedYear: 2019,
  yearsOfExperience: 6,
  totalClients: 35,
  sectors: 8,
  standards: 10,
};

export const WHATSAPP_URL = `https://wa.me/${COMPANY.phoneClean}?text=${encodeURIComponent("Hola Quest, me gustaría recibir información sobre sus servicios de consultoría.")}`;

export const SOCIAL_LINKS = {
  linkedin: "", // Por confirmar
  instagram: "", // Por confirmar
  facebook: "", // Por confirmar
};

export const QUEST_AUDIT_ENABLED = false; // Cambiar a true cuando QuestAudit esté listo
```

---

## 13. GUÍA DE DESPLIEGUE

### Opción A: Deploy en Vercel (recomendado para producción)

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Build del proyecto
npm run build

# 3. Deploy
vercel --prod
```

**Configurar en vercel.json (para SPA routing):**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Configurar DNS en ColombiaHosting:**
- Registro A: `@` → `76.76.21.21`
- Registro CNAME: `www` → `cname.vercel-dns.com`

### Opción B: Deploy con Lovable Publish

1. Ir a Lovable → proyecto → Share → Publish
2. Conectar dominio en Project > Settings > Domains

### Variables de entorno (si usas EmailJS)

```env
VITE_EMAILJS_SERVICE_ID=xxx
VITE_EMAILJS_TEMPLATE_ID=xxx
VITE_EMAILJS_PUBLIC_KEY=xxx
```

---

## 14. FASES DE DESARROLLO

### FASE 1: Landing Page Principal ⬅️ PRIORIDAD ACTUAL

**Entregable:** Página principal completa con todas las 7 secciones + navbar + footer + WhatsApp flotante.

**Componentes a crear/verificar:**
- [ ] Configurar colores Quest en tailwind.config.ts
- [ ] Configurar fuentes (DM Sans + Source Serif 4)
- [ ] Navbar con scroll effect
- [ ] HeroSection
- [ ] StatsSection con contadores animados
- [ ] ServicesOverview con 4 cards
- [ ] WhyQuest con diferenciadores
- [ ] ClientsCarousel con marquee
- [ ] TeamSection escalable
- [ ] CTASection con ContactForm
- [ ] Footer completo
- [ ] WhatsAppButton flotante
- [ ] ScrollToTop en navegación
- [ ] Archivos de datos en /src/data/

### FASE 2: Páginas Internas

- [ ] Template de ServiceHero + ServiceDetail + ServiceCTA
- [ ] Consultoría y Asesoría
- [ ] Estrategias e Intervención
- [ ] Formación Especializada
- [ ] Transformación Digital (con placeholder QuestAudit)
- [ ] Nosotros
- [ ] Contacto
- [ ] NotFound (404)

### FASE 3: Multilenguaje (i18n)

- [ ] Instalar react-i18next
- [ ] Crear archivos ES/EN
- [ ] LanguageSwitcher en navbar
- [ ] Traducir todo el contenido

### FASE 4: SEO + Analytics + Optimización

- [ ] react-helmet-async en todas las páginas
- [ ] Schema markup JSON-LD
- [ ] robots.txt + sitemap
- [ ] Open Graph images
- [ ] Google Analytics 4
- [ ] Prerendering con vite-plugin-prerender
- [ ] Lighthouse audit

### FASE 5: Integraciones Futuras

- [ ] QuestAudit como sección activa
- [ ] Blog con CMS
- [ ] Casos de éxito
- [ ] Más miembros de equipo
- [ ] Testimonios de clientes

---

## 15. CHECKLIST DE CALIDAD

### Pre-lanzamiento

- [ ] Todas las rutas funcionan correctamente
- [ ] Responsive: mobile (375px), tablet (768px), desktop (1280px+)
- [ ] Formulario envía correctamente
- [ ] WhatsApp abre con mensaje predefinido
- [ ] Navbar scroll effect funciona
- [ ] Animaciones de scroll funcionan
- [ ] Logo correcto en todas las variantes
- [ ] Todos los links funcionan (no hay 404)
- [ ] Imágenes optimizadas (WebP)
- [ ] Favicon configurado
- [ ] Meta tags en todas las páginas
- [ ] Open Graph funciona al compartir en redes
- [ ] robots.txt accesible
- [ ] SSL activo (https://)
- [ ] Dominio configurado
- [ ] Google Analytics activo

### Lighthouse Targets

- [ ] Performance: > 90
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 95

### Navegadores

- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + mobile)
- [ ] Firefox
- [ ] Edge

---

> **Fin del Documento Maestro v2.0**
> Actualizado para stack Vite + React Router + shadcn-ui (generado por Lovable).
> Este documento es la fuente de verdad para el desarrollo con Trae.ai.