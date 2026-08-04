import {
  DoorOpen,
  ShieldCheck,
  Layers3,
  Hammer,
  Briefcase,
  Factory,
  ClipboardList,
  PackageSearch,
  Wrench,
  CheckSquare,
  type LucideIcon,
} from "lucide-react";

export type Lang = "en" | "es";

export const contactEmail = "jmurillo@valtriminc.com";

export const serviceIcons: LucideIcon[] = [
  DoorOpen,
  ShieldCheck,
  Layers3,
  Hammer,
  Briefcase,
  Factory,
];

export const stepIcons: LucideIcon[] = [ClipboardList, PackageSearch, Wrench, CheckSquare];

export const portfolioGalleries = [
  [
    "/portfolio/multifamily.webp",
    "/portfolio/multifamily/multifamily-01.webp",
    "/portfolio/multifamily/multifamily-02.webp",
    "/portfolio/multifamily/multifamily-03.webp",
    "/portfolio/multifamily/multifamily-04.webp",
    "/portfolio/multifamily/multifamily-05.webp",
    "/portfolio/multifamily/multifamily-06.webp",
    "/portfolio/multifamily/multifamily-07.webp",
    "/portfolio/multifamily/multifamily-08.webp",
    "/portfolio/multifamily/multifamily-09.webp",
    "/portfolio/multifamily/multifamily-10.webp",
    "/portfolio/multifamily/multifamily-11.webp",
    "/portfolio/multifamily/multifamily-12.webp",
  ],
  [
    "/portfolio/production-residential.webp",
    "/portfolio/production-residential/production-residential-01.webp",
    "/portfolio/production-residential/production-residential-02.webp",
    "/portfolio/production-residential/production-residential-03.webp",
    "/portfolio/production-residential/production-residential-04.webp",
    "/portfolio/production-residential/production-residential-05.webp",
    "/portfolio/production-residential/production-residential-06.webp",
    "/portfolio/production-residential/production-residential-07.webp",
    "/portfolio/production-residential/production-residential-08.webp",
    "/portfolio/production-residential/production-residential-09.webp",
    "/portfolio/production-residential/production-residential-10.webp",
    "/portfolio/production-residential/production-residential-11.webp",
    "/portfolio/production-residential/production-residential-12.webp",
    "/portfolio/production-residential/production-residential-13.webp",
    "/portfolio/production-residential/production-residential-14.webp",
    "/portfolio/production-residential/production-residential-15.webp",
  ],
  [
    "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80",
  ],
  [
    "/portfolio/model-decor.webp",
    "/portfolio/model-decor/model-decor-01.webp",
    "/portfolio/model-decor/model-decor-02.webp",
    "/portfolio/model-decor/model-decor-03.webp",
    "/portfolio/model-decor/model-decor-04.webp",
    "/portfolio/model-decor/model-decor-05.webp",
    "/portfolio/model-decor/model-decor-06.webp",
  ],
];

