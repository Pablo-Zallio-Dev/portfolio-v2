import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { IconType } from "react-icons";

export interface NavLink {
      label: string;
      href: string;
      icon: LucideIcon | IconType;
      variant: "desktop" | "mobile";
      expanded?: boolean;
      active: boolean;
      onHover?: () => void;
      onClick?: () => void;
}

export default function NavLink({
      label,
      href,
      icon: Icon,
      variant,
      active,
      onHover,
      onClick
}: NavLink) {

      const showLabel = variant === "mobile" || active;

      const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();

            document
                  .getElementById(href.replace("#", ""))
                  ?.scrollIntoView({ behavior: "smooth" });

            onClick?.();
      };

      return (
            <Link
                  key={label}
                  href={href}
                  onMouseEnter={onHover}
                  onClick={handleClick}
                  className={`
        flex items-center gap-3 rounded-xl p-3
        ${active ? "bg-muted text-foreground" : "text-muted-foreground"}
    `}
            >
                  <Icon size={19} className={` shrink-0`} />
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
