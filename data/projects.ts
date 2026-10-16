
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
            id: '004',
            image: '/images/image_proj006.webp',
            imageMobile: '/images/image_proj006-mobile.webp',
            date: '08-2026',
            href: 'https://vitaliscenter.vercel.app/',
            github: 'https://github.com/Pablo-Zallio-Dev/vitaliscenter',
            title: 'VitalisCenter',
            subtitle: 'Web para una clínica de fisioterapia',
            description: 'Una clínica de fisioterapia quería diferenciarse del resto. Creé una web cálida y clara, pensada para móvil, donde el paciente contacta fácil por WhatsApp.',
            descriptionPortal: 'Proyecto freelance desarrollado de principio a fin para una clínica de fisioterapia que quería alejarse de la estética sanitaria habitual y transmitir cercanía y confianza. Creé una web editorial y cálida, con Inicio, Servicios, Nosotros y Contacto, donde el paciente entiende qué ofrece la clínica y puede contactar por formulario o WhatsApp, además de encontrar su ubicación en el mapa. Diseñada primero para móvil, que es desde donde la mayoría de pacientes la va a ver, y construida con Atomic Design para que sea fácil de mantener y ampliar. El diseño se trabajó con ayuda de IA; el desarrollo es propio.',
            stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'Zustand']
      },
      {
            id: '003',
            image: '/images/image_proj001.webp',
            imageMobile: '/images/image_proj001-mobile.webp',
            date: '05-2026',
            href: 'https://cosas-ricas.vercel.app/',
            github: 'https://github.com/Pablo-Zallio-Dev/cosas_ricas',
            title: 'Cosas Ricas',
            subtitle: 'Pasteleria Artesanal',
            description: 'Una pastelería familiar de Torrent quería que sus clientes vieran sus tartas y encargaran fácil. Creé una web con catálogo y pedidos por WhatsApp.',
            descriptionPortal: 'Proyecto para una pastelería familiar de Torrent especializada en tartas artesanales, que necesitaba mostrar su trabajo y facilitar los encargos personalizados. Creé una web con galería de productos, una sección de presupuestos para bodas, cumpleaños y eventos, y contacto directo por WhatsApp, para que el cliente vea las tartas y haga su encargo en pocos pasos desde el móvil.',
            stack: ['NextJS', 'TailwindCss', 'React-Hook-Form']
      },
      {
            id: '002',
            image: '/images/image_proj005.webp',
            imageMobile: '/images/image_proj005-mobile.webp',
            date: '06-2026',
            href: 'https://aeroswim.vercel.app/',
            github: 'https://github.com/Pablo-Zallio-Dev/aeroswim',
            title: 'Aeroswim',
            subtitle: 'Proyecto de portfolio · Web para un club de natación',
            description: 'Proyecto conceptual de una web para un club de natación de alto rendimiento, con una identidad visual deportiva y tecnológica.',
            descriptionPortal: 'Proyecto de portfolio, sin cliente real, que plantea cómo sería la web de un centro de alto rendimiento especializado en natación. Presenta la filosofía del club, sus instalaciones, horarios y resultados mediante una navegación modular y una identidad visual deportiva y tecnológica. Lo desarrollé para explorar un estilo más inmersivo y mostrar cómo trabajo la interfaz y la animación.',
            stack: ['NextJS', 'TailwindCss', 'React-Hook-Form']
      },

      {
            id: '001',
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
]