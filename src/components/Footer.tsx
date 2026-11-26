"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const links = [
  { name: "Behance", href: "https://www.behance.net/onzilabs" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/esteban-herrero-onzi" },
  { name: "GitHub", href: "https://github.com/maverickllm" },
  { name: "Email", href: "mailto:onzi.labs@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="bg-onzi-dark text-white px-6 py-24 md:px-12 md:py-32">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* 1. Logo real de la marca */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/onzi-logo.svg"
            alt="Onzi Labs"
            className="w-44 md:w-48 h-auto"
          />
        </motion.div>

        {/* 2. CTA de contacto (reemplaza la firma redundante) */}
        <motion.a
          href="mailto:onzi.labs@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group flex items-center gap-3 w-fit"
        >
          <span className="text-2xl md:text-4xl font-bold text-white group-hover:text-onzi-orange transition-colors duration-300">
            ¿Tenés un proyecto en mente?
          </span>
          <span className="flex items-center gap-2 text-onzi-orange text-lg md:text-2xl font-medium">
            Hablemos
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </span>
        </motion.a>

        {/* 3. Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
          <div>
            <p className="text-onzi-muted text-sm uppercase tracking-widest mb-6">
              Conectemos
            </p>
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-2xl md:text-3xl font-medium text-white/90 hover:text-onzi-orange transition-colors group"
                >
                  {link.name}
                  <ArrowUpRight className="w-6 h-6 text-onzi-muted group-hover:text-onzi-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Bottom Bar with Status */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-onzi-muted border-t border-white/10 pt-8">
        <div className="flex items-center gap-4">
            <p>© 2026 Onzi Labs. Todos los derechos reservados.</p>
            <span className="hidden md:inline">·</span>
            <p className="hidden md:block">Buenos Aires, Argentina</p>
        </div>

        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
            <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-onzi-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-onzi-orange"></span>
            </span>
            <span className="text-white font-medium">Disponible para proyectos</span>
        </div>
        </div>

      </div>
    </footer>
  );
}