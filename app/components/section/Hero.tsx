'use client'
import Link from "next/link";
import Button from "../ui/Button";
import { ArrowUpRight, MoveDown } from "lucide-react";
import {
      ScrollVelocityContainer,
      ScrollVelocityRow,
} from "@/app/components/ui/scroll-based-velocity";
import Container from "../ui/Container";
import SectionParagraph from "../common/SectionParagraph";
import AvailabilityBadge from "../ui/AvailabilityBadge";
import FadeIn from "../common/FadeIn";
import { WHATSAPP } from "@/data/contact";
import Image from "next/image";

export default function Hero() {
      return (
            <FadeIn>
                  <Container
                        id="home"
                        className=" lg:px-28 pt-8 "
                  >
                        <section className="flex flex-col justify-center items-start  xl:gap-10 w-full  lg:w-3/4 min-w-0 ">
                              <div className=" flex items-center justify-between w-full ">

                                    <div className="relative w-25 sm:w-40 h-25 sm:h-40 ">
                                          <Image
                                                src="/images/logo-claro.png"
                                                alt="Pablo Zallio Desarrollo Web"
                                                fill
                                                sizes="(min-width: 640px) 192px, 128px"
                                                className="object-contain dark:hidden"
                                          />
                                          <Image
                                                src="/images/logo-oscuro.png"
                                                alt="Pablo Zallio Desarrollo Web"
                                                fill
                                                sizes="(min-width: 640px) 192px, 128px"
                                                className="object-contain hidden dark:block"
                                          />
                                    </div>
                                    <AvailabilityBadge>
                                          Pablo Zallio Desarrollador web
                                    </AvailabilityBadge>
                              </div>
                              <h1 className=" w-full pt-4 font-spaceGrotesk font-bold text-3xl sm:text-6xl md:text-7xl md:tracking-tighter text-center md:text-start">

                                    Tu proyecto web necesita más que código: necesita <span className=" italic text-brand/80 font-black uppercase">personalidad.</span>
                              </h1>
                              <div className=" max-w-5xl py-5 ">
                                    <SectionParagraph className=" text-sm ">
                                          Soy Pablo, Desarrollador Frontend especializado en crear experiencias web que conectan con las personas. Ayudo a marcas y profesionales a dar vida a sus ideas mediante sitios modernos, intuitivos y optimizados para convertir visitantes en clientes.<br />
                                          <br />
                                          Un buen desarrollo combina funcionalidad y sensaciones. Cuido la arquitectura, la velocidad y el diseño para transmitir confianza desde el primer clic.                                    </SectionParagraph>
                              </div>
                              <section className=" flex  sm:flex-row justify-center md:justify-start items-center  gap-2 w-full pb-5  ">

                                    <Link href={"#projects"} className=" hover:scale-105 hover:-translate-y-0.5 transition-transform duration-100 ">
                                          <Button ariaLabel="Boton para ver proyectos" variant={"primary"} icon={ArrowUpRight}>
                                                Ver Proyectos
                                          </Button>
                                    </Link>

                                    <Link href={WHATSAPP.url}
                                          target="_blank"
                                          rel="noopener noreferrer">
                                          <Button ariaLabel="Boton para ir a la seccion contacto" variant={"outline"}>
                                                Pide tu presupuesto
                                          </Button>
                                    </Link>
                              </section>
                              {/*   <section className="w-3/4 lg:w-1/2 min-w-0 self-center">
                                    <ScrollVelocityContainer className=" font-spaceGrotesk font-bold [mask:linear-gradient(90deg,transparent_0%,black_15%,black_85%,transparent_100%)]">
                                          <ScrollVelocityRow baseVelocity={4} direction={1}>
                                                DISEÑO Y DESARROLLO WEB • PÁGINAS QUE CONVIERTEN • OPTIMIZACIÓN Y VELOCIDAD • INTERFACES A MEDIDA • EXPERIENCIA DE USUARIO • &nbsp;
                                          </ScrollVelocityRow>
                                    </ScrollVelocityContainer>
                              </section> */}
                        </section>

                        <section className=" flex flex-col items-center justify-center gap-2 text-brand ">

                              <div className=" py-3 w-min border border-border rounded-full animate-bounce  ">
                                    <MoveDown size={14} />
                              </div>
                              <p className=" font-spaceGrotesk font-semibold text-xs  tracking-widest uppercase  ">
                                    scroll
                              </p>
                        </section>
                  </Container>
            </FadeIn>

      );
}
