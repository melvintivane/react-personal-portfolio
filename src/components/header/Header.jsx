import React from 'react';
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <div className='container__top'>
          <h5>Hello, I'm</h5>
          <h1>Melvin Tivane</h1>
          <h5 className="text-light">FullStack Developer</h5>
          <CTA />
          <HeaderSocials />
        </div>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header