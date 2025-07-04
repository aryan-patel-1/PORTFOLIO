import './Projet.scss';

export default function Projet() {
  return (
    <section className="projets">
      <h2>Mes projets</h2>
      <div className="projets__grid">
        <div className="projet__card">
          <h3>Projet 1</h3>
          <p>Description du projet 1</p>
        </div>
        <div className="projet__card">
          <h3>Projet 2</h3>
          <p>Description du projet 2</p>
        </div>
        <div className="projet__card">
          <h3>Projet 3</h3>
          <p>Description du projet 3</p>
        </div>
        <div className="projet__card">
          <h3>Projet 4</h3>
          <p>Description du projet 4</p>
        </div>
      </div>
    </section>
  );
}
