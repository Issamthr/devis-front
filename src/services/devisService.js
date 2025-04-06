import axios from "axios";

// 🔧 Adresse de ton backend (à adapter si nécessaire)
const API_BASE_URL = "http://localhost:8080/api";

// 🔹 Récupérer tous les devis
export const getDevis = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/devis`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des devis :", error);
    return [];
  }
};

// 🔹 Créer un nouveau devis
export const createDevis = async (devis) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/devis`, devis);
    return response.data;
  } catch (error) {
    console.error("Erreur API:", error);
    throw error; // pour gérer l'erreur dans le composant
  }
};

// 🔹 Récupérer les devis d’un utilisateur spécifique
export const getDevisByUtilisateur = async (utilisateurId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/devis/${utilisateurId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des devis par utilisateur :", error);
    return [];
  }
};

// 🔹 Supprimer un devis
export const deleteDevis = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/devis/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression du devis :", error);
    throw error;
  }
};

// 🔹 Récupérer un devis par son ID
export const getDevisById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/devis/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération du devis :", error);
    return null;
  }
};
