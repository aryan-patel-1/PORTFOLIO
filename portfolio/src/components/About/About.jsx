import "./About.scss";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaJava, FaPhp } from "react-icons/fa";
import { SiJavascript, SiVite } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>À propos</h2>
        <p>
          Je suis Aryan Patel, un intégrateur web basé en France, spécialisé dans la création de sites modernes, rapides et accessibles.
          Ma mission est de transformer des maquettes en interfaces web, en respectant les normes HTML/CSS et en assurant une expérience utilisateur optimale.
        </p>
        <p>
          Je maîtrise HTML5, Sass, JavaScript, React et les outils modernes comme Git, VS Code et Vite.
          Je suis rigoureux, autonome et passionné par l’optimisation et le responsive design.
        </p>
      </div>

      <div className="skills-tab">
        <h3>Compétences</h3>
        <ul className="skills-list">
          <Skill icon={<FaHtml5 />} name="HTML5" level={5} />
          <Skill icon={<FaCss3Alt />} name="CSS" level={5} />
          <Skill icon={<FaReact />} name="React" level={4} />
          <Skill icon={<SiVite />} name="Vite" level={4} />
          <Skill icon={<SiJavascript />} name="JavaScript" level={4} />
          <Skill icon={<FaGithub />} name="GitHub" level={4} />
          <Skill icon={<FaJava />} name="Java" level={3} />
          <Skill icon={<FaPhp />} name="PHP" level={3} />
        </ul>
      </div>
    </section>
  );
}

function Skill({ icon, name, level }) {
  return (
    <li className="skill-item">
      <span className="skill-icon">{icon}</span>
      <span className="skill-name">{name}</span>
      <span className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < level ? "filled" : ""}`}>★</span>
        ))}
      </span>
    </li>
  );
}
