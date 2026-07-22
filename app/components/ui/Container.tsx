      export default function Container({ id, children}: { id: string, children: React.ReactNode}){
            return(
                  <div id={id} className=" flex flex-col justify-center  items-center gap-6 w-full min-h-screen py-4 px-5 ">
                        {children}
                  </div>
            )
      }