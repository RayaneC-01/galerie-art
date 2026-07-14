// import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, buttonHover } from "../utils/animations";
import Toile from "../components/Toile";
import "../App.css";
import ArtworkModal from "./ArtworkModal"; // Modal Voir en détail
// importer btn To top 
import BtnTop from "../components/btnTop.jsx";
const AnimatedDiv = motion.create("div");
const ScrollLink = motion.create("a");

export default function Accueil() {
  const bgImage =
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop";

  // Toile actuellement affichée dans la modale (null = fermée)
  const [selectedToile, setSelectedToile] = useState(null);

  //fonction personnalisée pour un scroll parfait avec décalage
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const offset = -80; // Évite que la Navbar ne cache le titre "Toutes les Œuvres"
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const TOILES = [
    {
      id: 1,
      src: `${import.meta.env.BASE_URL}img/Loulou_Doux_Reflet.jpeg`,
      titre: "Le Chat aux Doux Reflets",
      technique: "Acrylique",
    },
    {
      id: 2,
      src: `${import.meta.env.BASE_URL}img/Diva_Pure.jpeg`,
      titre: "Diva Pure",
      technique: "Acrylique",
    },
    {
      id: 3,
      src: `${import.meta.env.BASE_URL}img/IMG_4153.jpeg`,
      titre: "Le Jeune Homme et la Lumière",
      technique: "Acrylique",
    },
    {
      id: 4,
      src: `${import.meta.env.BASE_URL}img/Dame_pensees_colorees.jpeg`,
      titre: "La Dame aux Pensées Colorées",
      technique: "Acrylique",
    },
    {
      id: 5,
      src: `${import.meta.env.BASE_URL}img/Dame_aux_Nuances.jpeg`,
      titre: "Dame aux Nuances",
      technique: "Acrylique",
    },
    {
      id: 6,
      src: `${import.meta.env.BASE_URL}img/Mosaique_Urbaine.jpeg`,
      titre: "Mosaïque Urbaine",
      technique: "Acrylique",
    },

    {
      id: 7,
      src: `${import.meta.env.BASE_URL}img/Solitude_Cowboy.jpg`,
      titre: "Solutide Cowboy",
      technique: "Acrylique",
    },
  ];

  return (
    <div className="w-full bg-[#fbf9f4]">
      {/* --- HERO BANNER --- */}
      <div className="relative w-full h-[88vh] flex items-center justify-center overflow-hidden bg-black text-white">
        <img
          src={bgImage}
          alt="Fond Cubiste"
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        />
        <AnimatedDiv
          className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-widest leading-tight text-white">
            Fragments de <br /> Réalité
          </h1>
          <p className="text-base md:text-lg font-light tracking-wide text-gray-300 uppercase">
            Le Portfolio Cubiste Modernisé
          </p>

          {/* Ton bouton qui utilise maintenant ta fonction handleScroll au clic */}
          <ScrollLink
            href="#galerie"
            onClick={handleScroll}
            className="mt-4 px-8 py-3 border border-white text-white font-medium uppercase tracking-wider bg-transparent transition-colors duration-300 hover:bg-white hover:text-black cursor-pointer"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Explorer mes Œuvres ↓
          </ScrollLink>
        </AnimatedDiv>
      </div>

      {/* --- LA GALERIE RESPONSIVE --- */}
      <section id="galerie" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 border-l-4 border-black pl-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
            Toutes Mes Œuvres oui !
          </h2>
          <p className="text-gray-500 uppercase tracking-widest text-lg mt-2">
            Exploration de la forme et de la déconstruction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* --- TOILES --- */}
          {TOILES.map((toile) => (
            <motion.div
              key={toile.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Toile
                key={toile.id}
                imageSrc={toile.src}
                titre={toile.titre}
                technique={toile.technique}
                onVoirDetail={() => setSelectedToile(toile)}
                />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MODALE "VOIR EN DÉTAIL" --- */}
      <ArtworkModal
        toile={selectedToile}
        onClose={() => setSelectedToile(null)}
      />
      {/* --- BOUTON REVENIR EN HAUT DE PAGE --- */}
      <BtnTop />
    </div>
  );
}
