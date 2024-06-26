import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

import { signInWithEmailAndPassword } from "firebase/auth";

import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const returnToInit = () => {
        navigate("/");
      };

      const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
          await signInWithEmailAndPassword(auth, email, password);
          returnToInit();
        } catch (error) {
          alert('Seu e-mail e/ou senha está incorreto. Caso o problema não seja resolvido, entre em contato com o suporte do Mind')
        } finally {
          setLoading(false); 
        }
      };

  return (
    <div className='loginScreen'>
      <button onClick={returnToInit} className='btnVoltarLogin'>{"<"}</button>
      <div className="loginContainer">
        <h1>Login</h1>
        <hr />
        <form onSubmit={handleLogin}>
          <div className="loginInputBox">
            <label htmlFor="email">E-mail:</label>
            <input type="email" name='email' required onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="loginInputBox">
            <label htmlFor="password">Senha:</label>
            <input type="password" name='password' required onChange={e => setPassword(e.target.value)} />
          </div>
          <input type='submit' className='submitLogin' value={loading ? "Carregando..." : "Entrar"} />
          <p>Não tem uma conta? <Link className='linkCriarConta' to="/register">Crie agora</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login