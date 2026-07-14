import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import validation from "../utils/validation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("error"); // "error" ou "success"
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validation de sécurité
    const validationErrors = validation(
      formData.name,
      formData.email,
      formData.message,
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setModalType("error");
      setIsModalOpen(true);
    } else {
      // 2. Envoi des données à ton lien Formspree
      try {
        const response = await fetch("https://formspree.io/f/mojgaoog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Succès
          setErrors({});
          setModalType("success");
          setIsModalOpen(true);
          setFormData({ name: "", email: "", message: "" });
        } else {
          // Erreur technique côté Formspree
          setErrors({
            global:
              "Une erreur est survenue lors de l'envoi. Réessayez plus tard.",
          });
          setModalType("error");
          setIsModalOpen(true);
        }
      } catch {
        // Erreur réseau
        setErrors({
          global:
            "Une erreur réseau est survenue. Vérifiez votre connexion et réessayez.",
        });
        setModalType("error");
        setIsModalOpen(true);
      }
    }
  };

  return (
    <div className="min-h-[88vh] flex items-center justify-center bg-[#fbf9f4] text-gray-900 px-6 py-16 relative overflow-hidden">
      {/* Forme géométrique arrière-plan */}
      <div
        className="absolute top-10 -right-20 w-96 h-500px bg-linear-to-br from-black/5 to-transparent pointer-events-none z-0"
        style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
      />

      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* COLONNE GAUCHE */}
        <div className="lg:col-span-5 space-y-6">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-wider text-black leading-none">
            Briser <br /> La Toile
          </h1>
          <p className="text-gray-900 font-dark leading-relaxed text-base md:text-xl">
            Une œuvre vous plaît, vous souhaitez passer une commande
            personnalisée ou simplement collaborer sur un projet artistique ?{" "}
            <br />
            Laissez moi un message ici ! 
          </p>
          <div className="pt-4 border-t border-black/10 space-y-2">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Atelier principal
            </p>
            <p className="text-sm font-medium uppercase tracking-wide text-black">
              France — Galerie En Ligne
            </p>
          </div>
        </div>

        {/* COLONNE DROITE */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-gray-100 p-8 md:p-10 shadow-xl rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full bg-gray-50/50 text-black border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Adresse Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nom@exemple.com"
                  className="w-full bg-gray-50/50 text-black border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Votre Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message artistique..."
                  className="w-full bg-gray-50/50 text-black border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3.5 rounded-lg shadow-sm hover:bg-gray-900 cursor-pointer block text-center transition-all text-sm"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                Envoyer le message
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* --- MODALE INSPIRÉE PAR UNTITLED UI --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay flouté très doux */}
            <motion.div
              className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            />

            {/* Fenêtre de la Modale */}
            <motion.div
              className="bg-white rounded-xl max-w-sm w-full p-6 shadow-2xl z-10 relative border border-gray-100 text-center select-none"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Bouton fermeture discret haut droit */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-medium transition-colors cursor-pointer text-sm"
              >
                ✕
              </button>

              {/* CONTENU : CAS D'ERREUR */}
              {modalType === "error" && (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center border-4 border-orange-25/50 text-lg mb-4">
                    ⚠️
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Vérifiez vos informations
                  </h3>

                  <p className="text-base text-gray-500 font-normal leading-relaxed mb-5">
                    Certains champs comportent des erreurs ou des caractères non
                    autorisés :
                  </p>

                  {/* Liste des erreurs */}
                  <div className="w-full text-left bg-gray-50 rounded-lg p-3 border border-gray-100 text-xs text-gray-600 space-y-1.5 mb-6">
                    {Object.values(errors).map((errorMsg, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-red-600 text-lg mr-2 font-bold leading-none">
                          •
                        </span>
                        <span className="text-sm text-gray-700">
                          {errorMsg}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full bg-black text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-gray-900 cursor-pointer transition-all shadow-sm"
                  >
                    Corriger les champs
                  </button>
                </div>
              )}

              {/* CONTENU : CAS DE SUCCÈS */}
              {modalType === "success" && (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center border-4 border-green-25/50 text-xl mb-4">
                    ✓
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Message envoyé !
                  </h3>

                  <p className="text-sm text-gray-500 font-normal leading-relaxed mb-6 px-2">
                    Votre message a été transmis avec succès. <br /> Je prendrai
                    le temps de le lire attentivement et de vous répondre très
                    vite.
                  </p>

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full bg-black text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-gray-900 cursor-pointer transition-all shadow-sm"
                  >
                    D'accord
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
