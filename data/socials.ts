import { IconType } from "react-icons"
import { LuDownload, LuLinkedin } from "react-icons/lu"
import { TbBrandGithub } from "react-icons/tb"

export interface NavItem {
      label: string,
      href: string,
      icon: IconType,
      download?: boolean
}

export const socials: NavItem[] = [
      {
            label: 'GitHub',
            href: 'https://www.github.com/Pablo-Zallio-Dev',
            icon: TbBrandGithub,
      },
      {
            label: 'Linkedin',
            href: 'https://www.linkedin.com/in/pablozalliodev/',
            icon: LuLinkedin,
      },
       {
            label: 'Descargar CV',
            href: '/documents/CV_ES_Pablo_Zallio.pdf',
            icon: LuDownload ,
            download: true,
      },
      
]