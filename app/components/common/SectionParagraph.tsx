
export default function SectionParagraph( {children, small, className}: { children: React.ReactNode, small?: boolean, className?: string } ){
      return <p className={` font-inter ${ small ?'text-xs lg:text-sm' :'text-base lg:text-lg' }  text-muted-foreground  ${className}`}> {children} </p>
}