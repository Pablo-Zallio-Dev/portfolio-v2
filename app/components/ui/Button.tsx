
import { LucideIcon } from "lucide-react";



export type ButtonVariant = 'primary' | 'outline' | 'primarySmall' | 'outlineSmall'

const VariantsButton: Record<ButtonVariant, string> = {
      primary: '  py-2.5 px-5  bg-primary font-inter text-primary-foreground cursor-pointer   ',
      outline: '  py-2.5 px-5  bg-background border border-border font-inter cursor-pointer ' ,
      primarySmall: '  py-1.5 px-3  bg-primary font-inter text-primary-foreground cursor-pointer ',
      outlineSmall:'  py-1.5 px-3  bg-background border border-border font-inter cursor-pointer'
}

export type ButtonProps = {
      children: React.ReactNode,
      variant: ButtonVariant,
      ariaLabel: string,
      icon?: LucideIcon,
      small?: boolean
      iconPosition?: 'left' | 'right'
      type?: "button" | "submit" | "reset";
      onClick?: () => void,
}

export default function Button({ children, variant, ariaLabel, icon: Icon, small, iconPosition = 'right', onClick, type='button' }: ButtonProps) {
      return (
            <button aria-label={ariaLabel} type={type} className={` flex items-center gap-2 w-max  rounded-full font-medium ${small ?' text-[10px]' : 'text-xs lg:text-sm '} 
             ${VariantsButton[variant]} `} onClick={onClick}>
                  { Icon && iconPosition === "left" &&  <Icon size={16} />}

                  {children}

                  { Icon && iconPosition === "right" && <Icon size={16} />}
            </button>
      )
}

