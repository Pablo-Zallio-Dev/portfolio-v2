import React from 'react'
import Container from '../ui/Container'
import ServiceCard from '../ui/ServiceCard'
import ServiceWorkCard from '../ui/ServiceWorkCard'
import ServiceCta from '../ui/ServiceCta'

export default function Services() {
      return (
            <Container id={'services'} className=' pt-28 ' >
                  <section className="flex flex-col justify-center items-start gap-5 xl:gap-10 w-full  lg:w-3/4 min-w-0">
                        <ServiceCard />
                        <ServiceWorkCard />
                        <ServiceCta />
                  </section>
            </Container>
      )
}
