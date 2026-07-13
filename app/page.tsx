import { ThemeProvider } from "next-themes";
import Sidebar from "./components/layout/Sidebar";


export default function Home() {
  return (
   <>
      <ThemeProvider >
   <Sidebar />
      </ThemeProvider>

   </>
  );
}
