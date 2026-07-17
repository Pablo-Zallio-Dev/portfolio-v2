import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { IconType } from "react-icons";


export default function LinkFooter( {icon: Icon, label, href}: { icon: IconType, label: string, href: string} ){
      return(
            <Link key={label} className=" flex gap-2 font-inter text-muted-foreground text-xs sm:text-sm " href={href}>
                  <Icon size={16} />
                  {label}
            </Link>
      )
}