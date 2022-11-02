import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Djokic Nikola
      </a>

      <ul className='permalinks'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/nazalostdjokic">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/nikola-djokic-384988144/">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Djokic Nikola. All rights reserved.</small>
      </div>
    </footer>
  )
}
