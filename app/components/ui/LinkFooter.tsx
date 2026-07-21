import Link from "next/link";
import { IconType } from "react-icons";


export default function LinkFooter( {icon: Icon, label, href}: { icon: IconType, label: string, href: string} ){
      return(
            <Link key={label} className=" flex items-center gap-2 py-1 px-1.5 rounded-lg font-inter text-muted-foreground text-xs sm:text-sm hover:shadow-sm/20  " href={href}>
                  <Icon size={16} />
                  {label}
            </Link>
      )
}