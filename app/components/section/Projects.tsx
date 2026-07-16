'use client'
import { Plus } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import SectionTitle from "../common/SectionTitle";
import Container from "../ui/Container";
import { projects, ProjectType } from "@/data/projects";
import { useState } from "react";
import { createPortal } from "react-dom";
import PortalProjects from "../ui/PortalProjects";

export default function Project() {
      const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
      const [isActive, setIsActive] = useState(true)

      return (
            <Container id={"projects"} >
                  <section className=" flex flex-col w-full lg:w-3/4">
                        <SectionHeader text={"02.- proyectos seleccionados"} />
                        <SectionTitle text={"Trabajos recientes."} />
                        <div className=" grid grid-cols-1 py-8 ">
                              {
                                    projects.map((proj) => (
                                          <div key={proj.id} className="grid grid-cols-3 md:grid-cols-[120px_1fr_1fr_auto]  items-center pb-8 pt-6 px-2 border-b border-border hover:bg-chart-1/20 transition-colors duration-300 ">
                                                <p className=" text-xs font-spaceGrotesk "> {proj.date} </p>
                                                <div className=" flex flex-col gap-2 font-spaceGrotesk ">
                                                      <p className=" font-bold text-sm sm:text-xl md:text-2xl"> {proj.title} </p>
                                                      <p className=" text-xs "> {proj.subtitle} </p>
                                                </div>
                                                <div className=" hidden md:block  ">
                                                      <p className=" w-3/4 font-inter text-sm "> {proj.description} </p>
                                                </div>
                                                <button className=" flex flex-col  items-center justify-self-end " onClick={() => (setSelectedProject(proj), setIsActive(true))}>
                                                      <Plus size={16} />
                                                      <p className=" font-spaceGrotesk text-[10px] ">Mas info.</p>
                                                </button>
                                          </div>
                                    ))
                              }
                        </div>
                  </section>
                  {
                        selectedProject && isActive &&
                        createPortal(
                              <PortalProjects project={selectedProject} closePortal={() => setIsActive(!isActive)} />,
                              document.body
                        )
                  }
            </Container>
      )
}