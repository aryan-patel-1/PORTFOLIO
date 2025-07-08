import { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/LOGO_WEB.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#hero" onClick={closeMenu}>Accueil</a>
        <a href="#about" onClick={closeMenu}>À propos</a>
        <a href="#projects" onClick={closeMenu}>Projets</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <div className={`burger ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
