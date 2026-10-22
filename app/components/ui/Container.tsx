      export default function Container({ id, children, className}: { id: string, children: React.ReactNode, className?: string}){
            return(
                  <div id={id} className={` flex flex-col  items-center gap-6 w-full sm:min-h-screen py-4 px-5 ${className} `}>
                        {children}
                  </div>
            )
      }