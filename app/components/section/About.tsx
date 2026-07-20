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
                                         Me gusta transformar problemas complejos en interfaces simples, rápidas y fáciles de usar. Disfruto colaborando con equipos de producto y diseño, aunque también puedo liderar proyectos completos para clientes como freelance.
                                    </SectionParagraph>
                                    <SectionParagraph>
                                          No me limito a escribir código. Me interesa entender el contexto del proyecto, las necesidades del usuario y los objetivos del negocio para aportar valor más allá de la implementación técnica.
                                    </SectionParagraph>
                              </div>
                              <div className=" grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 ">
                                    <AboutCard icon={Code} titleCard={"Desarrollo Frontend"} textCard={"Interfaces modernas con React, Next.js y TypeScript."} />
                                    <AboutCard icon={Gauge} titleCard={"UI centrada en el usuario"} textCard={"Diseños limpios, accesibles y orientados a ofrecer la mejor experiencia."} />
                                    <AboutCard icon={Sparkles} titleCard={"Rendimiento"} textCard={"Aplicaciones optimizadas para ofrecer velocidad, estabilidad y una excelente experiencia."} />
                                    <AboutCard icon={Layers} titleCard={"Código mantenible"} textCard={"Arquitecturas escalables, reutilizables y fáciles de mantener."} />
                              </div>
                              <div className=" flex justify-center gap-4 py-5 px-3 w-max rounded-xl bg-background border border-border shadow-lg/20 ">
                                    {
                                          stacks.map((stack) => (
                                                <BadgeStack key={stack} text={stack} />
                                          ))
                                    }
                              </div>
                        </div>
                  </div>
                  </FadeIn>
            </Container>
      )
}