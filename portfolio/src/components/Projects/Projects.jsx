import "./Projects.scss";

export default function Projects() {
  const projects = [
    {
      title: "ArgentBank",
      description:
        "Application web de gestion de comptes bancaires. Implémentation des composants interactifs et de l'authentification.",
      tech: "React · Sass · Redux Toolkit",
      link: "#", 
    },
    {
      title: "Portfolio personnel",
      description:
        "Site vitrine one-page responsive pour présenter mes compétences et projets. ",
      tech: "React · Vite · Sass",
      link: "#",
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
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  Voir le projet →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
