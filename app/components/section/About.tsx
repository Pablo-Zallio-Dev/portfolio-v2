import { Code, Gauge, Layers, Sparkles } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import SectionParagraph from "../common/SectionParagraph";
import SectionTitle from "../common/SectionTitle";
import AboutCard from "../ui/AboutCard";
import Container from "../ui/Container";
import BadgeStack from "../ui/BadgeStack";
import { stacks } from "@/data/stack";
import { SpinningText } from "@/app/components/ui/spinning-text"
import FadeIn from "../common/FadeIn";

export default function About() {




      return (
            <Container id="about">
                  <FadeIn>
                        <div className=" grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] w-full lg:w-3/4  ">
                              <div className="  flex flex-col lg:flex-col-reverse lg:self-start gap-3 ">
                                    <SpinningText reverse={true} duration={6} radius={8} className=" my-30 ">Pablo • Zallio • Desarrollo • Web • </SpinningText>
                                    <div className=" ">
                                          <SectionHeader text={"01 - sobre mi"} />
                                          <SectionTitle text={"Un artesano digital con obsesión por el detalle."} />
                                    </div>
                              </div>
                              <div className=" flex flex-col items-center gap-25 ">
                                    <div className=" flex flex-col gap-4 ">
                                          <SectionParagraph>
                                                Empecé a programar por la necesidad de dar vida a las ideas que tenía en la cabeza. Con el tiempo, entendí que un buen sitio web no solo debe verse bien, sino convertirse en una herramienta que genere resultados reales y retornos para quien confía en mí.
                                          </SectionParagraph>
                                          <SectionParagraph>
                                                Mi objetivo es transformar la visión de tu proyecto en una experiencia accesible, rápida e intuitiva que conecte con tus visitantes desde el primer segundo. Cuido el código y los pequeños detalles con la máxima exigencia, no por mero perfeccionismo, sino porque una web optimizada y fluida transmite mayor profesionalidad, genera más confianza y ayuda a convertir más visitas en clientes.
                                          </SectionParagraph>
                                    </div>
                                    <div className=" grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 ">
                                          <AboutCard icon={Code} titleCard={"Desarrollo personalizado"} textCard={"Webs y plataformas modernas construidas sin plantillas genéricas, adaptadas 100% a tu marca."} />
                                          <AboutCard icon={Sparkles} titleCard={"Diseño intuitivo"} textCard={"Interfaces claras, atractivas y accesibles que guían al visitante de forma natural a contactar o comprar."} />
                                          <AboutCard icon={Gauge} titleCard={"Velocidad y rendimiento"} textCard={"Carga ultrarrápida y navegación fluida para retener visitas, mejorar tu posicionamiento en Google y proyectar máxima confianza."} />
                                          <AboutCard icon={Layers} titleCard={"Estructura escalable"} textCard={"Construcción sólida y limpia que permite añadir nuevas funciones a tu web sin complicaciones ni costes innecesarios a futuro."} />
                                    </div>
                                    <div className=" flex flex-wrap justify-center gap-4 py-5 px-1.5 xl:px-5  rounded-xl bg-background border border-border shadow-lg/20 ">
                                          {
                                                stacks.map((stack) => (
                                                      <BadgeStack key={stack.skill} skill={stack.skill} icon={stack.icon} />
                                                ))
                                          }
                                    </div>
                              </div>
                        </div>
                  </FadeIn>
            </Container>
      )
}