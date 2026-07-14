//Creation du footer avec Tailwind CSS et Framer Motion
// import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  // Définition des variantes pour l'animation du footer
  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} Tous droits réservés — Galerie de Rayane.Ch`;

  const AnimatedFooter = motion.footer;

  return (
    <AnimatedFooter
      className="bg-black text-white py-8 px-6 text-center border-t border-white/10"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <p className="text-xs md:text-sm uppercase tracking-widest text-gray-300 font-light">
        {footerText}
      </p>
    </AnimatedFooter>
  );
}