export const translations = {
  en: {
    nav: {
      items: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Suppliers", href: "#suppliers" },
        { label: "Contact", href: "#contact" },
      ],
      contactCta: "Contact Our Team",
      tapEmail: "Tap to Email",
      menu: "Toggle menu",
      tagline: "Finish Carpentry Supply & Install",
      themeLight: "Light mode",
      themeDark: "Dark mode",
      langLabel: "Language",
    },
    hero: {
      eyebrow: "Builder-Focused Supply & Install",
      title: "Finish Carpentry Supply & Install for Southern California Builders.",
      subtitle:
        "ValTrim Inc. delivers quality-driven finish carpentry packages for multifamily, residential, tract, affordable housing, and light commercial projects across Southern California.",
      viewWork: "View Our Work",
      contactCta: "Contact Our Team",
      snapshotEyebrow: "Builder Snapshot",
      snapshotTitle: "Supply. Coordinate. Install.",
      highlights: [
        "Frames, Doors, Mouldings, Shelving, Hardware & Bath Accessories",
        "Builder-Oriented Support with Responsive Communication and Schedule Awareness",
        "Residential, Multifamily & Light Commercial Project Experience",
      ],
    },
    stats: [
      { value: 10, suffix: "+", label: "Years in Business" },
      { value: 250, suffix: "+", label: "Projects Completed & Ongoing" },
      { value: 30, suffix: "+", label: "Supplier Partners" },
    ],
    about: {
      eyebrow: "About ValTrim",
      title: "A reliable finish carpentry partner for builders and contractors.",
      description:
        "Valtrim Inc. is a Riverside-based finish carpentry subcontractor built around dependable coordination, elevated workmanship, and long-term trusted relationships with builders and contractors.",
      cta: "Work With Us",
      cards: [
        {
          title: "Who We Serve",
          text: "Builders & General Contractors",
        },
        {
          title: "How We Deliver",
          text: "Through professional communication, clean field execution, schedule awareness, and strong supplier coordination.",
        },
        {
          title: "Where We Work",
          text: "Southern California",
        },
      ],
    },
    services: {
      eyebrow: "Products & Services",
      title: "Builder-ready scopes with a clean, premium presentation.",
      description:
        "ValTrim supports builders with supply and installation services designed for dependable field performance, production efficiency, and consistent project delivery.",
      items: [
        {
          title: "Doors & Frames",
          text: "Interior and exterior doors and frames coordinated for production schedules, field reliability, and clean installation.",
        },
        {
          title: "Hardware Packages",
          text: "Architectural hardware packages selected for reliability, consistency, and field-ready performance.",
        },
        {
          title: "Moulding & Trim",
          text: "Baseboard, casing, shelving, and finish trim installed with clean execution and consistent finish standards.",
        },
        {
          title: "Finish Carpentry Install",
          text: "Professional installation support for production residential, multifamily, and light commercial projects.",
        },
        {
          title: "Builder Coordination",
          text: "Responsive communication, procurement support, and schedule-aware coordination from preconstruction through field execution.",
        },
        {
          title: "Production Support",
          text: "Scalable supply and installation support built around production construction schedules and repeatable field execution.",
        },
      ],
    },
    process: {
      eyebrow: "How We Work",
      title: "A clear, builder-friendly process from scope to closeout.",
      description:
        "A clean, repeatable workflow built to keep schedules, budgets, and finish quality on track.",
      steps: [
        {
          title: "Scope Review",
          text: "We review plans, specs, and project requirements to confirm scope, identify details, and align with builder expectations.",
        },
        {
          title: "Material Coordination",
          text: "We coordinate with suppliers to secure doors, hardware, mouldings, shelving, and trim packages ahead of field demand.",
        },
        {
          title: "Installation",
          text: "Field crews provide clean, schedule-aware installation with finish-quality workmanship.",
        },
        {
          title: "Project Closeout",
          text: "Punch items, final walks, and closeout documentation are handled efficiently to keep the project moving.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      openGallery: "View gallery",
      imageLabel: "Gallery image",
      title: "Project categories across Southern California.",
      description:
        "A look at the scopes ValTrim delivers — doors, hardware, trim, and finish carpentry packages built for production builders.",
      items: [
        {
          title: "Multifamily",
          subtitle:
            "Expanded finish and specialty scopes including doors, frames, hardware, bath accessories, partitions, fire extinguishers, Knox Boxes, mailboxes, and electrified door hardware for access-control openings.",
        },
        {
          title: "Production Residential",
          subtitle:
            "Scalable finish carpentry packages for tract and builder residential communities.",
        },
        {
          title: "Hardware",
          subtitle:
            "Residential, multifamily, and light commercial hardware packages coordinated for reliable field performance and builder-ready installation.",
        },
        {
          title: "Model Decor / Finish Details",
          subtitle:
            " Custom wall details, T&G, decorative trim, and model-home finish accents with clean, detail-driven installation.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What builders say about working with ValTrim.",
      description:
        "Long-term relationships built on consistency, clean execution, and clear communication.",
      items: [
        {
          quote:
            "Valtrim is an outstanding trim carpentry company. They are consistently on time, stay within budget, and deliver exactly as promised. Their attention to detail and reliability make every project run smoothly, and they always ensure materials and finishes are delivered on schedule. It’s refreshing to work with a team that is so dependable and professional from start to finish.",
          name: "Jennifer Soratos",
          role: "Kb home",
        },
        {
          quote:
            "We've trusted ValTrim across multiple tract communities. Their communication with our purchasing team and field discipline keeps our schedule honest.",
          name: "Stephanie L.",
          role: "Purchasing Director, Production Builder",
        },
        {
          quote:
            "I highly recommend using ValTrim Inc. on your next project because of their hands-on attention to detail from the pre-planning stages all the way through installation, including providing very competitive pricing.",
          name: "Kayvon Saremaslani",
          role: "Purchasing Manager, RC Homes Inc.",
        },
      ],
    },
    suppliers: {
      eyebrow: "Suppliers",
      title: "Trusted supplier partnerships that support dependable delivery.",
      description:
        "Valtrim works with trusted manufacturers, suppliers, and distribution partners to support quality, coordination, and field-ready delivery.",
      items: [
        "Door & Frame Suppliers ",
        "Door Hardware Brands",
        "Moulding & Trim Suppliers",
        "Bath Accessories & Partitions",
        "Mailboxes, Knox Boxes & Fire Extinguishers",
        "Material Suppliers",
      ],
    },
    whyus: {
      eyebrow: "Why Choose Us",
      title: "A builder-focused approach grounded in craftsmanship and reliability.",
      description:
        "ValTrim is built around responsive execution, clean finish standards, and dependable coordination from procurement through installation.",
      reasons: [
        "Builder-focused execution with production project discipline",
        "Quality-first finish standards and clean field workmanship",
        "Reliable supplier partnerships and coordinated procurement",
        "Clear communication across estimating, purchasing, and project teams",
        "Long-term relationships built on consistency and follow-through",
        "Support for Southern California residential, multifamily, and light commercial scopes",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Connect with our builder support team.",
      description: "Share your project details and we’ll follow up with next steps.",
      areaTitle: "Service Area",
      areaLine1: "Based in Riverside, California",
      areaLine2: "Serving builders throughout Southern California.",
      phoneTitle: "Phone",
      phoneText: "Available",
      emailTitle: "Email",
      formEyebrow: "Builder Inquiry Form",
      formTitle: "Tell us about your project",
      formText:
        "Built for builders, contractors, estimators, purchasing teams, and project managers.",
      fields: {
        company: "Company",
        name: "Contact Name",
        email: "Email",
        phone: "Phone",
        projectType: "Project Type",
        details: "Project Details",
        submit: "Send Inquiry",
        sent: "Thank you. ValTrim's team will review the details and follow up.",
      },
    },
    footer: {
      tagline:
        "Builder-focused finish carpentry supply and installation for Southern California production projects.",
      navigate: "Navigate",
      contact: "Contact",
      rights: "All rights reserved.",
      descriptor: "Finish Carpentry · Supply · Install",
    },
  },
  es: {
    nav: {
      items: [
        { label: "Inicio", href: "#home" },
        { label: "Nosotros", href: "#about" },
        { label: "Servicios", href: "#services" },
        { label: "Proceso", href: "#process" },
        { label: "Portafolio", href: "#portfolio" },
        { label: "Proveedores", href: "#suppliers" },
        { label: "Contacto", href: "#contact" },
      ],
      contactCta: "Contactar a Nuestro Equipo",
      tapEmail: "Enviar Correo",
      menu: "Abrir menú",
      tagline: "Carpintería de Acabados — Suministro e Instalación",
      themeLight: "Modo claro",
      themeDark: "Modo oscuro",
      langLabel: "Idioma",
    },
    hero: {
      eyebrow: "Suministro e Instalación para Constructores",
      title:
        "Carpintería de Acabados — Suministro e Instalación para Constructores del Sur de California.",
      subtitle:
        "ValTrim Inc. entrega paquetes de carpintería de acabados de alta calidad para proyectos multifamiliares, residenciales, tract, vivienda asequible y comercial ligero en todo el Inland Empire y el Gran Los Ángeles.",
      viewWork: "Ver Nuestro Trabajo",
      contactCta: "Contactar a Nuestro Equipo",
      snapshotEyebrow: "Resumen para Constructores",
      snapshotTitle: "Suministrar. Coordinar. Instalar.",
      highlights: [
        "Puertas, marcos, herrajes, molduras, repisas y paquetes de carpintería de acabados",
        "Soporte orientado al constructor con comunicación ágil y respeto al cronograma",
        "Capacidad para proyectos residenciales, multifamiliares y comerciales ligeros",
      ],
    },
    stats: [
      { value: 15, suffix: "+", label: "Años de Experiencia" },
      { value: 250, suffix: "+", label: "Proyectos Completados" },
      { value: 4, suffix: "", label: "Condados Atendidos" },
      { value: 20, suffix: "+", label: "Socios Proveedores" },
    ],
    about: {
      eyebrow: "Sobre ValTrim",
      title: "Un socio confiable de carpintería de acabados para constructores y contratistas.",
      description:
        "ValTrim Inc. es un subcontratista de carpintería de acabados con base en Riverside, construido sobre coordinación confiable, mano de obra de alto nivel y relaciones de confianza a largo plazo en suministro e instalación.",
      cta: "Trabaja con Nosotros",
      cards: [
        {
          title: "A Quién Servimos",
          text: "Constructores, contratistas generales, equipos de compras y gerentes de proyecto que requieren un socio confiable de carpintería de acabados.",
        },
        {
          title: "Cómo Entregamos",
          text: "Mediante comunicación profesional, ejecución limpia en campo, respeto al cronograma y sólida coordinación con proveedores.",
        },
        {
          title: "Dónde Trabajamos",
          text: "Con sede en Riverside, California — atendiendo Inland Empire, el Condado de Los Ángeles, Ventura y los mercados de producción del Sur de California.",
        },
      ],
    },
    services: {
      eyebrow: "Productos y Servicios",
      title: "Alcances listos para constructores con una presentación premium y limpia.",
      description:
        "ValTrim apoya a los constructores con productos y servicios de instalación seleccionados por su desempeño confiable en campo y su eficiencia productiva.",
      items: [
        {
          title: "Puertas y Marcos",
          text: "Sistemas de puertas interiores y exteriores con coordinación y soporte orientados al constructor.",
        },
        {
          title: "Paquetes de Herrajes",
          text: "Herraje arquitectónico seleccionado por su confiabilidad, consistencia y desempeño en campo.",
        },
        {
          title: "Molduras y Trim",
          text: "Zócalos, marcos, repisas y acabados entregados bajo un estándar de instalación limpio.",
        },
        {
          title: "Instalación de Acabados",
          text: "Soporte profesional de instalación para proyectos multifamiliares, residenciales, tract y comerciales ligeros.",
        },
        {
          title: "Coordinación con Constructores",
          text: "Comunicación ágil, soporte en compras y ejecución alineada al cronograma.",
        },
        {
          title: "Soporte de Producción",
          text: "Capacidades escalables de suministro e instalación diseñadas para flujos de construcción productiva.",
        },
      ],
    },
    process: {
      eyebrow: "Cómo Trabajamos",
      title: "Un proceso claro y amigable para el constructor, del alcance al cierre.",
      description:
        "Un flujo de trabajo limpio y repetible que mantiene en marcha el cronograma, el presupuesto y la calidad del acabado de tu proyecto.",
      steps: [
        {
          title: "Revisión de Alcance",
          text: "Revisamos planos, especificaciones y alcance para confirmar el trabajo y alinearnos con las expectativas del constructor.",
        },
        {
          title: "Coordinación de Materiales",
          text: "Coordinamos con proveedores para asegurar puertas, herrajes y paquetes de trim antes del cronograma.",
        },
        {
          title: "Instalación",
          text: "Las cuadrillas en campo entregan instalación limpia, a tiempo y con calidad de acabado.",
        },
        {
          title: "Cierre de Proyecto",
          text: "Resolución de punch list, recorridos finales y documentación entregada para mantener el proyecto en marcha.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Portafolio",
      openGallery: "Ver galería",
      imageLabel: "Imagen de la galería",
      title: "Categorías de proyectos en todo el Sur de California.",
      description:
        "Una muestra de los alcances que ValTrim entrega — puertas, herrajes, trim y paquetes de carpintería de acabados para constructores de producción.",
      items: [
        {
          title: "Residencial de Producción",
          subtitle: "Paquetes de acabados para multifamiliar y tract",
        },
        { title: "Herrajes", subtitle: "Coordinación y suministro de herraje arquitectónico" },
        { title: "Residencial", subtitle: "Puertas, trim e instalación residencial premium" },
        {
          title: "Carpintería de Acabados",
          subtitle: "Trim, molduras y ejecución detallada en campo",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "Lo que los constructores dicen de trabajar con ValTrim.",
      description:
        "Relaciones a largo plazo construidas sobre consistencia, ejecución limpia y comunicación clara.",
      items: [
        {
          quote:
            "La coordinación de ValTrim en nuestros paquetes multifamiliares fue insuperable. Los materiales llegaron al sitio cuando los necesitábamos y la cuadrilla dejó cada unidad impecable.",
          name: "Marcus R.",
          role: "Gerente de Proyecto · Constructor Multifamiliar",
        },
        {
          quote:
            "Hemos confiado en ValTrim en varias comunidades tract. Su comunicación con nuestro equipo de compras y su disciplina en campo mantienen nuestro cronograma firme.",
          name: "Stephanie L.",
          role: "Directora de Compras · Constructor de Producción",
        },
        {
          quote:
            "Desde puertas y herrajes hasta el punch final, ValTrim asume la responsabilidad. Es el tipo de subcontratista que queremos en cada proyecto.",
          name: "Daniel K.",
          role: "Superintendente · GC Residencial",
        },
      ],
    },
    suppliers: {
      eyebrow: "Proveedores",
      title: "Alianzas con proveedores confiables que respaldan una entrega segura.",
      description:
        "ValTrim trabaja con fabricantes y socios de distribución confiables para respaldar calidad, coordinación y preparación en campo.",
      items: [
        "Fabricantes de Ventanas",
        "Proveedores de Puertas y Marcos",
        "Marcas de Herraje Arquitectónico",
        "Socios de Molduras y Trim",
        "Canales de Distribución Regional",
        "Proveedores de Soporte de Instalación",
      ],
    },
    whyus: {
      eyebrow: "Por Qué Elegirnos",
      title: "Un enfoque orientado al constructor basado en oficio y confiabilidad.",
      description:
        "ValTrim se construye sobre ejecución ágil, estándares de acabado limpios y coordinación confiable en suministro e instalación.",
      reasons: [
        "Ejecución orientada al constructor con disciplina de proyectos de producción",
        "Estándares de acabado de primera y mano de obra limpia en campo",
        "Alianzas confiables con proveedores y compras coordinadas",
        "Comunicación clara con estimación, compras y equipos de proyecto",
        "Relaciones de confianza a largo plazo basadas en consistencia y seguimiento",
        "Soporte en alcances residenciales y comerciales ligeros del Sur de California",
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Conecta con nuestro equipo de soporte a constructores.",
      description:
        "Dirige tu consulta al departamento correcto con una recepción profesional y clara — diseñada para constructores, estimadores y equipos de proyecto.",
      areaTitle: "Área de Servicio",
      areaLine1: "Riverside, California",
      areaLine2:
        "Atendiendo Inland Empire, Condado de Los Ángeles, Ventura y los mercados de producción cercanos.",
      phoneTitle: "Teléfono",
      phoneText: "Disponible a solicitud",
      emailTitle: "Correo",
      formEyebrow: "Formulario para Constructores",
      formTitle: "Cuéntanos sobre tu proyecto",
      formText:
        "Diseñado para constructores, contratistas, estimadores, equipos de compras y gerentes de proyecto.",
      fields: {
        company: "Empresa",
        name: "Nombre de Contacto",
        email: "Correo",
        phone: "Teléfono",
        projectType: "Tipo de Proyecto",
        details: "Detalles del Proyecto",
        submit: "Enviar Consulta",
        sent: "Gracias — hemos recibido tu consulta. Nuestro equipo te contactará pronto.",
      },
    },
    footer: {
      tagline:
        "Suministro e instalación de carpintería de acabados orientados al constructor para proyectos de producción del Sur de California.",
      navigate: "Navegación",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      descriptor: "Carpintería de Acabados · Suministro · Instalación",
    },
  },
};

export type Dict = typeof translations.en;
