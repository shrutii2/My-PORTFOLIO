import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'


const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9wqda5m', 'template_qpicooc', form.current, 'YOUR_USER_ID')
    e.target.reset()
  };
  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>dummymail@gmail.com</h5>
          <a href="mailto:dummyyemail34@gmail.com" target='_blank'> Send a message </a>        {/*dummymail@02:pswd   service chalu krna baki h*/}
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5>portfolio</h5>
          <a href="https://m.me/shruti.karn.39948" target='_blank'> Send a message </a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
          <h4>Whatsapp</h4>
          <h5>+123456789</h5>
          <a href="https://api.whatsapp.com/send?phone=917045732615" target='_blank'> Send a message </a>
        </article>
    </div>
  {/*END OF CONTACT OPTIONS*/}
  <form ref={form} onSubmit={sendEmail}>
    <input type ='text' name='name' placeholder='Your Full Name' required />
    <input type ='email' name='email' placeholder='Your Email' required />
    <textarea name="messgae" rows="7" placeholder='Your message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send message</button>
  </form>
</div>
    </section>
  )
}

export default Contacts
