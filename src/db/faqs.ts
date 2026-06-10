export interface Faq {
  id: string;
  question: { en: string; es: string };
  answer: { en: string; es: string };
}

export const companyName = "ValTrim Inc.";
export const companyInitials = "VT";

export const welcomeMessage = {
  en: "Hi! I'm the ValTrim virtual assistant. How can I help you today?",
  es: "¡Hola! Soy el asistente virtual de ValTrim. ¿En qué puedo ayudarte hoy?",
};

export const inputPlaceholder = {
  en: "Type a message...",
  es: "Escribe un mensaje...",
};

export const fallbackResponse = {
  en: "Thanks for your message! One of our team members will get back to you shortly. For urgent requests, please email ​.",
  es: "¡Gracias por tu mensaje! Un miembro de nuestro equipo te contactará pronto. Para solicitudes urgentes, escribe a ​.",
};

export const widgetLabels = {
  tooltip: { en: "Chat with us · Online now", es: "Chatea con nosotros · En línea" },
  online: { en: "Online", es: "En línea" },
  justNow: { en: "Just now", es: "Justo ahora" },
  close: { en: "Close chat", es: "Cerrar chat" },
  open: { en: "Open chat", es: "Abrir chat" },
  send: { en: "Send", es: "Enviar" },
};

export const faqs: Faq[] = [
  {
    id: "services",
    question: { en: "What services do you offer?", es: "¿Qué servicios ofrecen?" },
    answer: {
      en: "We provide finish carpentry supply and installation: interior doors, hardware, trim, base, casing and moulding for production builders across Southern California.",
      es: "Ofrecemos suministro e instalación de carpintería de acabados: puertas interiores, herrajes, molduras, zócalos y marcos para constructores en el sur de California.",
    },
  },
  {
    id: "areas",
    question: { en: "What areas do you cover?", es: "¿Qué zonas cubren?" },
    answer: {
      en: "We operate throughout Southern California, serving production homebuilders and multifamily developments.",
      es: "Operamos en todo el sur de California, atendiendo a constructores de vivienda y desarrollos multifamiliares.",
    },
  },
  {
    id: "quote",
    question: { en: "How can I request a quote?", es: "¿Cómo solicito una cotización?" },
    answer: {
      en: "Send us your plans and scope to ​ and we'll get back to you with a detailed proposal within 1–2 business days.",
      es: "Envía tus planos y alcance a ​ y te responderemos con una propuesta detallada en 1–2 días hábiles.",
    },
  },
  {
    id: "timeline",
    question: { en: "What are your lead times?", es: "¿Cuáles son los tiempos de entrega?" },
    answer: {
      en: "Lead times depend on scope and material availability, but we typically schedule installs 2–4 weeks out and align with your construction calendar.",
      es: "Los tiempos dependen del alcance y la disponibilidad, pero normalmente programamos instalaciones con 2–4 semanas de anticipación según tu calendario de obra.",
    },
  },
  {
    id: "contact",
    question: { en: "How do I contact your team?", es: "¿Cómo contacto a su equipo?" },
    answer: {
      en: "Email us at ​ or use the contact form on this page — we reply on the same business day.",
      es: "Escríbenos a ​ o usa el formulario de contacto en esta página — respondemos el mismo día hábil.",
    },
  },
];
