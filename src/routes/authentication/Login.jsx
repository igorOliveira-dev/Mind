import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './login.css';

const Login = () => {

    const navigate = useNavigate();
    const returnToInit = () => {
        navigate("/");
      };

  return (
    <div className='loginScreen'>
      <button onClick={returnToInit} className='btnVoltarLogin'>{"<"}</button>
      <div className="loginContainer">
        <h1>Login</h1>
        <hr />
        <form action="">
          <div className="loginInputBox">
            <label htmlFor="email">E-mail:</label>
            <input type="email" name='email' required />
          </div>
          <div className="loginInputBox">
            <label htmlFor="password">Senha:</label>
            <input type="password" name='password' required />
          </div>
          <button className='submitLogin'>Entrar</button>
          <p>Não tem uma conta? <Link className='linkCriarConta' to="/register">Crie agora</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login