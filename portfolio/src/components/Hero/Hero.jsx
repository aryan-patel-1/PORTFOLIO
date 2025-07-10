import "./Hero.scss";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-greeting">
          <span className="wave">👋</span> Bonjour, je suis
        </h1>
        <h2 className="hero-name">ARYAN PATEL</h2>
        <h3 className="hero-title">Intégrateur Web</h3>
        <p className="hero-description">
          Passionné par le web, je conçois des interfaces modernes, fluides et responsives.<br />
          Mon objectif : transformer les maquettes en expériences utilisateurs performantes.
        </p>
        <a href="#projects" className="hero-cta">Voir mes projets</a>
      </div>
    </section>
  );
} 