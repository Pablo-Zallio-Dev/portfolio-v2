import { Mail } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import SectionParagraph from "../common/SectionParagraph";
import SectionTitle from "../common/SectionTitle";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Form from "../ui/Form";
import Link from "next/link";
import FadeIn from "../common/FadeIn";

export default function Contact() {
      return (
            <Container id="contact" >
                  <FadeIn>
                  <section className=" flex flex-col w-full lg:w-3/4 py-12">
                        <div className=" flex flex-col items-center gap-6 ">
                              <SectionHeader text={"03.- contacto"} />
                              <SectionTitle center text={"¿Contruimos algo interesante?"} />
                              <div className=" lg:w-3/4 text-center ">
                                    <SectionParagraph>
                                          Estoy abierto tanto a colaborar en proyectos freelance como a formar parte de un equipo donde pueda seguir creciendo y aportar valor.
                                    </SectionParagraph>
                              </div>
                              <Link href="mailto:elcorreoquequieres@correo.com">
                                    <Button ariaLabel="Boton para enviar correo electronico" variant={"primary"}>
                                          <Mail size={16} />
                                          <p className="">pablozalliodev@gmail.com</p>
                                    </Button>
                              </Link>
                              <Form />
                              <div className=" flex justify-center items-center gap-6 font-inter text-xs text-muted-foreground px-6 ">
                                    <Link className="  " href={""}>Github</Link>
                                    <p className="">|</p>
                                    <Link className=" " href={""}>Linkedin</Link>

                              </div>
                        </div>
                  </section>
                  </FadeIn>
            </Container>
      )
}