"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: 'About', href: '#about' },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-white/80 backdrop-blur-md"
      >
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/onzi-logo-dark.svg"
            alt="Onzi"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Desktop: links visibles */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile: botón hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-onzi-dark"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile: menú desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg md:hidden pt-24 px-6 pb-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-onzi-dark hover:text-onzi-orange transition-colors flex items-center justify-between"
                >
                  {link.name}
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}