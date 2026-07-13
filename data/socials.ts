import { IconType } from "react-icons"
import { LuDownload, LuLinkedin } from "react-icons/lu"
import { TbBrandGithub } from "react-icons/tb"

export interface NavItem {
      label: string,
      href: string,
      icon: IconType,
}

export const socials: NavItem[] = [
      {
            label: 'GitHub',
            href: '/',
            icon: TbBrandGithub,
      },
      {
            label: 'Linkedin',
            href: '/',
            icon: LuLinkedin,
      },
       {
            label: 'Descargar CV',
            href: '/',
            icon: LuDownload ,
      },
      
]