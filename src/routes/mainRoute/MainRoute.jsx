import React from 'react'
import Header from '../../elements/Header'

import './mainRoute.css'
import Footer from '../../elements/Footer'

const MainRoute = () => {

  const goToSeEntenda = () => {
    location = "/se-entenda"
  }

  const goToSaudeGeral = () => {
    location = "saude-geral"
  }

  return (
    <div>
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
          <p>Aqui você pode saber como está o estado da sua mente e caso precise, os tratamentos e dicas</p>
        </button>
        <button className="btn2" onClick={goToSaudeGeral}>
          <h2>Saúde geral</h2>
          <p>Aqui você vai receber dicas de como melhorar a sua saúde, incluir exercícios e uma alimentação melhor à rotina</p>
        </button>
        <button className="btn3">btn</button>
        <button className="btn4">btn</button>
        <button className="btn5">btn</button>
        <button className="btn6">btn</button>
      </div>

      <Footer />
    </div>
  )
}

export default MainRoute
