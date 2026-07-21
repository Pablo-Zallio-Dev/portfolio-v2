
export interface ProjectType {
  id: string;
  image: string;
  imageMobile: string;
  title: string;
  href: string;
  github: string;
  subtitle: string;
  description: string;
  date: string;
  descriptionPortal: string;
  stack: Array<string>
}



export const projects: ProjectType[] = [
           {
                  id: '005',
                  image: '/images/image_proj005.webp',
                  imageMobile: '/images/image_proj005-mobile.webp',
                  date: '06-2026',
                  href: 'https://aeroswim.vercel.app/',
                  github: 'https://github.com/Pablo-Zallio-Dev/aeroswim',
                  title: 'Aeroswim',
                  subtitle: 'Web para un club de natación.',
                  description: 'Plataforma digital para un club de natación de alto rendimiento, enfocada en entrenamiento, rendimiento deportivo y gestión de la experiencia del nadador.',
                  descriptionPortal: 'Aero Swim es una experiencia web inmersiva para un centro de alto rendimiento especializado en natación. El sitio presenta la filosofía del club, sus instalaciones, horarios, resultados y sistema de acceso mediante una interfaz moderna y orientada al rendimiento. El diseño combina una estética deportiva y tecnológica con una navegación modular, datos en tiempo real y una fuerte identidad visual.',
                  stack: ['NextJS','TailwindCss', 'React-Hook-Form']
            },
            {
                  id: '004',
                  image: '/images/image_proj001.webp',
                  imageMobile: '/images/image_proj001-mobile.webp',
                  date: '05-2026',
                  href: 'https://cosas-ricas.vercel.app/',
                  github: 'https://github.com/Pablo-Zallio-Dev/cosas_ricas',
                  title: 'Cosas Ricas2',
                  subtitle: 'Pasteleria Artesanal',
                  description: 'Landing page para pastelería artesanal, con catálogo de tartas y pedidos personalizados vía WhatsApp.',
                  descriptionPortal: 'Sitio para una pastelería familiar de Torrent especializada en tartas artesanales. Incluye galería de productos, sección de presupuestos para encargos personalizados (bodas, cumpleaños, eventos) y contacto directo por WhatsApp.',
                  stack: ['NextJS','TailwindCss', 'React-Hook-Form']
            },
            {
                  id: '003',
                  image: '/images/image_proj002.webp',
                  imageMobile: '/images/image_proj002-mobile.webp',
                  date: '03-2026',
                  href: 'https://exclusive-shop-snowy.vercel.app/',
                  github: 'https://github.com/Pablo-Zallio-Dev/exclusiveShop',
                  title: 'Exclusive',
                  subtitle: 'E-commerce',
                  description: 'Tienda online multi-categoría con buscador, sistema de favoritos, carrito y ofertas destacadas.',
                  descriptionPortal: 'E-commerce con catálogo de productos organizado por categorías (belleza, fragancias, muebles, electrónica y más), incluyendo buscador, filtro por categorías, sistema de favoritos, carrito de compra y sección de ofertas del día con descuentos y valoraciones por producto.',
                  stack: ['React', 'React Router', 'Tailwind']
            },
            {
                  id: '002',
                  image: '/images/image_proj003.webp',
                  imageMobile: '/images/image_proj003-mobile.webp',
                  date: '01-2026',
                  href: 'https://job-app-phi-six.vercel.app/',
                  github: 'https://github.com/Pablo-Zallio-Dev/job-app',
                  title: 'Job Application Tracker',
                  subtitle: 'Web App',
                  description: 'Herramienta para organizar y hacer seguimiento de tus candidaturas laborales en un solo lugar.',
                  descriptionPortal: 'Aplicación para gestionar candidaturas de empleo: registro de empresa, puesto, plataforma (LinkedIn, etc.) y estado (aplicado, entrevista, rechazado, oferta), con contadores en tiempo real y notas por candidatura.',
                  stack: ['React', 'Tailwind']
            },
            {
                  id: '001',
                  image: '/images/image_proj004.webp',
                  imageMobile: '/images/image_proj004-mobile.webp',
                  date: '10-2025',
                  href: 'https://fem-dictionary-web-app.vercel.app/#House',
                  github: 'https://github.com/Pablo-Zallio-Dev/dictionary-app',
                  title: 'Dictionary Web App',
                  subtitle: 'Web App',
                  description: 'Buscador de palabras con definiciones, pronunciación en audio y ejemplos de uso.',
                  descriptionPortal: 'Diccionario interactivo con búsqueda de palabras, definiciones organizadas por categoría gramatical, ejemplos de uso, reproducción de audio de pronunciación, selector de tipografía (sans serif, serif, mono) y modo oscuro/claro. Basado en el challenge de Frontend Mentor.',
                  stack: ['HTML', 'Css', 'JavaScript']
            },
      ]