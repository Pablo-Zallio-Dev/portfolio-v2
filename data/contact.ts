export interface WhatsAppConfig {
  phone: string;
  message: string;
  url: string;
}

const PHONE = "34696075650";
const MESSAGE = "Hola Pablo, quiero pedirte un presupuesto para mi web.";

export const WHATSAPP: WhatsAppConfig = {
  phone: PHONE,
  message: MESSAGE,
  url: `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`,
};