
export default function BadgeStack({text}: {text:string}){
      return(
            <div className=" w-max py-1 px-3 rounded-md border border-border bg-background font-spaceGrotesk text-xs text-muted-foreground hover:scale-115 hover:shadow-md/20 transition-transform duration-150 cursor-default ">
                  <p className="">{text}</p>
            </div>
      )
}