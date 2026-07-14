import { motion } from "framer-motion";
import { scrollReveal, fadeInUp } from "../utils/animations";
// import BackgroundBoxes from '../components/BackgroundBoxes'; // 👈 On importe nos boîtes

export default function APropos() {
  return (
    <div className="min-h-screen bg-cubiste-creme text-gray-900 px-6 py-16 md:py-24 relative overflow-hidden">
      {/* Animation de fond avec des formes géométriques animées */}
      {/* <BackgroundBoxes /> */}

      {/* SECTION 1 : En-tête de la page (Apparaît immédiatement) */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-20 md:mb-32 relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-3">
          Le Manifeste
        </span>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-black mb-6 leading-none">
          Rayane.Ch <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-black to-gray-700">
            Géométrie de l'Âme
          </span>
        </h1>
        <div className="w-20 h-1 bg-black mx-auto mt-8"></div>
      </motion.div>

      {/* SECTION 2 : Contenu principal (S'anime au Scroll) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Bloc de texte Cubiste à gauche */}
        {/* Bloc de texte à gauche personnalisé pour ton style */}
        <motion.div
          className="md:col-span-6 space-y-6 md:pr-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollReveal}
        >
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-black">
            Une Vision Singulière
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Mon travail ne suit pas les règles établies, il répond à mon propre
            style. C'est une exploration brute où la délicatesse des natures
            mortes classiques rencontre la puissance de la déconstruction
            géométrique.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Chaque création est un équilibre personnel entre l'ombre, la lumière
            et la fragmentation des formes. À travers cette galerie, je vous
            partage ma propre manière de voir le monde : un espace où le
            classique et le contemporain entrent en collision pour créer une
            nouvelle réalité.
          </p>
        </motion.div>
        {/* Composition géométrique décorative à droite (Style Galerie Moderne) */}
        <motion.div
          className="md:col-span-6 flex justify-center items-center relative h-87.5 md:h-450px"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollReveal}
        >
          {/* Carré noir asymétrique arrière */}
          <div className="absolute w-64 h-64 bg-black rotate-12 shadow-2xl opacity-90"></div>

          {/* Rectangle blanc central croisé */}
          <div className="absolute w-72 h-48 bg-white -rotate-6 shadow-xl border border-black/5 flex items-center justify-center p-6">
            <p className="text-xs font-black uppercase tracking-widest text-center text-black">
              "La peinture est un jeu de l'esprit"
            </p>
          </div>

          {/* Petit accent de couleur ou texture géométrique */}
          <div
            className="absolute bottom-12 right-12 w-32 h-32 bg-linear-to-tr from-gray-400 to-transparent opacity-30"
            style={{
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            }}
          ></div>
        </motion.div>
      </div>

      {/* SECTION 3 : Un grand chiffre en arrière-plan style expo */}
      <div className="absolute -bottom-10 -left-10 text-[20rem] md:text-[30rem] font-black text-black/3 select-none pointer-events-none font-serif leading-none">
        01
      </div>
    </div>
  );
}
