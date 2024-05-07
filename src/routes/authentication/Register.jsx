import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";

import './login.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false); // Novo estado para rastrear o carregamento

  const navigate = useNavigate();
  const returnToInit = () => {
    navigate("/");
  };

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    const auth = getAuth();

    if (username.length > 15) {
      alert('O nome de usuário não pode ter mais de 15 letras');
      setLoading(false);
      return;
    }

    if (username.includes(' ')) {
      alert('O nome de usuário não pode conter espaços.');
      setLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      setLoading(false);
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      returnToInit();
    } catch (error) {
        if (password.length < 6) {
          alert('A senha deve ter pelo menos 6 caracteres.');
        } else {
          alert('Aconteceu algum problema ao criar a sua conta, caso você não consiga resolver, entre em contato com o suporte do Mind')
        }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='loginScreen'>
      <button onClick={returnToInit} className='btnVoltarLogin'>{"<"}</button>
      <div className="loginContainer">
        <h1>Registro</h1>
        <hr />
        <form onSubmit={handleRegister}>
        <div className="loginInputBox">
            <label htmlFor="username">Nome de usuário:</label>
            <input type="text" name='username' required onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="loginInputBox">
            <label htmlFor="email">E-mail:</label>
            <input type="email" name='email' required onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="loginInputBox">
            <label htmlFor="password">Senha:</label>
            <input type="password" name='password' required onChange={e => setPassword(e.target.value)} />
          </div>
          <input type='submit' className='submitLogin' value={loading ? "Carregando..." : "Criar conta"} />
          <p>Já tem uma conta? <Link className='linkCriarConta' to="/login">Entrar agora</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register
