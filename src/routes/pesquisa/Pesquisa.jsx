import React from 'react'
import { useState } from 'react'

import './pesquisa.css'

import Header from '../../elements/Header'

const Pesquisa = () => {
  const [respostas, setRespostas] = useState({});
  const [txtConclusao, setTxtConclusao] = useState();

  const perguntas = [
    { id: 1, 
      pergunta: 'Como você classificaria seu humor geral na última semana?',
      opcoes: [
        {texto: 'Muito bom', valor: 1},
        {texto: 'Bom', valor: 2},
        {texto: 'Neutro', valor: 3},
        {texto: 'Ruim', valor: 4},
        {texto: 'Muito ruim', valor: 5}
      ]
    },
    { id: 2,
      pergunta: 'Você tem tido problemas para dormir?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 3,
      pergunta: 'Você se sente cansado ou sem energia na maior parte do tempo?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 4,
      pergunta: 'Você tem se sentido ansioso ou preocupado na maior parte do tempo?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 5,
      pergunta: 'Você tem se sentido triste ou deprimido na maior parte do tempo?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 6,
      pergunta: 'Você tem se sentido sobrecarregado por conta do estresse?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 7,
      pergunta: 'Você tem dificuldade em se concentrar?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 8,
      pergunta: 'Você tem se sentido isolado ou sozinho?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 9,
      pergunta: 'Você tem tido pensamentos negativos sobre si mesmo?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 10,
      pergunta: 'Você tem se sentido irritado ou com raiva na maior parte do tempo?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 11,
      pergunta: 'Você tem se sentido desinteressado pelas coisas que costumava gostar?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 12,
      pergunta: 'Você tem tido dificuldade em lidar com o estresse diário?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 13,
      pergunta: 'Você tem se sentido desconectado da realidade?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 14,
      pergunta: 'Você tem tido pensamentos de machucar a si mesmo ou aos outros?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 15,
      pergunta: 'Você tem se sentido culpado ou inútil?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 16,
      pergunta: 'Você tem tido dificuldade em manter relacionamentos saudáveis?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 17,
      pergunta: 'Você tem se sentido constantemente preocupado ou com medo?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 18,
      pergunta: 'Você tem tido dificuldade em controlar suas emoções?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 19,
      pergunta: 'Você tem se sentido desesperançoso sobre o futuro?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
    { id: 20,
      pergunta: 'Você tem se sentido insatisfeito com a sua vida?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4},
        {texto: 'Sempre', valor: 5}
      ]
    },
  ];

  const returnToInit = () => {
    location = "/"
  }

  const handleOnChange = (e) => {
    const perguntaId = e.target.name;
    const respostaValor = e.target.value;

    setRespostas({
      ...respostas,
      [perguntaId]: Number(respostaValor),
    });
  };
  
  const [showResult, setShowResult] = useState(false)

  const handleOnSubmit = () => {
    if (Object.keys(respostas).length === perguntas.length) {
      {confirmedSubmit()}
    } else {
      alert('por favor, preencha todos os campos para continuar')
      {confirmedSubmit()}
      return;
    }
  };

  const confirmedSubmit = () => {
    const total = Object.values(respostas).reduce((a, b) => a + b, 0);
    console.log(respostas);
    setShowResult(true);
    if (total < 40) {
      setTxtConclusao('Parece que você está se sentindo bem na maior parte do tempo, o que é ótimo! Continue fazendo o que está funcionando para você e lembre-se de que é normal ter dias ruins de vez em quando.')
    } else {
      if (total < 60) {
        setTxtConclusao('Você pode estar enfrentando alguns desafios ou estresse. Tente identificar quais áreas estão causando mais problemas e procure estratégias para lidar com esses problemas. Isso pode incluir coisas como fazer uma melhora em sua alimentação, praticar exercícios físicos ou falar com um amigo de confiança.')
      } else {
        if (total < 80) {
          setTxtConclusao('Parece que você está passando por um período difícil. É importante lembrar que você não está sozinho e que existem recursos disponíveis para ajudá-lo. Considere falar com um profissional de saúde mental para obter apoio adicional, além de sempre buscar uma rotina e alimentação melhores.')
        } else {
          setTxtConclusao(' Você parece estar enfrentando um alto nível de estresse ou desconforto. É realmente importante procurar ajuda profissional. Falar com um profissional de saúde mental pode fornecer o suporte e as ferramentas que você precisa para se sentir melhor, também pode ser uma boa idéia ver os recursos disponíveis neste site para te auxiliar.')
        }
      }
    }
  }

  return (
    <div className='pesquisaContainer'>
      <Header />
      <div className="pesquisaInit">
          {perguntas.map((pergunta) => (
            <div className='containerPergunta' key={pergunta.id}>
              <h2>{pergunta.pergunta}</h2>
              {pergunta.opcoes.map((opcao, index) => (
                <label key={index}>
                  <input
                    className='inputRadio'
                    type="radio"
                    name={pergunta.id}
                    value={opcao.valor}
                    onChange={handleOnChange}
                  />
                  {opcao.texto}
                </label>
              ))}
            </div>
          ))}
          <button className='btnEnviarQuestionario' onClick={handleOnSubmit}>Enviar Respostas</button>
        </div>
        <div className="conclusaoForm" style={{display: showResult ? 'block' : 'none'}}>
          <div className="contentConclusao">
            <p>{txtConclusao}</p>
            <button onClick={returnToInit}>voltar ao início</button>
          </div>
        </div>
    </div>
  )
}

export default Pesquisa
