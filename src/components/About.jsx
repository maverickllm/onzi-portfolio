"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Product Design",
    description:
      "De la idea al producto. Entiendo el negocio, defino la estrategia y diseño la solución completa.",
  },
  {
    title: "UX/UI Design",
    description:
      "Interfaces limpias, intuitivas y centradas en el usuario. Prototipado y sistemas de diseño en Figma.",
  },
  {
    title: "Web & Mobile Dev",
    description:
      "Construyo lo que diseño. Desarrollo Full Stack performante con Next.js, React y TypeScript.",
  },
  {
    title: "Branding & Identidad",
    description:
      "Creación de marcas con personalidad. Logotipos, sistemas visuales y guías de estilo.",
  },
];

const stack = {
  Design: ["Figma", "Framer", "Adobe Creative Suite"],
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  Tools: ["Git", "GitHub", "Vercel", "Notion"],
};

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-onzi-muted mb-4">
            About
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-onzi-dark max-w-3xl leading-tight">
            No solo diseño interfaces, las construyo. <br className="hidden md:block" />
            Cierro la brecha entre el diseño y el código.
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20 max-w-3xl"
        >
          <p className="text-lg text-onzi-dark/80 leading-relaxed mb-6">
            Soy Esteban, un Product Designer & Developer basado en Buenos Aires. 
            Me especializo en crear productos digitales de extremo a extremo, 
            desde la identidad de marca hasta el código en producción.
          </p>
          <p className="text-lg text-onzi-dark/80 leading-relaxed">
            Actualmente disponible para proyectos freelance donde pueda aportar 
            visión estratégica, diseño de alta calidad y desarrollo técnico robusto.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-20">
          <h3 className="text-sm uppercase tracking-[0.2em] text-onzi-muted mb-8">
            Lo que hago
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-onzi-orange/20 pl-6 py-2 hover:border-onzi-orange transition-colors duration-300"
              >
                <h4 className="text-xl font-bold text-onzi-dark mb-2">
                  {service.title}
                </h4>
                <p className="text-onzi-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm uppercase tracking-[0.2em] text-onzi-muted mb-8">
            Stack & Herramientas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(stack).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-sm font-bold text-onzi-dark mb-3 uppercase tracking-wider">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-onzi-gray text-onzi-dark text-sm rounded-full border border-transparent hover:border-onzi-orange/30 transition-colors"
                    >
                      {item}
                      </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}