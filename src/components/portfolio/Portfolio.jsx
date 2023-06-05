import React from 'react';
import "./portfolio.css"
import IMG from '../../assets/portfolio.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is a portfololio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='button' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='button button-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is a portfololio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='button' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='button button-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is a portfololio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='button' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='button button-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is a portfololio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='button' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='button button-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is a portfololio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='button' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='button button-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>This is a portfololio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='button' target='_blank' rel="noreferrer">GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='button button-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio