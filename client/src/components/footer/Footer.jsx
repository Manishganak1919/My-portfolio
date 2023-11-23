import React from "react";
import "./footer.css";
import {BsLinkedin,BsInstagram} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Thanks!</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/manish-kumar-689905213/"><BsLinkedin /></a>
        <a href="https://github.com/Manishganak1919"><AiFillGithub/></a>
        <a href="https://instagram.com/manishkumar_978/"><BsInstagram /></a>
      </div>

      <div className="Footer__copyright">
        <small>&copy;All rights reserved.</small>

      </div>
    </footer>
  );
};

export default Footer;
