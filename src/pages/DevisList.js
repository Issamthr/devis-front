import React, { useEffect, useState } from "react";
import { getDevis, deleteDevis } from "../services/devisService";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./DevisList.css";

const DevisList = () => {
  const [devisList, setDevisList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchDevis();
  }, []);

  const fetchDevis = async () => {
    try {
      const data = await getDevis();
      setDevisList(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des devis :", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tu veux vraiment supprimer ce devis ?")) {
      try {
        await deleteDevis(id);
        setDevisList(devisList.filter((d) => d.id !== id));
      } catch (error) {
        console.error("Erreur suppression :", error);
      }
    }
  };

  const generatePDF = (devis) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("DÉTAIL DU DEVIS", 14, 22);

    doc.setFontSize(12);
    doc.text(`Client : ${devis.clientNom}`, 14, 40);
    doc.text(`Budget : ${devis.budget} €`, 14, 50);
    doc.text(`Date limite : ${new Date(devis.dateLimite).toLocaleDateString()}`, 14, 60);

    doc.setFontSize(14);
    doc.text("Détails :", 14, 75);
    doc.setFontSize(11);
    doc.text(doc.splitTextToSize(devis.details, 180), 14, 85);

    doc.save(`devis_${devis.clientNom}.pdf`);
  };

  const filteredDevis = devisList.filter((devis) =>
    devis.clientNom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="devis-list-container">
      <h1>📋 Mes Devis</h1>

      <input
        type="text"
        className="search-input"
        placeholder="🔍 Rechercher un client..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredDevis.length === 0 ? (
        <p>Aucun devis trouvé.</p>
      ) : (
        <div className="devis-cards">
          {filteredDevis.map((devis) => (
            <div className="devis-card fade-in" key={devis.id}>
              <h3>{devis.clientNom}</h3>
              <p><strong>Détails :</strong> {devis.details}</p>
              <p><strong>Budget :</strong> {devis.budget} €</p>
              <p><strong>Date limite :</strong> {new Date(devis.dateLimite).toLocaleDateString()}</p>

              <button onClick={() => generatePDF(devis)} className="pdf-btn">
                📄 Télécharger PDF
              </button>
              <button onClick={() => handleDelete(devis.id)} className="delete-btn">
                🗑️ Supprimer
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DevisList;





