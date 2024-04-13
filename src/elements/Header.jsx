import React from 'react'
import { useState } from 'react'
import { useNavigate, HashRouter, Link } from 'react-router-dom'

import logo from '/cerebro.png'

import './header.css'

const Header = () => {
  const navigate = useNavigate();
    
    const logoClick = () => {
      navigate("/");
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
          <Link to="/">Início</Link>
          <Link to="/se-entenda">Se entenda</Link>
          <Link to="/saude-geral">Saúde geral</Link>
          <Link to="/">Link 4</Link>
          <Link to="/">Link 5</Link>
          <Link to="/">Link 6</Link>
          <Link to="/">Link 7</Link>
          <Link to="/">Link 8</Link>
        </div>
    </div>
  )
}

export default Header
