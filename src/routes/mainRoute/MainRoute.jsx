import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Header from '../../elements/Header'
import './mainRoute.css'
import Footer from '../../elements/Footer'

const MainRoute = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName);
      }
    });

    // Limpar a inscrição quando o componente for desmontado
    return () => unsubscribe();
  }, []);

  //scroll para o topo ao carregar a pagina
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const goToSeEntenda = () => {
    navigate("/se-entenda");
  }

  const goToSaudeGeral = () => {
    navigate("/saude-geral");;
  }

  const goToCondicoesMentais = () => {
    navigate("/condicoes-mentais")
  }

  const goToComunity = () => {
    navigate("/comunity")
  }

  const goToSupport = () => {
    navigate("/support")
  }

  return (
    <div className='mainInitContent'>
      <Header />

      <div className="mainInit">
        <div className="leftInit">
          <h1 className='mindTitle'>Mind</h1>
          <p>O seu assistente de <strong>saúde mental</strong></p>
        </div>
        <div className="rightInit">
          <p>Bem vindo ao <strong>Mind</strong>, esse site foi pensado para melhorar a sua <strong>saúde mental</strong>, temos várias páginas pensadas para o que você precisa no momento. Arraste a tela para baixo e veja como podemos te ajudar!</p>
        </div>
      </div>

      <div className="paginas">
        <button className="btn1" onClick={goToSeEntenda}>
          <h2>Se entenda</h2>
          <p>Aqui você pode saber como está o estado da sua mente e caso precise, os tratamentos e dicas.</p>
        </button>
        <button className="btn2" onClick={goToSaudeGeral}>
          <h2>Saúde geral</h2>
          <p>Aqui você vai receber dicas de como melhorar a sua saúde, incluir exercícios e uma alimentação melhor à rotina.</p>
        </button>
        <button className="btn3" onClick={goToCondicoesMentais}>
          <h2>Condições Mentais</h2>
          <p>Aqui você vai entender sobre algumas condições mentais e como elas funcionam, assim é possível identificar caso você tenha alguma dessas condições.</p>
        </button>
        <button className="btn4" onClick={goToComunity}>
          <h2>Comunidade</h2>
          <p>Aqui você pode interagir com outros usuários compartilhando seus sentimentos e podendo encontrar pessoas que passam por situações parecidas com a sua.</p>
        </button>
        <button className="btn5" onClick={goToSupport}>
          <h2>Suporte</h2>
          <p>Na página de suporte você pode entrar em contato com a equipe do Mind para poder receber qualquer tipo de suporte sobre este site.</p>
        </button>
      </div>

      <Footer />
    </div>
  )
}

export default MainRoute