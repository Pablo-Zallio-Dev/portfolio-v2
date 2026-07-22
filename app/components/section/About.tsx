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
                                    <SpinningText reverse={true} duration={6} radius={8} className=" my-30 ">Pablo • Zallio • Web • Developer • </SpinningText>
                                    <div className=" ">
                                          <SectionHeader text={"01 - sobre mi"} />
                                          <SectionTitle text={"Un artesano digital con obsesión por el detalle."} />
                                    </div>
                              </div>
                              <div className=" flex flex-col items-center gap-25 ">
                                    <div className=" flex flex-col gap-4 ">
                                          <SectionParagraph>
                                                Empecé a programar porque quería construir las cosas que tenía en la cabeza. Desde entonces, he invertido una parte del tiempo en investigar, aprender y tratar de entender cómo hacer que una idea funcione de verdad.
                                          </SectionParagraph>
                                          <SectionParagraph>
                                                Disfruto especialmente ese momento en el que todo empieza a encajar y puedes ver el resultado final. Soy bastante exigente con los detalles, me gusta el código limpio y siempre intento llevar cada proyecto un poco más lejos de lo necesario. No porque todo tenga que ser perfecto, sino porque siempre hay algo más que aprender.
                                          </SectionParagraph>
                                          <SectionParagraph>
                                                No me importa demasiado qué tipo de proyecto sea. Si puede aportar valor, me interesa. Y si además me obliga a aprender algo nuevo, mejor todavía.
                                          </SectionParagraph>
                                    </div>
                                    <div className=" grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 ">
                                          <AboutCard icon={Code} titleCard={"Desarrollo Frontend"} textCard={"Interfaces modernas con React, Next.js y TypeScript."} />
                                          <AboutCard icon={Gauge} titleCard={"UI centrada en el usuario"} textCard={"Diseños limpios, accesibles y orientados a ofrecer la mejor experiencia."} />
                                          <AboutCard icon={Sparkles} titleCard={"Rendimiento"} textCard={"Aplicaciones optimizadas para ofrecer velocidad, estabilidad y una excelente experiencia."} />
                                          <AboutCard icon={Layers} titleCard={"Código mantenible"} textCard={"Arquitecturas escalables, reutilizables y fáciles de mantener."} />
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