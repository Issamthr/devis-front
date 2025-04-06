import React from "react";
import { useParams } from "react-router-dom";



const DevisDetail = () => {
  const { id } = useParams();
  const devis = { id, clientNom: "Entreprise A", budget: 2500, details: "Site web e-commerce complet." };

  return (
    <div>
      <h1>Détail du devis</h1>
      <p>Client : {devis.clientNom}</p>
      <p>Budget : {devis.budget}€</p>
      <p>Détails : {devis.details}</p>
    </div>
  );
};

export default DevisDetail;