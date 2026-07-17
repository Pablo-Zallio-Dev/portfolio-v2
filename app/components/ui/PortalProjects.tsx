'useClient'
import { ProjectType } from "@/data/projects";
import Button from "./Button";
import BadgeStack from "./BadgeStack";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { RiGithubFill } from "react-icons/ri";

export default function PortalProjects({ project, closePortal }: { project: ProjectType, closePortal: () => void }) {

      return (

            <div className="fixed z-80 inset-0 flex justify-center items-center  bg-black/50 px-6" >
                  <div className="w-full max-w-120  bg-background  rounded-xl overflow-hidden"  >
                        <div className={` relative w-full h-70 bg-cover bg-top bg- border-b border-chart-1 `} style={{ backgroundImage: `url(${project.image})` }} >
                              <div className=" absolute -bottom-20 right-12 w-24 h-51.5 bg-cover bg-no-repeat rounded-lg border border-black shadow-lg/30 " style={{ backgroundImage: `url(${project.imageMobile})` }} />
                        </div>
                        <section className="  flex flex-col  gap-6  p-6 pt-24">

                              <div className=" flex justify-between items-center w-full gap-24 ">
                                    <div className=" flex flex-col gap-1 font-spaceGrotesk ">
                                          <p className=" font-bold text-base sm:text-2xl md:text-2xl"> {project.title} </p>
                                          <p className=" text-xs "> {project.subtitle} </p>
                                    </div>
                                    <p className=" text-xs font-spaceGrotesk "> {project.date} </p>
                              </div>
                              <div className=" flex gap-2 ">
                                    {
                                          project.stack.map((stack) => (
                                                <BadgeStack key={stack} text={stack} />
                                          ))
                                    }
                              </div>
                              <p className=" w-full font-inter text-xs  "> {project.descriptionPortal} </p>
                              <div className=" flex gap-1 ">
                                    <Link target="_blank" href={project.href}>
                                          <Button small variant={"primarySmall"}>
                                                <SquareArrowOutUpRight size={16} />
                                                Ver demo en vivo
                                          </Button>
                                    </Link>
                                    <Link target="_blank"  href={project.href}>
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
                  </div>
            </div>
      )
}