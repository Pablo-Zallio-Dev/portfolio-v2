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

export default function Hero() {
      return (
            <>
                  <Container
                        id="home"
                  >
                        <section className="flex flex-col justify-center items-start gap-5 xl:gap-10 w-full  lg:w-3/4 min-w-0    ">
                              <AvailabilityBadge>
                                    Disponible para nuevos proyectos
                              </AvailabilityBadge>
                              <h1 className=" font-spaceGrotesk font-semibold text-3xl sm:text-6xl md:text-7xl md:tracking-tighter">
                                    Construyo <span className=" text-brand ">interfaces web</span> que
                                    combinan rendimiento técnico con experiencia de usuario.
                              </h1>
                              <div className=" max-w-3xl ">
                                    <SectionParagraph>
                                          Soy un desarrollador <i>Frontend</i> especializado en React,
                                          TypeScript y Tailwind. Me apasiona crear experiencias web rápidas,
                                          accesibles y escalables que resuelven problemas reales de usuarios.
                                    </SectionParagraph>
                              </div>
                              <section className=" flex  items-start lg:items-center gap-2 w-full ">

                                    <Link href={"#projects"}>
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
                              <section className="w-full min-w-0 self-center">
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
                              {" "}
                              {/* ponerlo en fila y mas pequeño
           */}
                              <div className=" py-3 w-min border border-border rounded-full animate-bounce ">
                                    <MoveDown size={14} />
                              </div>
                              <p className=" font-spaceGrotesk text-xs tracking-widest uppercase ">
                                    scroll
                              </p>
                        </section>
                  </Container>
            </>
      );
}
