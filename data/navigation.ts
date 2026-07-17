import { FolderGit2, House, LucideIcon, User, Mail, HousePlus, UsersRound, FolderOpen, MailOpen } from "lucide-react"

export interface NavItem {
      label: string,
      href: string,
      icon: LucideIcon,
      activeIcon: LucideIcon
}

export const navigation: NavItem[] = [
      {
            label: 'Inicio',
            href: '#home',
            icon: House,
            activeIcon: HousePlus

      },
      {
            label: 'Sobre mi',
            href: '#about',
            icon: User,
            activeIcon: UsersRound
      },
      {
            label: 'Proyectos',
            href: '#projects',
            icon: FolderGit2,
            activeIcon: FolderOpen
      },
      {
            label: 'Contacto',
            href: '#contact',
            icon: Mail,
            activeIcon: MailOpen
      },
]