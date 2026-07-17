
export default function SectionParagraph( {children, small}: { children: React.ReactNode, small?: boolean } ){
      return <p className={` font-inter ${ small ?'text-xs lg:text-sm' :'text-base lg:text-lg' }  text-muted-foreground `}> {children} </p>
}