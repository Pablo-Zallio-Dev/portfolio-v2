
export default function AvailabilityBadge(){
      return(
             <section className="flex items-center gap-1 py-1 px-3 border border-border rounded-full ">
            <div className=" w-1.5 h-1.5 rounded-full bg-brand animate-pulse "></div>
            <p className=" font-spaceGrotesk text-xs text-muted-foreground ">
              Disponible para nuevos proyectos
            </p>
          </section>
      )
}