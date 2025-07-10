import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 — <strong>Patel Aryan</strong></p>
        <div className="footer-icons">
          <a
            href="https://github.com/aryan-patel-1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ton-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV"
          >
            <i className="fas fa-file-alt"></i>
          </a>
        </div>
      </div>
      {isVisible && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Retour en haut"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
