import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../config";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Appel à l'API de login
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });

      if (response.data && response.data.id) {
        // Stocker les infos utilisateur (dont l'id !)
        login({
          id: response.data.id,
          email: response.data.email,
          token: response.data.token, // si tu as un JWT
        });

        navigate("/dashboard");
      } else {
        alert("Email ou mot de passe incorrect.");
      }
    } catch (error) {
      console.error("Erreur login :", error);
      alert("Erreur lors de la connexion.");
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
        <p className="note">Pas encore inscrit ? Créez un compte !</p>
      </form>
    </div>
  );
};

export default Login;
