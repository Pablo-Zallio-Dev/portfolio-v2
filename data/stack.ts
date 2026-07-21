import { FaBootstrap, FaCss3Alt, FaFigma, FaGithub, FaHtml5, FaReact } from "react-icons/fa6";
import { IconType } from "react-icons"
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";


export interface Stacks  {
      skill: string,
      icon?: IconType
}

export const stacks = [
    {
      skill: 'HTML',
      icon: FaHtml5 
    },
    {
      skill: 'Css',
      icon: FaCss3Alt 
    },
    {
      skill: 'JavaScript',
      icon: IoLogoJavascript 
    },
    {
      skill: 'React',
      icon: FaReact 
    },
    {
      skill: 'Next.JS',
      icon: RiNextjsFill  
    },
    {
      skill: 'Typescript',
      icon: BiLogoTypescript   
    },
    {
      skill: 'Tailwind',
      icon: SiTailwindcss  
    },
    {
      skill: 'Bootstrap',
      icon: FaBootstrap   
    },
    {
      skill: 'Github',
      icon: FaGithub   
    },
    {
      skill: 'Figma',
      icon: FaFigma   
    }

]



