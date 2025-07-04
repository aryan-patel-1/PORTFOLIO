export default function Contact() {
  return (
    <section className="contact">
      <h2>Contactez-moi</h2>
      <form>
        <label htmlFor="name">Nom</label>
        <input id="name" type="text" placeholder="Votre nom" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Votre email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Votre message" required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}
