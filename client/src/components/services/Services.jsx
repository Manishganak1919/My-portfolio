import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Prototyping: Building interactive Prototype.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visual Design & interactive Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Usability Testing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Accessibility Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Testing and Feedback.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX Design */}

        {/* Start of WEb Development Field */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>We provide best services with expericenc developer.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Service like: creating Landing Page.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creatig a website for school, collages, organization, personal,etc.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating Fully responsive website</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p></p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p></p>
            </li> */}
          </ul>
        </article>
        {/* End of web devlopment  */}

        {/* Content Creation Start */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video Editing </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Coding</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Learning</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Presentation Making</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Teaching</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services;