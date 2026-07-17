import { Mail } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import SectionParagraph from "../common/SectionParagraph";
import SectionTitle from "../common/SectionTitle";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Form from "../ui/Form";
import Link from "next/link";

export default function Contact() {
      return (
            <Container id="contact" >
                  <section className=" flex flex-col w-full lg:w-3/4">
                        <div className=" flex flex-col items-center gap-4 ">
                              <SectionHeader text={"03.- contacto"} />
                              <SectionTitle center text={"¿Contruimos algo interesante?"} />
                              <SectionParagraph>
                                    <p className="text-center">Estoy abierto a colaboraciones de producto, ingeniería y diseño. Cuéntame en qué estás trabajando.
                                    </p>
                              </SectionParagraph>
                              <Button variant={"primary"}>
                                    <Mail size={16} />
                                    <p className="">pablozalliodev@gmail.com</p>
                              </Button>
                        <Form />
                        <div className=" flex justify-center items-center gap-6 font-inter text-xs text-muted-foreground px-6 ">
                              <Link className="  " href={""}>Github</Link>
                              <p className="">|</p>
                              <Link className=" " href={""}>Linkedin</Link>
                              
                        </div>
                        </div>
                  </section>
            </Container>
      )
}