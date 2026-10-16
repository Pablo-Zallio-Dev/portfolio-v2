import { WHATSAPP } from '@/data/contact'
import Link from 'next/link'
import React from 'react'
import { ImWhatsapp } from 'react-icons/im'

export default function WhatsAppCta() {
      return (
            <Link href={WHATSAPP.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pide tu presupuesto por WhatsApp" className="fixed bottom-5 left-5 z-50 flex items-center gap-3 bg-white text-stone-900 shadow-lg rounded-full h-14 w-14 lg:w-14 lg:hover:w-56 px-3.5 overflow-hidden transition-all duration-300 group border border-stone-100" >
                  <div className="shrink-0 flex items-center justify-center text-green-600">
                        <ImWhatsapp size={24} className=' h-7 w-7 text-brand ' />
                  </div>
                  <span className="whitespace-nowrap opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm">
                        Escríbeme por WhatsApp
                  </span>
            </Link>
      )
}
