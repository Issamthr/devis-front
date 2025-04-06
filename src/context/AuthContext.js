import React, { createContext, useContext, useState, useEffect } from "react";

// Création du contexte d'authentification
const AuthContext = createContext();

// Fournisseur d'authentification
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Au chargement, vérifier s'il y a un utilisateur stocké
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Fonction de connexion
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Fonction de déconnexion
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useAuth = () => useContext(AuthContext);
