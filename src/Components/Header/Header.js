import React from 'react'
import "./Header.css"
import CTA from "./CTA"
import ME from "../../Assets/assettwo/me-one.png"
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Alkesh kalal</h2>
        <h4 className='text-light'><strong> Full Stack Web Developer </strong></h4>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" className='my_image'/>
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
       </header>
  )
}

export default Header