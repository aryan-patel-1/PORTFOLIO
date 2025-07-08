import "./Contact.scss";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact</h2>
        <p>
          Une idée de projet ? Une collaboration ? À la recherche d'un alternant ? N’hésitez pas à me contacter via ce
          formulaire ou sur mes réseaux.
        </p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <textarea placeholder="Votre message" rows="5" required />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
}
