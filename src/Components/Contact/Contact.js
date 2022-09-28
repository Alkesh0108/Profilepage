import React from 'react'
import "./Contact.css"
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import  { useRef } from 'react';
import emailjs from "emailjs-com";


function Contact() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_89xzefq', 'template_03y85bb', form.current, 'keyjvHbymTHZ5gfUaz5WM')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contact_icon-option'/>
            <h4>Email</h4>
            <h5>Alkesh979@gmail.com</h5>
            <a href="mailto:Alkesh979@gmail.com" target="_blank">Send Message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_icon-option'/>
            <h4>Messanger</h4>
            <h5>Alkeshkalal</h5>
            <a href="https://www.facebook.com/login.php" target="_blank">Send Message</a>
          </article>


          <article className="contact_option">
            <BsWhatsapp className='contact_icon-option'/>
            <h4>WhatsApp</h4>
            <h5>+91 9867607262</h5>
            <a href="https://api.whatsapp.com/send?phone=+919867607262" target="_blank"> Send Message</a>
          </article>


        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>


        </form>
      </div>
    </section>
  )
}

export default Contact