import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../Assets/assettwo/portfolio1.jpg"
import IMG2 from "../../Assets/assettwo/portfolio2.jpg"
import IMG3 from "../../Assets/assettwo/portfolio3.jpg"
import IMG4 from "../../Assets/assettwo/portfolio4.jpg"
import IMG5 from "../../Assets/assettwo/portfolio5.png"
import IMG6 from "../../Assets/assettwo/portfolio6.jpg"


function Portfolio() {
  return (
    <section id='portfolio'>
            <h2>Portfolio</h2>
      <div className="portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
            <h3>This is a Dummy portfolio item title.</h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a>
           </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
            <h3>This is a Dummy portfolio item title.</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
            <h3>This is a Dummy portfolio item title </h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a>
           </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
            <h3>This is a Dummy portfolio item title </h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
            <h3>This is a Dummy portfolio item title </h3>
           <div className="portfolio_item-cta">
           <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a>
           </div>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
            <h3>This is a Dummy portfolio item title </h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          </div>
        </article>



      </div>
    </section>
  )
}

export default Portfolio