import React, { useEffect } from 'react';
import Header from '../../elements/Header'
import './saudeGeral.css'
import { useNavigate } from 'react-router-dom';

import logoPNG from '/logoPNG.png'
import cerebroSaude from '/cerebro-saude.png'

const SaudeGeral = () => {

    //scroll para o topo ao carregar a pagina
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const returnToInit = () => {
      navigate("/");
    }
    
  return (
    <div>
      <Header />
      <div className="saudeGeralContent">
        <div className="initLeft">
          <h1>Saúde geral</h1>
          <h2>A saúde física é com certeza interligada à saúde mental, uma pode afetar a outra e para ter uma saúde mental boa é importante manter a saúde física em dia, sabendo disso é aconselhável seguir uma dieta saudável, praticar exercícios e tomar outras medidas saudáveis, arraste para baixo para conhecer melhor sobre essas medidas!</h2>
        </div>
        <div className="initRight">
          <img src={cerebroSaude} alt="cérebro" />
        </div>
      </div>
        <div className="dietaSaudavel">
          <h1>Dieta Saudável</h1>
          <p>
            É fundamental manter uma alimentação saudável para ter uma boa saúde física, sendo também algo de extrema importância para a saúde mental, portanto, é importante saber sobre a conexão entre a dieta saudável e a nossa mente.
          </p>
          <div>
            <b>Nutrientes essenciais:</b>
            <p>
              Os nutrientes essenciais, como vitaminas, minerais, proteínas e ácidos graxos ômega-3, são vitais para o funcionamento adequado do cérebro. A falta desses nutrientes pode levar a problemas de saúde mental, como depressão e ansiedade. Por exemplo, a vitamina B12, encontrada em alimentos como peixe e ovos, é crucial para a saúde do sistema nervoso e a produção de neurotransmissores que regulam o humor. Busque sempre uma dieta que inclua esses nutrientes.
            </p>
          </div>
          <div>
            <b>Alimentos Integrais e Saúde Mental:</b>
            <p>
              Alimentos integrais, como frutas, vegetais, grãos integrais e legumes, são ricos em fibras e antioxidantes. Eles ajudam a regular o açúcar no sangue e a inflamação, ambos ligados à saúde mental. Estudos mostram que dietas ricas em alimentos integrais podem reduzir o risco de depressão e ansiedade.
            </p>
          </div>
          <div>
            <b>Açúcar e Saúde Mental:</b>
            <p>
              O consumo excessivo de açúcar tem sido associado a uma série de problemas de saúde, incluindo obesidade e doenças cardíacas. Além disso, estudos sugerem que dietas ricas em açúcar podem aumentar o risco de problemas de saúde mental. Reduzir o consumo de açúcar pode melhorar o humor e a energia.
            </p>
          </div>
          <div>
            <b>Hidratação:</b>
            <p>
              A hidratação adequada é essencial para a saúde geral, incluindo a saúde mental. A desidratação pode afetar a concentração, o humor e a energia.
            </p>
          </div>
          <div>
            <b>Conclusão:</b>
            <p>
              A alimentação saudável é uma parte crucial do cuidado com a saúde mental. Uma dieta equilibrada e nutritiva pode ajudar a melhorar o humor, aumentar a energia e reduzir o risco de problemas de saúde mental. Lembre-se, é sempre importante procurar aconselhamento de um profissional de saúde ao fazer mudanças significativas na dieta.
            </p>
          </div>
        </div>

        <div className="exercicios">
          <h1>Exercícios</h1>
          <p>
            A prática de exercícios traz diversas vantagens para a saúde física e mental, além de causar mudanças físicas que contibuem para o aumento da autoestima e autoeficácia. Por meio de exercícios, também vem mudanças biológicas, como a liberação de neurotransmissores que estão associados ao funcionamento do sistema nervoso central e ao cérebro.
          </p>
          <div>
            <b>Redução de sintomas de transtornos mentais:</b>
            <p>
              Evidências científicas indicam que a prática de exercícios previne sintomas de transtornos como depressão, ansiedade e transtorno bipolar. Exercícios aeróbicos e de resistencia são muito eficazes para isso quando são praticados por cerca de 90 minutos semanais.
            </p>
          </div>
          <div>
            <b>Recomendação da OMS:</b>
            <p>
              A Organização Mundial da Saúde (OMS) recomenda de 150 a 300 minutos de atividade aeróbica moderada a vigorosa por semana para adultos, e uma média de 60 minutos diários para crianças e adolescentes. Até mesmo pessoas sedentárias que pode não aguentar essa média, devem começar com as atividades possíveis para sair da condição de sedentário e ter uma boa saúde física.
            </p>
          </div>
          <div>
            <b>Tratamento de transtornos mentais com exercícios:</b>
            <p>
              Os exercícios em diversos casos na psicoterapia é usado como parte do tratamento de diversos transtornos mentais pela auta eficácia na diminuição de seus sintomas, isso prova que os exercícios tem resultado muito significativo na saúde mental.
            </p>
          </div>
        </div>
        <div className='outrosConselhos'>
          <hr />
          <div className="outrosConselhosContent">
            <p>
              Além dessas informações passadas, sempre é aconselhável ter todo o tipo de hábito que vai ajudar a melhorar sua saúde física e mental, alguns outros hábitos que podem te trazer vantagens são: rotinas de skin care, uma ótima higiente, passear com pets, sair com amigos, entre outros.
            </p>
            <div className="rightContent">
              <img src={logoPNG} />
              <button onClick={returnToInit}>Página inicial</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SaudeGeral
