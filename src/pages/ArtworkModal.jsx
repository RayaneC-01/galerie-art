import { motion, AnimatePresence } from "framer-motion";

/**
 * ArtworkModal
 * Lightbox : affiche l'image en grand au centre de la page,
 * avec une croix collée au coin haut-droit de l'image, et
 * le titre / la technique juste en dessous.
 *
 * Props :
 * - toile   : { id, src, titre, technique } | null  -> la toile sélectionnée (null = fermé)
 * - onClose : function -> callback pour fermer la lightbox
 */
export default function ArtworkModal({ toile, onClose }) {
  return (
    <AnimatePresence>
      {toile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Contenu : image + croix collée au coin + légende */}
          {(console.log("ArtworkModal rendu avec toile:", toile))}
          <motion.div
            className="relative z-10 flex flex-col items-center max-w-4xl max-h-[90vh]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Bloc image, position relative pour ancrer la croix dessus */}
            <div className="relative">
              <img
                src={toile.src}
                alt={toile.titre}
                className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
              />

              {/* Croix en haut à droite de l'IMAGE (pas de la fenêtre) */}
              <button
                onClick={onClose}
                className="absolute -top-3 -right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-black hover:text-white transition-colors cursor-pointer text-base shadow-lg"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            {/* Légende sous l'image */}
            <div className="mt-4 text-center px-4">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-wide text-white">
                {toile.titre}
              </h3>
              <p className="text-gray-300 uppercase tracking-widest text-md italic mt-1">
                {toile.technique}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}