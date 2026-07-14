// import React from 'react';
import './Toile.css';

const Toile = ({ imageSrc, titre, technique, onVoirDetail }) => {
  return (
    <div className="toile-card">
      <div className="toile-image-container" onClick={onVoirDetail}>
        <img src={imageSrc} alt={titre} className="toile-image" />
        <div className="toile-overlay">
          <button
            type="button"
            className="toile-btn-detail"
            onClick={(e) => {
              e.stopPropagation(); // évite de déclencher 2x le clic (image + bouton)
              onVoirDetail();
            }}
          >
            Voir en détail
          </button>
        </div>
      </div>

      {/* Titre et technique toujours visibles, sous l'image */}
      <div className="toile-infos">
        <h3 className="toile-titre-bas">{titre}</h3>
        <p className="toile-technique">{technique}</p>
      </div>
    </div>
  );
};

export default Toile;