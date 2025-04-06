import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/auth";

// 🔹 Inscription utilisateur
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Erreur API (registerUser):", error);
    throw error;
  }
};

// 🔹 Connexion utilisateur
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Erreur API (loginUser):", error);
    throw error;
  }
};
