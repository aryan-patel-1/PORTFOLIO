import { Link } from "react-router-dom";
import logo from "../../assets/LOGO_WEB.webp";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo du portfolio" className="logo" />

      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/projets">Projets</Link></li>
        <li><Link to="/a-propos">À propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {/* Icônes réseaux */}
        <li>
          <a
            href="https://github.com/aryan-patel-1"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ton-profil-linkedin" // Remplace ce lien
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="/cv.pdf" // Si ton CV est dans /public
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="CV"
          >
            <FaFileAlt />
          </a>
        </li>
      </ul>
    </nav>
  );
}
