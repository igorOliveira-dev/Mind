import React from 'react';
import { useNavigate } from 'react-router-dom';

import './seEntenda.css';

import Header from '../../elements/Header';

const SeEntenda = () => {
  const navigate = useNavigate();

  const goToPesquisa = () => {
    navigate("/se-entenda-pesquisa");
  }

  return (
    <div className='seEntendaContainer'>
      <Header />
        <div className="seEntendaInit">
          <div className="topSeEntenda">
            <h1>Se entenda</h1>
            <p>Olá, essa página irá te ajudar a entender a sua condição mental, dando auxilio de como melhorar a partir de um questionário que vai medir o seu bem estar mental, lembre-se que se você sente que tem alguma condição mental séria, procure imediatamente um profissional.</p>
          </div>
          <div className="bottomSeEntenda">
            <button onClick={goToPesquisa}>Iniciar pesquisa</button>
          </div>
        </div>
    </div>
  )
}

export default SeEntenda
