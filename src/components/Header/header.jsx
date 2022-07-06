import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/avatar3.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shruti</h1>
        <h5 className="text-light">fullstack developer</h5>
        <CTA/>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        {/* <a href ='#contact' classname="scroll__down"> Scroll Down </a> */}
      </div>
      </header>
  )
}

export default Header
