import React from 'react'
import CV from '../assets/CV.pdf'

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} download="Nikola_Djokic_CV.pdf" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  )
}
