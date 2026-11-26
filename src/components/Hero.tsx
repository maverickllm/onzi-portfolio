"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

const roles = ["Product Designer", "Developer"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-between px-6 pt-24 md:pt-32 pb-12 md:pb-20">
      {/* Pre-title */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-[0.3em] text-onzi-muted"
      >
        Hola, soy Esteban
      </motion.p>

      {/* Main title */}
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-onzi-dark md:text-7xl lg:text-8xl">
          <span className="block">Creo experiencias</span>
          <span className="relative block h-[1.1em] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center text-onzi-orange"
              >
                {roles[index]}
                <span className="ml-4 inline-block h-[0.4em] w-[0.4em] rounded-full bg-onzi-orange" />
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl text-lg text-onzi-muted md:text-xl"
        >
          Product Designer & Full Stack Developer basado en Buenos Aires,
          Argentina. Diseño y construyo productos digitales de extremo a
          extremo.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex items-center gap-2 text-sm text-onzi-muted"
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}