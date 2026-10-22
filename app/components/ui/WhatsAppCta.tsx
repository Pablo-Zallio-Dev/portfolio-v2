'use client';

import { WHATSAPP } from '@/data/contact';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ImWhatsapp } from 'react-icons/im';

export default function WhatsAppCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Muestra el botón cuando el usuario pasa los primeros 300px (sale del Hero)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link
      href={WHATSAPP.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pide tu presupuesto por WhatsApp"
      className={`fixed bottom-7 left-5 z-500 flex items-center gap-3 bg-white text-stone-900 shadow-xl rounded-full h-14 w-14 lg:w-14 lg:hover:w-56 px-3.5 overflow-hidden transition-all duration-300 group border border-stone-200 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <div className="shrink-0 flex items-center justify-center text-green-600">
        <ImWhatsapp size={24} className="h-7 w-7 text-green-500" />
      </div>
      <span className="whitespace-nowrap opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm">
        Escríbeme por WhatsApp
      </span>
    </Link>
  );
}