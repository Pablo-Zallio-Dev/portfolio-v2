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

export default function Hero() {
      return (
            <FadeIn>
                  <Container
                        id="home"
                  >
                        <section className="flex flex-col justify-center items-start gap-5 xl:gap-10 w-full  lg:w-3/4 min-w-0    ">
                              <AvailabilityBadge>
                                    Disponible para nuevos proyectos
                              </AvailabilityBadge>
                              <h1 className=" font-spaceGrotesk 2xl:w-3/4 font-semibold text-3xl sm:text-6xl md:text-7xl md:tracking-tighter">

                                    Construyo experiencias digitales rápidas, intuitivas y preparadas <span className="text-muted-foreground">para crecer</span>.
                              </h1>
                              <div className=" max-w-3xl ">
                                    <SectionParagraph>
                                          Soy desarrollador Frontend especializado en React, Next.js y tecnologías modernas. Ayudo a empresas y clientes a convertir ideas en productos digitales con un enfoque en rendimiento, diseño y experiencia de usuario.
                                    </SectionParagraph>
                              </div>
                              <section className=" flex lg:justify-center items-center  gap-2 w-full pt-8 ">

                                    <Link href={"#projects"} className=" hover:scale-105 hover:-translate-y-0.5 transition-transform duration-100 ">
                                          <Button variant={"primary"} icon={ArrowUpRight}>
                                                Ver Proyectos
                                          </Button>
                                    </Link>

                                    <Link href={"#contact"}>
                                          <Button variant={"outline"}>
                                                Contactar
                                          </Button>
                                    </Link>
                              </section>
                              <section className="w-3/4 lg:w-1/2 min-w-0 self-center">
                                    <ScrollVelocityContainer className=" font-spaceGrotesk  font-bold md:text-5xl [mask:linear-gradient(90deg,transparent_0%,black_15%,black_85%,transparent_100%)]">
                                          <ScrollVelocityRow baseVelocity={2} direction={1}>
                                                HTML5 • Css3 • Javascript • ReactJS • TypeScript • Next.js •
                                                Tailwind CSS • Bootstrap •&nbsp;
                                          </ScrollVelocityRow>
                                          <ScrollVelocityRow baseVelocity={2} direction={-1}>
                                                Interfaces rápidas • Código limpio • Experiencia de usuario •
                                                Rendimiento • &nbsp;
                                          </ScrollVelocityRow>
                                    </ScrollVelocityContainer>
                              </section>
                        </section>

                        <section className=" flex flex-col items-center justify-center gap-2 ">
                             
                              <div className=" py-3 w-min border border-border rounded-full animate-bounce ">
                                    <MoveDown size={14} />
                              </div>
                              <p className=" font-spaceGrotesk text-xs tracking-widest uppercase ">
                                    scroll
                              </p>
                        </section>
                  </Container>
            </FadeIn>

      );
}
