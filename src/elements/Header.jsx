import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'

import logo from '/cerebro.png'

import './header.css'

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const hamburgerRef = useRef();

  const logoClick = () => {
    navigate("/");
  };

  const hamburgerClick = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the body
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenu = (event) => {
      if (event.target !== menuRef.current && event.target !== hamburgerRef.current) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.addEventListener('click', closeMenu);
    }

    return () => {
      document.body.removeEventListener('click', closeMenu);
    };
  }, [isOpen]);

  return (
    <div className='header'>
        <div className="leftHeader" onClick={logoClick}>
          <img src={logo} alt="logo" className='logo' />
          <h1>Mind</h1>
        </div>
        <div className="hamburger" onClick={hamburgerClick} style={{backgroundColor: isOpen ? '#ffffff30' : 'transparent'}}>
            <div className='barHamburger'></div>
            <div className='barHamburger'></div>
            <div className='barHamburger'></div>
        </div>
        <div className="menu" style={{display: isOpen ? 'flex' : 'none'}}>
          <Link to="/">Início</Link>
          <Link to="/se-entenda">Se entenda</Link>
          <Link to="/saude-geral">Saúde geral</Link>
          <Link to="/condicoes-mentais">Condições mentais</Link>
          <Link to="/">Link 5</Link>
          <Link to="/">Link 6</Link>
          <Link to="/">Link 7</Link>
          <Link to="/">Link 8</Link>
        </div>
    </div>
  )
}

export default Header
