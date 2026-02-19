

# Quest Estrategias y Sostenibilidad — Sitio Web Profesional

## Visión General
Sitio web de 7 páginas para Quest, consultora colombiana de auditoría, sistemas de gestión y sostenibilidad. Diseño "Confianza Estratégica": premium, moderno y accesible, con paleta navy/dorado/teal inspirada en el logo triangular.

---

## Fase 1: Fundamentos y Componentes Globales

### Diseño Base
- Configurar paleta de colores (navy #1B2E5A, dorado #E8A838, teal #28B5A0) y tipografías (DM Sans para headlines, Source Serif 4 para body) desde Google Fonts
- Definir variables CSS, contenedor máximo de 1280px, espaciado responsive (80px desktop / 48px mobile)

### Navbar Global
- Fija en la parte superior con transición transparente → blanca al hacer scroll (>100px)
- Links: Inicio, Servicios (dropdown con 4 servicios), Nosotros, Contacto
- Selector de idioma "ES | EN" (visual, sin funcionalidad de traducción por ahora) + botón CTA dorado "Contáctanos"
- Menú hamburguesa en mobile con panel slide-in

### Footer Global
- Fondo navy oscuro (#0B1224), 4 columnas: logo + descripción, servicios, empresa, contacto + redes sociales
- Copyright y línea divisora

### Botón WhatsApp Flotante
- Círculo verde fijo en esquina inferior derecha, aparece con fade-in después de 3 segundos
- Pulso sutil cada 5 segundos, enlace directo a WhatsApp con mensaje predefinido

---

## Fase 2: Landing Page Principal (8 secciones)

### Hero
- Gradiente navy oscuro con formas geométricas triangulares decorativas (inspiradas en el logo)
- Headline grande "Construimos juntos estrategias para un futuro sostenible" con animación fade-in escalonada
- Dos botones: CTA dorado "Agenda una consulta gratuita" + outline "Conoce nuestros servicios" (scroll suave)

### Cifras de Impacto
- 4 estadísticas (+6 años, +35 empresas, +8 sectores, +10 estándares ISO) con íconos teal
- Animación de contador numérico al entrar en viewport

### Nuestros Servicios
- Grid de 4 cards con borde superior alternado teal/dorado
- Cada card: ícono, título, descripción, tags de normas, link "Ver más →"
- Hover con elevación y sombra

### ¿Por qué Quest?
- 2 columnas: lista de 5 diferenciadores con íconos teal + composición geométrica decorativa
- Animación stagger al hacer scroll

### Nuestros Clientes
- Fondo navy oscuro con marquee infinito de dos filas (direcciones opuestas)
- Placeholders con nombres de empresas (MOVATE, Suramericana, Bureau Veritas, etc.)
- Badge de alianza con Suramericana, pausa al hover

### Nuestro Equipo
- Card de Jorge López Ramos con foto placeholder circular, cargo, bio y badges de certificaciones
- Grid preparado para agregar más miembros en el futuro

### CTA + Formulario de Contacto
- 2 columnas: info de contacto + botón WhatsApp | formulario completo
- Formulario con 6 campos, validación visual, estados de loading y éxito
- Fondo gradiente dorado claro a blanco

---

## Fase 3: Páginas de Servicios (4 páginas)

### Template compartido para todas
- Hero interno con gradiente navy (~40vh), breadcrumb, ícono, título y descripción
- Sección de subservicios con cards/acordeones expandibles, badges de normas
- CTA contextual al servicio

### Consultoría y Asesoría
- 3 subservicios: Sistemas de Gestión, Gestión de Contratación con Terceros, Auditorías Integradas
- Badges de normas ISO y decretos colombianos

### Estrategias e Intervención
- 5 subservicios: Movilidad Segura, Riesgo Químico, Higiene Industrial, Medicina Laboral, Otros

### Formación Especializada
- 6 áreas: Sistemas de gestión, Mejora de procesos, SST, PMI®, Comunidad saludable, Campañas lúdicas

### Transformación Digital
- 3 subservicios + card especial "Próximamente" para QuestAudit (plataforma de auditoría con IA)

---

## Fase 4: Páginas Institucionales

### Nosotros (/nosotros)
- Hero interno con gradiente navy
- Sección de propósito (2 columnas con visual decorativo)
- "Lo que hacemos" con texto descriptivo
- Grid de 4 cards: Sinergia, Gestión por procesos, PMI®, Confidencialidad
- Sección de equipo (misma card de Jorge López)
- Frase de cierre centrada en teal

### Contacto (/contacto)
- Hero interno
- 2 columnas: formulario completo + datos de contacto, botón WhatsApp y placeholder de mapa

---

## Detalles de Experiencia
- Todas las animaciones de scroll se ejecutan solo una vez
- Diseño responsive perfecto en mobile (375px), tablet (768px) y desktop (1280px+)
- Navegación real entre páginas con React Router
- Formas geométricas triangulares como elementos decorativos recurrentes
- Sombras suaves con tinte navy para profundidad premium

