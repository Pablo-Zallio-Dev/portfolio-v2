"use client";
import { ArrowUpRight, MailCheck } from "lucide-react";
import AvailabilityBadge from "./AvailabilityBadge";
import Button from "./Button";
import { useForm } from "react-hook-form";
import ErrorForm from "./ErrorForm";
import { useEffect, useState } from "react";

export default function Form() {
      const { register, formState: { errors }, handleSubmit, reset } = useForm();

      const [send, setSend] = useState(false)

      const onSubmit = (data: object) => {
            console.log(data)
            setSend(true)
            reset()
      }

      useEffect(() => {
            if (!send) return;

            const timer = setTimeout(() => {
                  setSend(false);
            }, 1500);

            return () => clearTimeout(timer);
      }, [send]);


      return (
            <section className=" w-full max-w-4xl my-12 bg-bgBackground p-6 rounded-3xl border border-border ">
                  <div className=" flex justify-between items-center ">
                        <div className="">
                              <p className=" font-spaceGrotesk font-bold text-lg ">Escríbeme</p>
                              <p className=" font-inter text-xs text-muted-foreground ">
                                    Respondo en menos de 24Hs
                              </p>
                        </div>
                        <AvailabilityBadge>
                              <p className=" uppercase font-bold ">online</p>
                        </AvailabilityBadge>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col items-center gap-6 mt-8  ">
                        <div className=" flex flex-col sm:flex-row sm:justify-between w-full gap-4 sm:gap-6 ">
                              <div className=" relative flex flex-col gap-2 w-full ">
                                    <label
                                          className=" uppercase font-inter font-semibold tracking-widest text-xs text-muted-foreground "
                                          htmlFor="name"
                                    >
                                          Nombre
                                    </label>
                                    <input
                                          className=" py-2.5 px-3.5 rounded-2xl bg-background/40 border border-border outline-0 font-inter text-sm "
                                          id="name"
                                          type="text"
                                          placeholder="Tu nombre"
                                          {...register("name", {
                                                required: true,

                                          })}
                                    />
                                    {errors.name?.type === 'required' && <ErrorForm> Por favor, contame tu nombre 😉 </ErrorForm>}
                              </div>
                              <div className=" relative flex flex-col gap-2 w-full ">
                                    <label
                                          className="  uppercase font-inter font-semibold tracking-widest text-xs text-muted-foreground "
                                          htmlFor="email"
                                    >
                                          Email
                                    </label>
                                    <input
                                          className=" py-2.5 px-3.5 rounded-2xl bg-background/40 border border-border  outline-0 font-inter text-sm  "
                                          type="email"
                                          id="email"
                                          placeholder="tu@email.com"
                                          {...register("email", {
                                                required: true,

                                          })}
                                    />
                                    {errors.email?.type === 'required' && <ErrorForm> Nesecito tu email para responderte 🙏 </ErrorForm>}
                              </div>
                        </div>
                        <div className=" relative w-full mt-4 ">
                              <textarea
                                    className=" w-full py-2.5 px-3.5 rounded-2xl bg-background/40 border border-border resize-none outline-0 font-inter text-sm  "
                                    id="message"
                                    rows={5}
                                    {...register("message", {
                                          required: true,
                                          maxLength: 255
                                    })}
                              />
                              {errors.message?.type === 'required' && <ErrorForm> Contame lo que nesecites 💪 </ErrorForm>}
                              {
                                    errors.message?.type === 'maxLength' && <ErrorForm> Lo siento, el mensaje tiene que ser mas corto que 255 caracteres </ErrorForm>
                              }
                        </div>
                        <div className="mt-8 ">
                              <Button variant="primary">
                                    <input type="submit" value={send ? 'Enviado!' : 'Enviar mensaje'} className="cursor-pointer" />
                                    {
                                          send
                                                ? <MailCheck size={16} />
                                                : <ArrowUpRight size={16} />
                                    }

                              </Button>
                        </div>
                  </form>
            </section>
      );
}
