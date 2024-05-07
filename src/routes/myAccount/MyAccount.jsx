import React, {useState, useEffect} from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import profileImage from '/user-profile-icon.png'

import { FaPencilAlt } from 'react-icons/fa';

import './myAccount.css'

const MyAccount = () => {

  const navigate = useNavigate();
  const returnToInit = () => {
    navigate("/");
  };

  // recuperando informação de username
  const [username, setUsername] = useState('');

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName);
      }
    });

    return () => unsubscribe();
  }, []);

  // recuperando informação de email
  const [email, setEmail] = useState('');

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      }
    });

    return () => unsubscribe();
  }, []);

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
      returnToInit();
      alert('Conta desconectada com sucesso');
      await signOut(auth);
    } catch (error) {
      console.error('Erro ao fazer logout', error);
    }
  };

  return (
    <div className='myAccountContainer'>
      <button onClick={returnToInit} className='btnVoltarMyAccount'>{"<"}</button>
      <div className="myAccountBox">
        <h1>Perfil</h1>
        <img src={profileImage} alt="imagem de perfil" className='imgProfileMyAccount' />
        <h2 className='usernameMyAccount'>Olá, {username}</h2>
        <h3 className='emailMyAccount'>{email}</h3>
        <Link to="/" className='profileInformationLink'>Informações sobre perfis</Link>
        <button onClick={handleLogout} className='logoutBtnMyAccount'>Sair</button>
      </div>
    </div>
  )
}

export default MyAccount
