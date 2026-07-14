import { FolderGit2, House, LucideIcon, User, Mail } from "lucide-react"

export interface NavItem {
      label: string,
      href: string,
      icon: LucideIcon,
}

export const navigation: NavItem[] = [
      {
            label: 'Inicio',
            href: '#home',
            icon: House,
      },
      {
            label: 'Sobre mi',
            href: '#about',
            icon: User,
      },
      {
            label: 'Proyectos',
            href: '#projects',
            icon: FolderGit2,
      },
      {
            label: 'Contacto',
            href: '#contact',
            icon: Mail,
      },
]