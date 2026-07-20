
export default function ErrorForm( {children}: { children: React.ReactNode } ){
      return(
            <p className="absolute -bottom-5 left-3 font-inter text-xs font-semibold text-destructive ">{children}</p>
      )
}