"use client";

import { motion } from "motion/react";

export default function FadeIn({
      children,
      delay = 0,
}: {
      children: React.ReactNode;
      delay?: number;
}) {
      return (
            <motion.div
                  initial={{
                        opacity: 0,
                        y: 40,
                        
                  }}
                  whileInView={{
                        opacity: 1,
                        y: 0,
                        
                  }}
                  viewport={{
                        once: true,
                        amount: 0.2,
                  }}
                  transition={{
                        duration: 0.9,
                        delay,
                        ease: "easeOut",
                  }}
                  className="flex flex-col items-center "
            >
                  {children}
            </motion.div>
      );
}