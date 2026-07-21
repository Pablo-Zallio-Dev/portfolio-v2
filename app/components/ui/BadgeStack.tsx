import { Stacks } from "@/data/stack";

export default function BadgeStack({skill, icon: Icon}: Stacks){
      return(
            <div className=" flex items-center gap-1 w-max py-0.5 sm:py-1 px-3 rounded-md border border-border font-spaceGrotesk text-xs  hover:scale-105 hover:shadow-md/20 transition-transform duration-150 cursor-default ">
                 {Icon && < Icon size={18} className=" text-brand " /> }
                  <p className="text-muted-foreground">{skill}</p>
            </div>
      )
}