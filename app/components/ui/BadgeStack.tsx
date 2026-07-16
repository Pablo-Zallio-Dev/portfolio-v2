
export default function BadgeStack({text}: {text:string}){
      return(
            <div className=" w-max py-1 px-3 rounded-md border border-border bg-background font-spaceGrotesk text-xs text-muted-foreground ">
                  <p className="">{text}</p>
            </div>
      )
}