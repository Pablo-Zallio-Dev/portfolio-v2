import { ArrowUpRight} from "lucide-react";
import Button from "./components/ui/Button";

export default function Home() {
  return (
   <>
   <Button variant={"primary"} icon={ArrowUpRight} iconPosition="left" >
      Ver proyectos
   </Button>  
   <Button variant={"primary"} icon={ArrowUpRight} >
      Ver proyectos
   </Button>
   

   </>
  );
}
