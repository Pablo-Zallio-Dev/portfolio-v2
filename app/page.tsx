import { ThemeProvider } from "next-themes";
import MobileMenu from "./components/layout/MobileMenu";
import Sidebar from "./components/layout/Sidebar";
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Projects from "./components/section/Projects";
import Contact from "./components/section/Contact";


export default function Home() {
      return (
            <>
                  <ThemeProvider>
                        <div className="hidden lg:block">
                              <Sidebar variant="desktop" />
                        </div>
                        <main className="min-h-screen bg-bgBackground ">
                              <Hero />
                              <About />
                              <Projects />
                              <Contact />
                        </main>

                        <div className="lg:hidden">
                              <MobileMenu />
                        </div>
                  </ThemeProvider>
            </>
      );
}


