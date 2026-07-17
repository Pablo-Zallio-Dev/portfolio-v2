
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
                  id: '001',
                  image: '/images/image_proj001.jpg',
                  imageMobile: '/images/image_proj001-mobile.jpg',
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
                  id: '002',
                  image: '/images/image_proj002.jpg',
                  imageMobile: '/images/image_proj002-mobile.jpg',
                  date: '03-2026',
                  href: 'https://exclusive-shop-snowy.vercel.app/',
                  github: 'https://github.com/Pablo-Zallio-Dev/exclusiveShop/tree/main',
                  title: 'Exclusive',
                  subtitle: 'E-commerce',
                  description: 'Tienda online multi-categoría con buscador, sistema de favoritos, carrito y ofertas destacadas.',
                  descriptionPortal: 'E-commerce con catálogo de productos organizado por categorías (belleza, fragancias, muebles, electrónica y más), incluyendo buscador, filtro por categorías, sistema de favoritos, carrito de compra y sección de ofertas del día con descuentos y valoraciones por producto.',
                  stack: ['React', 'React Router', 'Tailwind']
            },
            {
                  id: '003',
                  image: '/images/image_proj003.jpg',
                  imageMobile: '/images/image_proj003-mobile.jpg',
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
                  id: '004',
                  image: '/images/image_proj004.jpg',
                  imageMobile: '/images/image_proj004-mobile.jpg',
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