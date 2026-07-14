// Configurations des animations Framer Motion

// 1. Apparition en douceur (Fade In) vers le haut (pour les titres/textes au chargement)
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// 2. Animation au Scroll (déclenchée quand l'élément apparaît à l'écran)
export const scrollReveal = {
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// 3. Effets de survol (Hover) pour les boutons ou cartes d'art
export const hoverEffect = {
  scale: 1.05,
  rotate: 1, // Petit effet de rotation style cubiste !
  transition: { duration: 0.2, ease: "easeInOut" },
};

export const buttonHover = {
  scale: 1.08,
  backgroundColor: "#ffffff",
  boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.4)",
  transition: { duration: 0.3 },
};
