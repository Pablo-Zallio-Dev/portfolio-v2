import { Mail } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import SectionParagraph from "../common/SectionParagraph";
import SectionTitle from "../common/SectionTitle";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Form from "../ui/Form";
import Link from "next/link";
import FadeIn from "../common/FadeIn";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Contact() {
      return (
            <Container id="contact" >
                  <FadeIn>
                        <section className=" flex flex-col w-full lg:w-3/4 py-12">
                              <div className=" flex flex-col items-center gap-6 ">
                                    <SectionHeader text={"04.- contacto"} />
                                    <SectionTitle center text={"¿Construimos algo interesante?"} />
                                    <div className=" lg:w-3/4 text-center ">
                                          <SectionParagraph>
                                                Tienes un negocio y necesitas llegar a tus clientes con una presencia digital más sólida. Escríbeme y hablamos, sin compromiso.
                                          </SectionParagraph>
                                    </div>
                                    <Link href="mailto:elcorreoquequieres@correo.com">
                                          <Button ariaLabel="Boton para enviar correo electronico" variant={"primary"}>
                                                <Mail size={16} />
                                                <p className="">pablozalliodev@gmail.com</p>
                                          </Button>
                                    </Link>
                                    <Form />
                                    <div className=" flex justify-center items-center gap-2 font-inter text-xs text-muted-foreground px-6 ">
                                          <Link className=" flex items-center gap-1 " target="_blank" href={"https://github.com/Pablo-Zallio-Dev"}>
                                                Github
                                                <FaGithub />
                                          </Link>
                                          <p className=" mx-6 ">|</p>
                                          <Link className=" flex items-center gap-1 " target="_blank" href={"https://www.linkedin.com/in/pablozalliodev/"}>Linkedin
                                                <FaLinkedin size={14} />
                                          </Link>
                                            <p className=" mx-6 ">|</p>
                                          <Link className=" flex items-center gap-1 " target="_blank" href={"https://www.instagram.com/pablozalliodw/"}>Instagram
                                                <FaInstagram size={14} />
                                          </Link>

                                    </div>
                              </div>
                        </section>
                  </FadeIn>
            </Container>
      )
}