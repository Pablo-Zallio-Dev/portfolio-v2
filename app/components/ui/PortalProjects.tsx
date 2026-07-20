"use client";

import { motion } from "framer-motion";
import { ProjectType } from "@/data/projects";
import Button from "./Button";
import BadgeStack from "./BadgeStack";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { RiGithubFill } from "react-icons/ri";

export default function PortalProjects({ project, closePortal }: { project: ProjectType, closePortal: () => void }) {

      return (

            <motion.div
                  className="fixed z-80 inset-0 flex justify-center items-center  bg-black/50 px-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
            >
                  <motion.div
                        className="w-full max-w-120  bg-background  rounded-xl overflow-hidden"
                        initial={{
                              opacity: 0,
                              y: 20,
                              scale: 0.75,
                        }}
                        animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                        }}
                        exit={{
                              opacity: 0,
                              y: 20,
                              scale: 0.95,
                        }}
                        transition={{
                              duration: 0.35,
                              type: "spring",
                              stiffness: 260,
                              damping: 22,
                        }}
                  >
                        <div className={` relative w-full h-50 sm:h-60 md:h-70  bg-cover bg-top bg- border-b border-chart-1 `} style={{ backgroundImage: `url(${project.image})` }} >
                              <div className=" absolute -bottom-20 right-12 w-24 h-51.5 bg-cover bg-no-repeat rounded-lg border border-black shadow-lg/30 " style={{ backgroundImage: `url(${project.imageMobile})` }} />
                        </div>
                        <section className="  flex flex-col  gap-6  p-6 pt-20 sm:pt-26">

                              <div className=" flex justify-between items-center ">
                                    <div className=" min-w-max flex flex-col gap-1 font-spaceGrotesk ">
                                          <p className="  font-bold text-xl lg:text-2xl"> {project.title} </p>
                                          <p className="  text-xs md:text-sm "> {project.subtitle} </p>
                                    </div>
                                    <p className=" min-w-max text-[10px] sm:text-xs font-spaceGrotesk "> {project.date} </p>
                              </div>
                              <div className=" flex gap-2 ">
                                    {
                                          project.stack.map((stack) => (
                                                <BadgeStack key={stack} text={stack} />
                                          ))
                                    }
                              </div>
                              <p className=" w-full font-inter text-xs sm:text-sm sm:leading-5  "> {project.descriptionPortal} </p>
                              <div className=" flex gap-1 ">
                                    <Link target="_blank" href={project.href}>
                                          <Button small variant={"primarySmall"}>
                                                <SquareArrowOutUpRight size={16} />
                                                Ver demo en vivo
                                          </Button>
                                    </Link>
                                    <Link target="_blank" href={project.href}>
                                          <Button small variant={"outlineSmall"}>
                                                <RiGithubFill />
                                                GitHub
                                          </Button>
                                    </Link>
                              </div>

                              <div className=" self-center ">
                                    <Button variant={"outline"} onClick={closePortal}>
                                          Cerrar
                                    </Button>

                              </div>
                        </section>
                  </motion.div>
            </motion.div>
      )
}