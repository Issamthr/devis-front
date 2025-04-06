import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
      <h1>Bienvenue sur notre Générateur de Devis</h1>
      <p>Créez, gérez et exportez vos devis facilement</p>
      <div className="home-buttons">
        <Link to="/login" className="btn">Se connecter</Link>
        <Link to="/register" className="btn btn-outline">Créer un compte</Link>
      </div>
    </div>
  );
};

export default Home;
