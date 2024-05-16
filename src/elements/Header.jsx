import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

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
    event.stopPropagation();
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

  // configurações de logout
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    if (!confirm('Você tem certeza que deseja desconectar a sua conta?')) {
      return;
    }
    try {
      alert('Conta desconectada com sucesso');
      await signOut(auth);
    } catch (error) {
      console.error('Erro ao fazer logout', error);
    }
  };

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
          <Link className='menuLink' to="/">Início</Link>
          <Link className='menuLink' to="/se-entenda">Se entenda</Link>
          <Link className='menuLink' to="/saude-geral">Saúde geral</Link>
          <Link className='menuLink' to="/condicoes-mentais">Condições mentais</Link>
          <Link className='menuLink' to="/comunity">Comunidade</Link>
          <Link className='menuLink' to="/support">Suporte</Link>
          {user ? (
          <>
            <Link className='linkToMyAccount' to="/my-account">Minha conta</Link>
            <button onClick={handleLogout} className='logoutBtn'>Sair</button>
          </>
          ) : (
          <Link to="/login" className='menuLink'>Entrar</Link>
          )}
        </div>
    </div>
  )
}

export default Header
