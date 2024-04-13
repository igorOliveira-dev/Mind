import React from 'react'
import { useState } from 'react'

import logo from '/cerebro.png'

import './header.css'

const Header = () => {
    
    const logoClick = () => {
      location = "/"
    }

    const [isOpen, setIsOpen] = useState(false);

    const hamburgerClick = () => {
      setIsOpen(!isOpen);
      
    }

  return (
    <div className='header'>
        <div className="leftHeader" onClick={logoClick}>
          <img src={logo} alt="logo" className='logo' />
          <h1>Mind</h1>
        </div>
        <div className="hamburger" onClick={hamburgerClick}>
            <div className='barHamburger'></div>
            <div className='barHamburger'></div>
            <div className='barHamburger'></div>
        </div>
        <div className="menu" style={{display: isOpen ? 'flex' : 'none'}}>
          <a href="/">Início</a>
          <a href="/se-entenda">Se entenda</a>
          <a href="/saude-geral">Saúde geral</a>
          <a href="/">link 4</a>
          <a href="/">link 5</a>
          <a href="/">link 6</a>
          <a href="/">link 7</a>
          <a href="/">link 8</a>
        </div>
    </div>
  )
}

export default Header
