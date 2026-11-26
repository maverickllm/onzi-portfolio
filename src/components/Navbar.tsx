"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-white/80 backdrop-blur-md"
    >
      {/* Logo real (SVG) */}
      <a href="#" className="flex items-center">
        <img
          src="/onzi-logo-dark.svg"
          alt="Onzi"
          className="h-8 md:h-10 w-auto"
        />
      </a>

      {/* Links de navegación */}
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-onzi-dark/70 hover:text-onzi-orange transition-colors duration-300 flex items-center gap-1 group"
          >
            {link.name}
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </a>
        ))}
      </div>
    </motion.nav>
  );
}