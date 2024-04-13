import React from 'react'
import Header from '../../elements/Header'
import './saudeGeral.css'

import cerebroSaude from '/cerebro-saude.png'

const SaudeGeral = () => {
  return (
    <div>
      <Header />
      <div className="saudeGeralContent">
        <div className="initLeft">
          <h1>Saúde geral</h1>
          <h2>A saúde mental com certeza também é influenciada pela saúde física, sabendo disso é aconselhável seguir uma dieta saudável, praticar exercícios e tomar outras medidas saudáveis, arraste para baixo para conhecer melhor sobre essas medidas!</h2>
        </div>
        <div className="initRight">
          <img src={cerebroSaude} alt="cérebro" />
        </div>
      </div>
      <div className="dietaSaudavel">
          <h1>Dieta Saudável</h1>
          <p>
            A saúde mental é tão importante quanto a saúde física. No entanto, muitas vezes negligenciamos a conexão entre a dieta e a saúde mental. A alimentação saudável não só beneficia o nosso corpo, mas também tem um impacto significativo no nosso bem-estar mental. <br />
          </p>
          <p>
            <strong>Nutrientes essenciais:</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident rem consectetur non sapiente aut possimus enim ab quasi debitis laborum, ex quibusdam labore ad optio. Accusamus nobis a animi debitis.</p>
          </p>
        </div>
    </div>
  )
}

export default SaudeGeral
