import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { IconType } from "react-icons";

export interface NavLink {
      label: string;
      href: string;
      icon: LucideIcon | IconType;
      activeIcon?: LucideIcon | IconType;
      variant: "desktop" | "mobile";
      expanded?: boolean;
      download?: boolean;
      active: boolean;
      hovered: boolean;
      social?: boolean
      onHover?: () => void;
      onClick?: () => void;
}

export default function NavLink({
      label,
      href,
      icon: Icon,
      activeIcon: ActiveIcon,
      variant,
      active,
      hovered,
      download,
      social,
      onHover,
      onClick,
}: NavLink) {

      const showLabel = variant === "mobile" || hovered;

      const handleClick = () => {
            if (!social) {
                  document
                        .getElementById(href.replace("#", ""))
                        ?.scrollIntoView({ behavior: "smooth" });
            }

            onClick?.();
      };

      const CurrentIcon = active && ActiveIcon ? ActiveIcon : Icon;
      return (
            <Link
                  key={label}
                  href={href}
                  onMouseEnter={onHover}
                  download={download}
                  onClick={handleClick}
                  target={social ? "_blank" : undefined}
                  className={`
        flex items-center gap-3 rounded-xl p-3
        ${active ? "bg-brand/20 text-foreground" : "text-muted-foreground"}
        
    `}

            >
                  <CurrentIcon size={19} className={` shrink-0`} />
                  <span
                        className={`
    overflow-hidden whitespace-nowrap font-inter text-sm font-medium tracking-tight transition-all duration-300
    ${showLabel ? "max-w-40 opacity-100 ml-1" : "max-w-0 opacity-0 ml-0"}
  `}
                  >
                        {label}
                  </span>
            </Link>
      );
}
