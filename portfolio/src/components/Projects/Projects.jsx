import "./Projects.scss";

export default function Projects() {
  const projects = [
    {
      title: "KASA - Application immobilière",
      description:
        "Application de location d’appartements entre particuliers. Développement complet du front-end en React en suivant des maquettes Figma responsives, avec gestion des routes, composants dynamiques (galerie, collapses) et intégration des données depuis un fichier JSON.",
      tech: "React · Vite · Sass",
      link: "https://kasa-six-theta.vercel.app/",
      github: "https://github.com/aryan-patel-1/KASA",
    },
    {
      title: "Nina Carducci - Optimisation SEO",
      description:
        "Optimisation des performances et du référencement du site de Nina Carducci. Compression des images, ajout de balises meta, intégration Schema.org pour le référencement local et amélioration de l’accessibilité.",
      tech: "SEO · Lighthouse · Schema.org · Accessibilité Web",
      link: "https://aryan-patel-1.github.io/nina-carducci-p8/",
      github: "https://github.com/aryan-patel-1/nina-carducci-p8",
    },
    {
      title: "Booki – Plateforme de réservation d'hébergements",
      description:
        "Intégration d'une maquette Figma en HTML et CSS pour une application responsive, permettant aux utilisateurs de trouver des hébergements et des activités dans la ville de leur choix. Développement desktop-first avec animations CSS.",
      tech: "HTML5 · CSS3 · Flexbox · Animations CSS · Responsive Design",
      link: "https://aryan-patel-1.github.io/BOOKI-P3/",
      github: "https://github.com/aryan-patel-1/BOOKI-P3",
    },
    {
      title: "Ohmyfood – Plateforme de menus ",
      description:
        "Développement d’un site responsive mobile first pour 4 restaurants, permettant de composer un menu personnalisé à l’avance. Animations CSS, structure SASS, et intégration fidèle des maquettes Figma.",
      tech: "HTML · CSS3/SASS · Responsive design",
      link: "https://aryan-patel-1.github.io/OHMYFOOD/",
      github: "https://github.com/aryan-patel-1/OHMYFOOD",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>Mes projets</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Voir le projet
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
