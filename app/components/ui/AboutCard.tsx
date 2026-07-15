
import { LucideIcon } from "lucide-react";

export type AboutCardProps = {
      icon: LucideIcon,
      titleCard: string,
      textCard: string,
}

export default function AboutCard( {icon: Icon, titleCard, textCard}: AboutCardProps ){
      return(
            <div className=" flex flex-col gap-3 w-full bg-background p-4 border border-border rounded-2xl ">
                  {Icon && <Icon className=" text-brand " />}
                  <div className="flex flex-col gap-1.5">
                  <h2 className=" text-sm font-spaceGrotesk font-semibold ">{titleCard}</h2>
                  <p className=" font-inter text-sm text-muted-foreground "> {textCard} </p>
                  </div>
            </div>
      )
}