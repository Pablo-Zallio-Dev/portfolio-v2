import React from 'react'
import SectionParagraph from '../common/SectionParagraph';
import { User, FileCheck, Gauge, Clock, type LucideIcon, Icon } from "lucide-react";

export interface ProcessStep {
      id: string;
      step: string;
      title: string;
      description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
      {
            id: "hablamos",
            step: "01",
            title: "Hablamos",
            description: "Entiendo tu negocio y lo que necesitas.",
      },
      {
            id: "diseno",
            step: "02",
            title: "Diseño",
            description: "Ves cómo quedará antes de construirlo.",
      },
      {
            id: "desarrollo",
            step: "03",
            title: "Desarrollo",
            description: "Construyo tu web, rápida y lista para móvil.",
      },
      {
            id: "lanzamiento",
            step: "04",
            title: "Lanzamiento",
            description: "Revisión final y publicación. Te explico cómo gestionarla.",
      },
];


export interface Benefit {
      id: string;
      icon: LucideIcon;
      text: string;
}

export const BENEFITS: Benefit[] = [
      {
            id: "trato-directo",
            icon: User,
            text: "Trato directo con una sola persona",
      },
      {
            id: "presupuesto-cerrado",
            icon: FileCheck,
            text: "Presupuesto cerrado antes de empezar",
      },
      {
            id: "web-rapida",
            icon: Gauge,
            text: "Web rápida y optimizada para móvil y Google",
      },
      {
            id: "respuesta-rapida",
            icon: Clock,
            text: "Respuesta en menos de 24 horas",
      },
];
export default function ServiceWorkCard() {
      return (
            <section className=" flex flex-col gap-12 w-full pt-16 ">
                  <section className="">
                        <h4 className=" font-inter text-xs text-muted-foreground font-semibold tracking-widest uppercase ">cómo trabajo</h4>
                        <section className=" grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6  pt-4 ">
                              {
                                    PROCESS_STEPS.map((process) => (
                                          <section key={process.id} className=" flex flex-col gap-2 w-full p-5 border border-border rounded-xl bg-background ">
                                                <span className=" font-spaceGrotesk text-brand font-light text-xs ">{process.step}</span>
                                                <h3 className=" font-spaceGrotesk text-base lg:text-xl font-semibold ">{process.title}</h3>
                                                <SectionParagraph small>{process.description}</SectionParagraph>
                                          </section>
                                    ))
                              }
                        </section>
                  </section>
                  <section className="">
                        <h4 className=" font-inter text-xs text-muted-foreground font-semibold tracking-widest uppercase ">porque conmigo</h4>
                        <section className=" grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6  pt-4">
                        {
                              BENEFITS.map((benefit) => {
                                    const Icon = benefit.icon;
                                    return (
                                          <section key={benefit.id} className=" flex flex-col gap-2 w-full p-5 border border-border rounded-xl bg-background ">
                                                 <Icon className="size-5 text-blue-500" aria-hidden="true" />
                                                 <SectionParagraph small className=' text-primary '>{benefit.text}</SectionParagraph>
                                          </section>
                                    )
                              })
                        }
                        </section>
                  </section>
            </section>
      )
}
