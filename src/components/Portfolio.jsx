import React from 'react'
import IMG1 from '../assets/piggame.PNG'
import IMG2 from '../assets/budgety.PNG'
import IMG3 from '../assets/tenzies.PNG'
import IMG4 from '../assets/memegen.PNG'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Pig Game (dice game)',
    github: 'https://github.com/nikoladjokic96/piggame',
    demo: 'https://nikoladjokic96.github.io/piggame/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Budget Calculator',
    github: 'https://github.com/nikoladjokic96/budgetcalcapp',
    demo: 'https://nikoladjokic96.github.io/budgetcalcapp/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tenzies Game',
    github: 'https://github.com/nikoladjokic96/tenzies/tree/master',
    demo: 'https://nikoladjokic96.github.io/tenzies/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Meme Generator',
    github: 'https://github.com/nikoladjokic96/meme-generator/tree/master',
    demo: 'https://nikoladjokic96.github.io/meme-generator/',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
