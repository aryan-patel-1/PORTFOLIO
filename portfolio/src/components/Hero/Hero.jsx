import "./Hero.scss";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Patel Aryan</h1>
        <h2>Intégrateur Web</h2>
        <p>
          Passionné par le web, je conçois des interfaces modernes, fluides et responsives.
          Mon objectif : transformer les maquettes en expériences utilisateurs performantes.
        </p>
        <a href="#projects" className="cta">Voir mes projets</a>
      </div>
    </section>
  );
}
