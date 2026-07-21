import Link from "next/link";
import SectionParagraph from "../common/SectionParagraph";
import Button from "../ui/Button";
import { Mail } from "lucide-react";
import { socials } from "@/data/socials";
import LinkFooter from "../ui/LinkFooter";

export default function Footer() {
  return (
    <section className=" flex justify-center  w-full bg-bgBackground px-3 pb-12  ">
      <div className="  w-full md:w-3/4 max-w-6xl py-8 px-4 bg-background my-8 rounded-xl border border-border shadow-xl/20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:justify-items-center pb-10 border-b border-border ">
          <div className=" flex flex-col gap-3 ">
            <h3 className=" font-spaceGrotesk font-black text-base ">
              Pablo Zallio
            </h3>
            <div className=" max-w-68 lg:max-w-90 ">
              <SectionParagraph small>
                Desarrollador full-stack e ingeniero de interfaces. Diseño
                productos digitales con precisión, carácter y atención al
                detalle.
              </SectionParagraph>
            </div>
            <Link href="mailto:pablozalliodev@gmail.com">
              <Button variant={"outline"} ariaLabel={"Boton para enviar correo electronico"}>
                <Mail size={14} />
                pablozalliodev@gmail.com
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-3 ">
            <h3 className=" font-inter font-semibold text-xs text-muted-foreground tracking-wider ">
              CONECTA
            </h3>
            <div className=" grid grid-cols-1 gap-3 ">
              {socials.map((linkSocial) => (
                <LinkFooter
                  key={linkSocial.label}
                  icon={linkSocial.icon}
                  label={linkSocial.label}
                  href={linkSocial.href}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" flex flex-col sm:flex-row justify-between pt-10 text-center font-inter text-xs text-muted-foreground ">
          <p className="">© 2026 Álvaro Ruiz.</p>
          <p className="">Hecho con NextJS, Tailwind CSS y Mucho cariño</p>
        </div>
      </div>
    </section>
  );
}
