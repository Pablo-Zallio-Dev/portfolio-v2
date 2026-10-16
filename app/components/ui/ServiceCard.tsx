import React from "react";
import SectionHeader from "../common/SectionHeader";
import SectionTitle from "../common/SectionTitle";
import SectionParagraph from "../common/SectionParagraph";
import { SERVICES } from "@/data/services";

export default function ServiceCard() {
      return (
            <section className=" ">
                  <div className="">
                        <SectionHeader text={"02.- Mis servicios"} />
                        <SectionTitle text={"Webs para negocios que cuidan los detalles."} />
                        <SectionParagraph className=" py-6 ">
                              Primero estudio tu negocio, después diseño una web que solo podría ser
                              tuya.
                        </SectionParagraph>
                  </div>
                  <div className=" grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6 pt-12 ">
                        {SERVICES.map((service) => {
                              const Icon = service.icon;

                              return <section key={service.id} className=" flex flex-col justify-between h-full p-5 bg-white rounded-2xl border border-border ">
                                    <div className=" flex flex-col justify-between flex-1  ">

                                          <Icon className="size-5 text-blue-500" aria-hidden="true" />
                                          <div className=" py-4 ">
                                                <h4 className=" text-xl font-spaceGrotesk font-medium ">{service.title}</h4>
                                                <p className=" pt-1 text-xs font-inter text-muted-foreground "><span className=" font-medium text-foreground ">Ideal para: </span>{service.idealFor}</p>
                                          </div>
                                          <SectionParagraph small>
                                                {service.description}
                                          </SectionParagraph>
                                    </div>
                                    <div className=" flex flex-col gap-2 mt-6 pt-4 border-t border-border ">
                                          {service.features.map((feature) => (
                                                <div key={feature[0]} className=" flex items-center gap-1.5 ">
                                                      <div className=" h-1 w-1 bg-brand rounded-full " />
                                                      <SectionParagraph small>{feature}</SectionParagraph>
                                                </div>
                                          ))}
                                    </div>
                              </section>;
                        })}
                  </div>
                        <SectionParagraph small className=" mt-6 w-full text-center " >¿No sabes cuál necesitas? Cuéntame tu caso y te preparo un presupuesto cerrado en 24 horas.</SectionParagraph>
            </section>
      );
}
