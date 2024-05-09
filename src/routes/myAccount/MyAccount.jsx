import React, {useState, useEffect} from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import profileImage from '/user-profile-icon.png'

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

  const [infoOpen, setInfoOpen] = useState(false);
  const changeIsOpenState = () => {
    setInfoOpen(!infoOpen)
  }

  return (
    <div className='myAccountContainer'>
      <button onClick={returnToInit} className='btnVoltarMyAccount'>{"<"}</button>
      <div className="myAccountBox">
        <h1>Perfil</h1>
        <img src={profileImage} alt="imagem de perfil" className='imgProfileMyAccount' />
        <h2 className='usernameMyAccount'>Olá, {username}</h2>
        <h3 className='emailMyAccount'>{email}</h3>
        <button className='profileInformationLink' onClick={changeIsOpenState}>Informações sobre perfis</button>
        <button onClick={handleLogout} className='logoutBtnMyAccount'>Sair</button>
      </div>
      <div className="profileInformationBox" style={{display: infoOpen ? 'block' : 'none'}}>
        <button className='closeProfileInfo' onClick={changeIsOpenState}>{"<"}</button>
        <div>
          <p>Prezado usuário,</p>
          
          <p>Gostaríamos de fornecer algumas informações importantes sobre a sessão de perfil em nosso site.</p>
          
          <p>Os perfis em nosso site são projetados para melhorar a interação entre os usuários em certas sessões. Eles desempenham um papel crucial na personalização da sua experiência e na facilitação de uma comunicação eficaz entre os membros da nossa comunidade.</p>
          
          <p>No momento, gostaríamos de informar que a foto do perfil é apenas demonstrativa e não pode ser alterada pelos usuários. Estamos cientes de que a personalização da foto do perfil é uma característica importante e estamos trabalhando para disponibilizá-la no futuro.</p>
          
          <p>Além disso, se você deseja alterar seu nome de usuário ou senha, atualmente essas opções não estão disponíveis diretamente na aplicação. No entanto, nossa equipe de suporte está sempre pronta para ajudar. Você pode entrar em contato com o suporte do Mind para solicitar essas alterações.</p>
          
          <p>Agradecemos a sua compreensão e paciência enquanto trabalhamos para melhorar a funcionalidade do nosso site. Se você tiver mais perguntas ou precisar de assistência adicional, não hesite em entrar em contato conosco.</p>
          
          <p>Atenciosamente, Equipe do Mind.</p>
          
          <Link to="/suporte" className='linkToSupportMyAccount'>Clique para obter suporte.</Link>
        </div>
      </div>
    </div>
  )
}

export default MyAccount
