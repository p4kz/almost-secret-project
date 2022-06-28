import React, { useRef }  from "react";

import emailjs from 'emailjs-com'

import { 
  ContactBox, 
  ContactWrap, 
} from "./styles";


export default function ContactSection () {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_ID, 
      import.meta.env.VITE_EMAIL_TEMP, 
      form.current, 
      import.meta.env.VITE_USER_KEY
    ).then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })

    e.target.reset()
  }
  
  return (
    <>
      <ContactBox id="contact">
        <h2 className="contact__title">Contact</h2>
        <p className="contact__description">
          Se você tem algum feedback ou alguma ideia que a gente possa trabalhar junto <strong>mande uma mensagem</strong>.
          <br />
          <em>Envie uma mensagem anônima usando admin@admin.com como email :D</em>
        </p>

        <ContactWrap>
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="form__box"
          >
            <label htmlFor="name">Nome:</label>
            <input
              className="form__input" 
              type="text" 
              name="name"
              id="name" 
              placeholder="Digite seu nome..." 
              required 
            />
            <label htmlFor="email">Email:</label>
            <input 
              className="form__input"
              id="email"
              type="email" 
              name="email" 
              placeholder="Digite seu email..." 
              required
            />
            <label htmlFor="textarea">Mensagem:</label>
            <textarea
              className="form__textarea"
              id="textarea" 
              name="message" 
              rows="7" 
              placeholder="Digite sua mensagem..."
            ></textarea>
            <button 
              type="submit"
              className="form__button"
            > Enviar
            </button>
          </form>

        </ContactWrap>
      </ContactBox>
    </>
  )
}