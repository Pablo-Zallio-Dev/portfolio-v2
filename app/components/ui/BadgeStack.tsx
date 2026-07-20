
export default function BadgeStack({text}: {text:string}){
      return(
            <div className=" w-max py-0.5 sm:py-1 px-3 rounded-md border border-border font-spaceGrotesk text-xs text-muted-foreground hover:scale-105 hover:shadow-md/20 transition-transform duration-150 cursor-default ">
                  <p className="">{text}</p>
            </div>
      )
}