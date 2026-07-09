
import { LucideIcon } from "lucide-react";



export type ButtonVariant = 'primary' | 'outline'

const VariantsButton: Record<ButtonVariant, string> = {
      primary: ' bg-primary font-inter text-primary-foreground text-sm ',
      outline: ' border border-border '
}

export type ButtonProps = {
      children: React.ReactNode,
      variant: ButtonVariant,
      icon?: LucideIcon,
      iconPosition?: 'left' | 'right'
      onClick?: () => void,
}

export default function Button({ children, variant, icon: Icon, iconPosition = 'right', onClick }: ButtonProps) {
      return (
            <button className={` flex items-center gap-2 w-max py-2.5 px-5 rounded-full font-medium
             ${VariantsButton[variant]} `} onClick={onClick}>
                  { Icon && iconPosition === "left" &&  <Icon size={16} />}

                  {children}

                  { Icon && iconPosition === "right" && <Icon size={16} />}
            </button>
      )
}

