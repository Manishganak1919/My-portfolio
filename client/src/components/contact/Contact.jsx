import React from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vba1zrt', 'template_v0e3sg9', form.current, 'Z2RXzU3BY9CuCJ2Z7')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>tejnarayan1919@gmail.com</h5>
            <a href="mailto:tejnarayan1919@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon' />
            <h4>linkedin</h4>
            <h5>manish-kumar-689905213</h5>
            <a href="https://www.linkedin.com/in/manish-kumar-689905213/" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>(+91) 6209542809</h5>
            <a href="https://api.whatsapp.com/send?phone=916209542809" target='_blank'>Send a message</a>
          </article>
        </div>
        {/*End of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text'name='name' placeholder='Your Full Name' required/>
          <input type='email'name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact;