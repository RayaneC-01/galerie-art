import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-cubiste-creme/90 border-b border-black/5 py-4 px-6 sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo / Nom en noir intense */}
        <Link to="/" className="text-2xl font-black tracking-widest text-black">
          La Galerie de Rayane.Ch
        </Link>

        {/* Liens de Navigation en gris foncé / noir */}
        <div className="flex space-x-8 text-sm uppercase tracking-wider font-bold">
          <Link to="/" className="text-gray-500 hover:text-black transition-colors">
            Accueil
          </Link>
          <Link to="/a-propos" className="text-gray-700 hover:text-black transition-colors">
            À Propos
          </Link>
          <Link to="/contact" className="text-black hover:text-gray-600 transition-colors">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}