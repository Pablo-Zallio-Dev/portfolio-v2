import { Building, LucideIcon, QrCode, Rocket, WandSparkles } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  idealFor: string;
  description: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "carta-qr",
    icon: QrCode,
    title: "Carta digital con QR",
    idealFor: "restaurantes y bares.",
    description: "Tu carta siempre actualizada, a un escaneo de distancia.",
    features: [
      "Diseño adaptado a tu local",
      "Fácil de actualizar",
      "QR listo para imprimir",
    ],
  },
  {
    id: "landing-page",
    icon: Rocket,
    title: "Landing page",
    idealFor: "negocios y profesionales que quieren empezar a captar clientes.",
    description: "Una página clara, pensada para que te contacten.",
    features: [
      "Diseño a medida",
      "Botón directo a WhatsApp",
      "Rápida y optimizada para móvil",
    ],
  },
  {
    id: "web-corporativa",
    icon: Building,
    title: "Web corporativa",
    idealFor: "empresas y negocios de servicios.",
    description: "Una web completa que transmite confianza y te posiciona en Google.",
    features: ["Varias páginas", "SEO inicial", "Formulario de contacto"],
  },
  {
    id: "proyecto-a-medida",
    icon: WandSparkles,
    title: "Proyecto a medida",
    idealFor: "tiendas online, reservas o funciones propias.",
    description: "Si tu idea no encaja en un pack, la construimos juntos.",
    features: [
      "Planificación previa",
      "Desarrollo personalizado",
      "Soporte tras el lanzamiento",
    ],
  },
];