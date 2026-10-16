import MobileMenu from "./components/layout/MobileMenu";
import Sidebar from "./components/layout/Sidebar";
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Projects from "./components/section/Projects";
import Contact from "./components/section/Contact";
import Footer from "./components/layout/Footer";
import Services from "./components/section/Services";
import WhatsAppCta from "./components/ui/WhatsAppCta";


export default function Home() {
      return (
            <>
                        <div className=" max-lg:hidden lg:block ">
                              <Sidebar variant="desktop" />
                        </div>
                        <main className="min-h-screen bg-bgBackground ">
                              <Hero />
                              <About />
                              <Services />
                              <Projects />
                              <Contact />
                              <WhatsAppCta />
                        </main>
                        <Footer />
                        <div className="lg:hidden">
                              <MobileMenu />
                        </div>
            </>
      );
}


