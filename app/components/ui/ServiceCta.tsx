import React from 'react'
import Button from './Button'
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function ServiceCta() {
  return (
    <section className=" flex flex-col sm:flex-row sm:justify-around gap-4  items-center w-full max-w-200 mx-auto py-12 ">
      <Link href={'#contact'}>
      <Button  variant={'primary'} ariaLabel={''} icon={MessageCircle} iconPosition='left' >Pide tu presupuesto <ArrowUpRight size={16} strokeWidth={1.5} /> </Button>
      </Link>
      <Link href={''}>
            <Button  variant={'outline'} ariaLabel={''} icon={Mail} iconPosition='left'>pablozalliodev@gmail.com</Button>
      </Link>
    </section>
  )
}
