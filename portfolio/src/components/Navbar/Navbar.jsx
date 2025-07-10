import { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from "../../assets/LOGO_WEB.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("fr");

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#hero" onClick={closeMenu}>
          {language === "fr" ? "Accueil" : "Home"}
        </a>
        <a href="#about" onClick={closeMenu}>
          {language === "fr" ? "À propos" : "About"}
        </a>
        <a href="#projects" onClick={closeMenu}>
          {language === "fr" ? "Projets" : "Projects"}
        </a>
        <a href="#contact" onClick={closeMenu}>
          {language === "fr" ? "Contact" : "Contact"}
        </a>

        <div className="nav-icons">
          <a href="https://github.com/aryan-patel-1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ton-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="CV">
            <i className="fas fa-file-alt"></i>
          </a>
        </div>

        <div className="nav-controls">
          <button onClick={() => setDarkMode(!darkMode)} className="control-btn">
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button onClick={toggleLanguage} className="control-btn">
            {language.toUpperCase()}
          </button>
        </div>
      </div>

      <div className={`burger ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
