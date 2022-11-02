import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/nikola-djokic-384988144/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/nikoladjokic96?tab=repositories"
        target="_blank"
      >
        <FaGithub />
      </a>
    </div>
  )
}
