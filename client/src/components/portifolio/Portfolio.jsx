import React from 'react';
import './Portfolio.css';
import IMGI1 from '../../assets/portfolio1.jpg';
import IMGI2 from '../../assets/portfolio2.jpg';
import IMGI3 from '../../assets/portfolio3.jpg';
import IMGI4 from '../../assets/portfolio4.jpg';
import IMGI5 from '../../assets/portfolio5.png';
import IMGI6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id:1,
    image:IMGI1,
    title:'Crypto Currency Dashboard and financial information',
    github: 'https://github.com/Manishganak1919/admin-data',
    demo:'https://admin-frontend-wk1p.onrender.com/dashboard'
  },
  {
    id:2,
    image:IMGI2,
    title:'Crypto Currency Dashboard and financial information',
    github: 'https://github.com/Manishganak1919/admin-data',
    demo:'https://admin-frontend-wk1p.onrender.com/dashboard'
  },
  {
    id:3,
    image:IMGI3,
    title:'Crypto Currency Dashboard and financial information',
    github: 'https://github.com/Manishganak1919/admin-data',
    demo:'https://admin-frontend-wk1p.onrender.com/dashboard'
  },
  {
    id:4,
    image:IMGI4,
    title:'Crypto Currency Dashboard and financial information',
    github: 'https://github.com/Manishganak1919/admin-data',
    demo:'https://admin-frontend-wk1p.onrender.com/dashboard'
  },
  {
    id:5,
    image:IMGI5,
    title:'Crypto Currency Dashboard and financial information',
    github: 'https://github.com/Manishganak1919/admin-data',
    demo:'https://admin-frontend-wk1p.onrender.com/dashboard'
  },
  {
    id:6,
    image:IMGI6,
    title:'Crypto Currency Dashboard and financial information',
    github: 'https://github.com/Manishganak1919/admin-data',
    demo:'https://admin-frontend-wk1p.onrender.com/dashboard'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMGI1} alt="" srcset="" />
          </div>
          <h3>Social Media Webapps</h3>
          <a href="https://github.com/Manishganak1919" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/Manishganak1919/overflowstack" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMGI2} alt="" srcset="" />
          </div>
          <h3>User admin dashboard</h3>
          <a href="https://github.com/Manishganak1919/admin-data" className='btn' target='_blank'>Github</a>
          <a href="https://admin-frontend-wk1p.onrender.com/dashboard" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMGI3} alt="" srcset="" />
          </div>
          <h3>Whatsapp clone</h3>
          <a href="https://github.com/Manishganak1919/whatsapp-updated" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/Manishganak1919/whatsapp-updated" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMGI4} alt="" srcset="" />
          </div>
          <h3>Code Editor website</h3>
          <a href="https://github.com/Manishganak1919/Codeditor" className='btn' target='_blank'>Github</a>
          <a href="https://snazzy-bombolone-672dfb.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMGI5} alt="" srcset="" />
          </div>
          <h3>Chat apps</h3>
          <a href="https://github.com/Manishganak1919" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/Manishganak1919/my-chat" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
           <img src={IMGI6} alt="" srcset="" />
          </div>
          <h3>Sorting Visualizer</h3>
          <a href="https://github.com/Manishganak1919/sorting-visualize" className='btn' target='_blank'>Github</a>
          <a href="https://rococo-begonia-3f75b1.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;
