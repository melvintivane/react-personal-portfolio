import React from 'react';
import "./footer.css";
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href="#contact" className="footer__logo">MELVIN</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/melvin-tivane" target="_blank" rel="noreferrer"> <FaLinkedin /> </a>
        <a href="https://facebook.com/melvin.tivane" target="_blank" rel="noreferrer"> <FaFacebookF /> </a>
        <a href="https://www.instagram.com/programmer_tivan07/" target="_blank" rel="noreferrer"> <FiInstagram /> </a>
        <a href="https://twitter.com/melvin_tivane" target="_blank" rel="noreferrer"> <IoLogoTwitter /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MELVIN TIVANE. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer