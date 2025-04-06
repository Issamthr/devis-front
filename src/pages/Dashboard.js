import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaFileInvoice, FaUserCircle } from "react-icons/fa";
import { getDevis } from "../services/devisService";
import "./Dashboard.css";

const Dashboard = () => {
  const [devisList, setDevisList] = useState([]);

  useEffect(() => {
    const fetchDevis = async () => {
      try {
        const response = await getDevis();
        setDevisList(response);
      } catch (error) {
        console.error("Erreur de récupération :", error);
      }
    };
    fetchDevis();
  }, []);

  const getDaysLeft = (dateLimite) => {
    const today = new Date();
    const deadline = new Date(dateLimite);
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `⏳ ${diffDays} jours restants` : "❌ Expiré";
  };

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <div className="user-info">
          <FaUserCircle className="user-avatar" />
          <p className="user-name">Bonjour 👋<br />Amin</p>
        </div>
        <nav className="nav-links">
          <Link to="/create-devis" className="nav-btn">
            <FaPlusCircle /> Créer un Devis
          </Link>
          <Link to="/devis" className="nav-btn">
            <FaFileInvoice /> Voir les Devis
          </Link>
        </nav>
      </aside>

      <main className="dashboard-main">
        <h1>Tableau de Bord</h1>
        <p className="dashboard-subtitle">Vous avez <strong>{devisList.length}</strong> devis en cours</p>

        <div className="devis-list">
          <h2>📋 Derniers Devis</h2>
          <ul>
            {devisList.slice(-5).reverse().map((devis) => (
              <li key={devis.id} className="devis-item">
                <strong>{devis.clientNom}</strong> — {devis.budget}€  
                <span className="devis-deadline">{getDaysLeft(devis.dateLimite)}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
