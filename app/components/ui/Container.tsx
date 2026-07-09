      export default function Container({ children}: { children: React.ReactNode}){
            return(
                  <div className=" w-full px-8 sm:px-20 lg:px-40 ">
                        {children}
                  </div>
            )
      }