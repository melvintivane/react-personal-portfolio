import React, { useRef } from 'react';
import "./contact.css";
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2hp7r2l', 'template_kuczhc1', form.current, '0kv0p7c5UfrQ7ulrs');
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>melvinshuster47@gmail.com</h5>
            <a href="mailto:melvinshuster47@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>melvin.tivane</h5>
            <a href="https://m.me/melvin.tivane" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+258 84 207 4393</h5>
            <a href="https://wa.me/+258842074393" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Insert your name' required />
          <input type="email" name='email' placeholder='Insert your Email' required />
          <textarea name="message" rows="7" placeholder='Describe your project' required />
          <button type="submit" className='button button-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact