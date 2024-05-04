import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

import { createUserWithEmailAndPassword, updateProfile, getAuth } from "firebase/auth";

import './login.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

    const navigate = useNavigate();
    const returnToInit = () => {
      navigate("/");
    };

    const goToLogin = () => {
        navigate("/login");
      };

    const isValidEmail = (email) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    };

    const handleRegister = async (event) => {
      event.preventDefault();
      if (!isValidEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: username });
        alert(user);
        alert('Você foi registrado com sucesso, agora faça o login em sua conta.');
        goToLogin();
      } catch (error) {
          if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
          } else {
            alert('Aconteceu algum problema ao criar a sua conta, caso você não consiga resolver, entre em contato com o suporte do Mind')
          }
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
            <input type="text" name='username' required onChange={e => setUser(e.target.value)} />
          </div>
          <div className="loginInputBox">
            <label htmlFor="email">E-mail:</label>
            <input type="email" name='email' required onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="loginInputBox">
            <label htmlFor="password">Senha:</label>
            <input type="password" name='password' required onChange={e => setPassword(e.target.value)} />
          </div>
          <input type='submit' className='submitLogin' value="Criar conta" />
          <p>Já tem uma conta? <Link className='linkCriarConta' to="/login">Entrar agora</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register