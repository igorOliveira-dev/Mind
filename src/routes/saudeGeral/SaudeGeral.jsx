import React, { useEffect } from 'react';
import Header from '../../elements/Header'
import './saudeGeral.css'


import cerebroSaude from '/cerebro-saude.png'

const SaudeGeral = () => {

    //scroll para o topo ao carregar a pagina
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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
            <b>Nutrientes essenciais:</b>
            <p>
              Os nutrientes essenciais, como vitaminas, minerais, proteínas e ácidos graxos ômega-3, são vitais para o funcionamento adequado do cérebro. A falta desses nutrientes pode levar a problemas de saúde mental, como depressão e ansiedade. Por exemplo, a vitamina B12, encontrada em alimentos como peixe e ovos, é crucial para a saúde do sistema nervoso e a produção de neurotransmissores que regulam o humor.
            </p>
          </p>
          <p>
            <b>Alimentos Integrais e Saúde Mental</b>
            <p>
              Alimentos integrais, como frutas, vegetais, grãos integrais e legumes, são ricos em fibras e antioxidantes. Eles ajudam a regular o açúcar no sangue e a inflamação, ambos ligados à saúde mental. Estudos mostram que dietas ricas em alimentos integrais podem reduzir o risco de depressão e ansiedade.
            </p>
          </p>
          <p>
            <b>Açúcar e Saúde Mental</b>
            <p>
              O consumo excessivo de açúcar tem sido associado a uma série de problemas de saúde, incluindo obesidade e doenças cardíacas. Além disso, estudos sugerem que dietas ricas em açúcar podem aumentar o risco de problemas de saúde mental. Reduzir o consumo de açúcar pode melhorar o humor e a energia.
            </p>
          </p>
          <p>
            <b>Hidratação</b>
            <p>
              A hidratação adequada é essencial para a saúde geral, incluindo a saúde mental. A desidratação pode afetar a concentração, o humor e a energia.
            </p>
          </p>
          <p>
            <b>Conclusão</b>
            <p>
              A alimentação saudável é uma parte crucial do cuidado com a saúde mental. Uma dieta equilibrada e nutritiva pode ajudar a melhorar o humor, aumentar a energia e reduzir o risco de problemas de saúde mental. Lembre-se, é sempre importante procurar aconselhamento de um profissional de saúde ao fazer mudanças significativas na dieta.
            </p>
          </p>
        </div>

        <div className="exercicios">
          <h1>Exercícios</h1>
        </div>
    </div>
  )
}

export default SaudeGeral
