//Gère le routage de toutes les pages

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateDevis from "./pages/CreateDevis";
import DevisList from "./pages/DevisList";
import DevisDetail from "./pages/DevisDetail";
import { AuthProvider, useAuth } from "./context/AuthContext";



const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router basename="/devis-front">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/create-devis" element={<PrivateRoute><CreateDevis /></PrivateRoute>} />
          <Route path="/devis" element={<PrivateRoute><DevisList /></PrivateRoute>} />
          <Route path="/devis/:id" element={<PrivateRoute><DevisDetail /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
