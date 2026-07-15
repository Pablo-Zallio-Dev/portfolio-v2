import { Eye, Heart, Layers, Zap } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import SectionParagraph from "../common/SectionParagraph";
import SectionTitle from "../common/SectionTitle";
import AboutCard from "../ui/AboutCard";
import Container from "../ui/Container";
import BadgeStack from "../ui/BadgeStack";
import { stacks } from "@/data/stack";
import { SpinningText } from "@/components/ui/spinning-text"

export default function About() {

   


      return (
            <Container id="about">
                  <div className=" grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] w-full lg:w-3/4 ">
                        <div className="  flex flex-col lg:flex-col-reverse lg:self-start gap-3 ">
                              <SpinningText reverse={true} duration={6} radius={8} className=" my-30 ">Pablo • Zallio • Web • Developer • </SpinningText>
                              <SectionHeader text={"01 - sobre mi"} />
                              <SectionTitle text={"Un artesano digital con obsesión por el detalle."} />
                        </div>
                        <div className=" flex flex-col gap-12 ">
                              <div className=" flex flex-col gap-4 ">
                                    <SectionParagraph>
                                          Me enfoco en el desarrollo de interfaces modernas mediante el uso de componentes reutilizables. Aplico React, TypeScript y Storybook para garantizar que cada elemento visual sea consistente, escalable y esté alineado con los estándares actuales de desarrollo web.
                                    </SectionParagraph>
                                    <SectionParagraph>
                                          Domino el ecosistema moderno de CSS (Tailwind, Sass) y la traducción precisa de prototipos de Figma a componentes funcionales (pixel-perfect). Mi enfoque prioriza la estructura limpia de carpetas y la mantenibilidad, buscando siempre que la interfaz no solo sea estética, sino técnica y funcionalmente sólida.
                                    </SectionParagraph>
                              </div>
                              <div className=" grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 ">
                                    <AboutCard icon={Eye} titleCard={"Detalle"} textCard={"Cada píxel, cada transición y cada interacción cuenta."} />
                                    <AboutCard icon={Zap} titleCard={"Rendimiento"} textCard={"Código limpio, rápido y pensado para escalar."} />
                                    <AboutCard icon={Layers} titleCard={"Escalabilidad"} textCard={"Sistemas que crecen sin perder calidad ni claridad."} />
                                    <AboutCard icon={Heart} titleCard={"Calidad"} textCard={"Productos que me enorgullezco de entregar."} />
                              </div>
                              <div className=" flex flex-wrap gap-4 ">
                                    {
                                          stacks.map((stack) => (
                                                 <BadgeStack key={stack.stack} text={stack.stack} />
                                          ))
                                    }
                              </div>
                        </div>
                  </div>
            </Container>
      )
}