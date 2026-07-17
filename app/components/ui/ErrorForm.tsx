
export default function ErrorForm( {children}: { children: React.ReactNode } ){
      return(
            <p className="absolute -bottom-5 left-3 font-inter text-xs text-destructive ">{children}</p>
      )
}