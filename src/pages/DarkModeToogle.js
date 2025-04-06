import React, { useState, useEffect } from "react";
import "./DarkModeToggle.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className={`toggle-btn ${darkMode ? "active" : ""}`} onClick={toggleTheme}>
      <span className="icon">{darkMode ? "🌙" : "☀️"}</span>
      {darkMode ? "Mode Sombre" : "Mode Clair"}
    </button>
  );
};

export default DarkModeToggle;
