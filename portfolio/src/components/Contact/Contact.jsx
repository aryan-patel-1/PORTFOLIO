import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_okxpp85",
        "template_vzi73lp",
        form.current,
        "kzREbFnM1LskgZ7hy"
      )
      .then(
        (result) => {
          alert("Message envoyé !");
          e.target.reset();
        },
        (error) => {
          alert("Erreur, veuillez réessayer.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact</h2>
        <p>
          Une idée de projet ? Une collaboration ? À la recherche d'un alternant ? N’hésitez pas à me contacter via ce
          formulaire ou sur mes réseaux.
        </p>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Votre nom" required />
          <input type="email" name="user_email" placeholder="Votre email" required />
          <textarea name="message" placeholder="Votre message" rows="5" required />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
}
