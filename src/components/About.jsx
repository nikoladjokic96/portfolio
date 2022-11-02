import React from 'react'
import ME from '../assets/me-about.jpg'
import { MdWorkOutline } from 'react-icons/md'
import { IoSchoolOutline } from 'react-icons/io5'
import { AiOutlineFileDone } from 'react-icons/ai'

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWorkOutline className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <IoSchoolOutline className="about__icon" />
              <h5>Learning</h5>
              <small>3+ Years</small>
            </article>
            <article className="about__card">
              <AiOutlineFileDone className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Results-driven computer science specialist passionate about
            developing user-friendly software applications. Excellent
            problem-solving skills and ability to perform well in a team.
            Seeking to help Company develop their product as a software
            engineer, as well as grow and develop my own skills as a coder.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}
