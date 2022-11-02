import React from 'react'
import { TfiEmail } from 'react-icons/tfi'
import { BsLinkedin } from 'react-icons/bs'
import { SlScreenSmartphone } from 'react-icons/sl'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function Contacts() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_6u0s3wm',
      'template_61mxsjh',
      form.current,
      'TQL3OdPWT8pojylXl'
    )
    e.target.reset().then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nikola031296@gmail.com</h5>
            <a href="mailto:nikola031296@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Nikola Djokic</h5>
            <a
              href="https://www.linkedin.com/in/nikola-djokic-384988144/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SlScreenSmartphone className="contact__option-icon" />
            <h4>WhatsApp/Phone</h4>
            <h5>069/8381807</h5>
            <a href="https://wa.me/+381698381807" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
