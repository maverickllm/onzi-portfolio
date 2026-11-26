"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Courtik",
    category: "SaaS Platform · Sports Tech",
    description:
      "Plataforma integral de reservas y gestión para complejos de pádel. App móvil para usuarios y dashboard administrativo.",
    year: "2026",
    link: "https://www.behance.net/gallery/258973379/Courtik-App-Dashboard-de-Gestion-Deportiva?platform=direct", 
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32 bg-onzi-gray">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-onzi-muted mb-4">
            Selected Work
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-onzi-dark max-w-2xl">
            Proyectos donde combiné diseño y código para resolver problemas
            reales.
          </p>
        </motion.div>

        {/* Lista de proyectos */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-8 md:p-12 bg-white rounded-2xl border border-transparent hover:border-onzi-dark/5 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-onzi-dark group-hover:text-onzi-orange transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-onzi-muted group-hover:text-onzi-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <p className="text-onzi-muted text-sm mb-6">
                  {project.category} — {project.year}
                </p>
                <p className="text-onzi-dark/80 max-w-xl text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}