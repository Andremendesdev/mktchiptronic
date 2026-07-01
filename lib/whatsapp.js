export const WHATSAPP_NUMBER = "1234567890";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export const WHATSAPP_GENERAL_URL = `${WHATSAPP_BASE}?text=${encodeURIComponent(
  "Olá! Quero me inscrever em um curso gratuito da Chiptronic."
)}`;

export const courseWhatsAppUrl = (courseName) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(
    `Olá! Quero me inscrever no curso: ${courseName}.`
  )}`;
