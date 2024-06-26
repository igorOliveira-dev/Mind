import React from 'react'
import { useState } from 'react'

import './pesquisa.css'

import Header from '../../elements/Header'
import { useNavigate, Link } from 'react-router-dom'

const Pesquisa = () => {
  const [respostas, setRespostas] = useState({});
  const [txtConclusao, setTxtConclusao] = useState('');

  const [depressao, setDepressao] = useState(0);
  const [ansiedade, setAnsiedade] = useState(0);
  const [transtornoEstresse, setTranstornoEstresse] = useState(0);
  const [transtornoPersonalidade, setTranstornoPersonalidade] = useState(0);
  const [transtornoAdaptacao, setTranstornoAdaptacao] = useState(0);
  
  const perguntas = [
    { id: 1, 
      pergunta: 'Como você classificaria seu humor geral na última semana?',
      opcoes: [
        {texto: 'Muito bom', valor: 1},
        {texto: 'Bom', valor: 2},
        {texto: 'Neutro', valor: 3},
        {texto: 'Ruim', valor: 6, depressaoValor: 1, ansiedadeValor: 1},
        {texto: 'Muito ruim', valor: 7, depressaoValor: 2, ansiedadeValor: 2}
      ]
    },
    { id: 2,
      pergunta: 'Você tem tido problemas para dormir?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, depressaoValor: 1, ansiedadeValor: 1, transtornoEstresseValor: 2},
        {texto: 'Sempre', valor: 5, depressaoValor: 2, ansiedadeValor: 2, transtornoEstresseValor: 2}
      ]
    },
    { id: 3,
      pergunta: 'Você se sente cansado ou sem energia na maior parte do tempo?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, depressaoValor: 1},
        {texto: 'Sempre', valor: 5, depressaoValor: 2}
      ]
    },
    { id: 4,
      pergunta: 'Você tem se sentido ansioso ou preocupado na maior parte do tempo?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3, ansiedadeValor: 2},
        {texto: 'Frequentemente', valor: 4, ansiedadeValor: 3},
        {texto: 'Sempre', valor: 5, ansiedadeValor: 4}
      ]
    },
    { id: 5,
      pergunta: 'Você tem se sentido triste ou deprimido na maior parte do tempo?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3, depressaoValor: 2},
        {texto: 'Frequentemente', valor: 4, depressaoValor: 3},
        {texto: 'Sempre', valor: 5, depressaoValor: 4}
      ]
    },
    { id: 6,
      pergunta: 'Você tem se sentido sobrecarregado por conta do estresse?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, transtornoEstresseValor: 1, transtornoAdaptacaoValor: 1},
        {texto: 'Sempre', valor: 5, transtornoEstresseValor: 2, transtornoAdaptacaoValor: 2}
      ]
    },
    { id: 7,
      pergunta: 'Você tem dificuldade em se concentrar?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, depressaoValor: 1, ansiedadeValor: 1},
        {texto: 'Sempre', valor: 5, depressaoValor: 2, ansiedadeValor: 2}
      ]
    },
    { id: 8,
      pergunta: 'Você tem se sentido isolado ou sozinho?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, depressaoValor: 1},
        {texto: 'Sempre', valor: 5, depressaoValor: 2}
      ]
    },
    { id: 9,
      pergunta: 'Você tem tido pensamentos negativos sobre si mesmo?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, depressaoValor: 1, transtornoPersonalidadeValor: 1},
        {texto: 'Sempre', valor: 5, depressaoValor: 2, transtornoPersonalidadeValor: 2}
      ]
    },
    { id: 10,
      pergunta: 'Você tem se sentido irritado ou com raiva na maior parte do tempo?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, transtornoEstresseValor: 1},
        {texto: 'Sempre', valor: 5, transtornoEstresseValor: 2}
      ]
    },
    { id: 11,
      pergunta: 'Você tem se sentido desinteressado pelas coisas que costumava gostar?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3, depressaoValor: 2},
        {texto: 'Frequentemente', valor: 4, depressaoValor: 3},
        {texto: 'Sempre', valor: 5, depressaoValor: 4}
      ]
    },
    { id: 12,
      pergunta: 'Você tem tido dificuldade em lidar com o estresse diário?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, transtornoAdaptacaoValor: 1},
        {texto: 'Sempre', valor: 5, transtornoAdaptacaoValor: 2}
      ]
    },
    { id: 13,
      pergunta: 'Você tem se sentido desconectado da realidade?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, transtornoPersonalidadeValor: 1},
        {texto: 'Sempre', valor: 5, transtornoPersonalidadeValor: 2}
      ]
    },
    { id: 14,
      pergunta: 'Você tem tido pensamentos de machucar a si mesmo ou aos outros?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 4},
        {texto: 'As vezes', valor: 5},
        {texto: 'Frequentemente', valor: 6},
        {texto: 'Sempre', valor: 7}
      ]
    },
    { id: 15,
      pergunta: 'Você tem se sentido culpado ou inútil?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, depressaoValor: 1},
        {texto: 'Sempre', valor: 5, depressaoValor: 2}
      ]
    },
    { id: 16,
      pergunta: 'Você tem tido dificuldade em manter relacionamentos saudáveis?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, transtornoPersonalidadeValor: 1},
        {texto: 'Sempre', valor: 5, transtornoPersonalidadeValor: 2}
      ]
    },
    { id: 17,
      pergunta: 'Você tem se sentido constantemente preocupado ou com medo?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3, ansiedadeValor: 2},
        {texto: 'Frequentemente', valor: 4, ansiedadeValor: 3},
        {texto: 'Sempre', valor: 5, ansiedadeValor: 4}
      ]
    },
    { id: 18,
      pergunta: 'Você tem tido dificuldade em controlar suas emoções?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, transtornoPersonalidadeValor: 1},
        {texto: 'Sempre', valor: 5, transtornoPersonalidadeValor: 2}
      ]
    },
    { id: 19,
      pergunta: 'Você tem se sentido desesperançoso sobre o futuro?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, depressaoValor: 1},
        {texto: 'Sempre', valor: 5, depressaoValor: 2}
      ]
    },
    { id: 20,
      pergunta: 'Você tem se sentido insatisfeito com a sua vida?',
      opcoes: [
        {texto: 'Nunca', valor: 1},
        {texto: 'Raramente', valor: 2},
        {texto: 'As vezes', valor: 3},
        {texto: 'Frequentemente', valor: 4, depressaoValor: 1, transtornoAdaptacaoValor: 1},
        {texto: 'Sempre', valor: 5, depressaoValor: 2, transtornoAdaptacaoValor: 2}
      ]
    },
  ];

  const navigate = useNavigate();
  const returnToInit = () => {
    navigate("/");
  }

  
  const [respostasAnteriores, setRespostasAnteriores] = useState({});
  const handleOnChange = (e) => {
    const perguntaId = e.target.name;
    const respostaValor = Number(e.target.value);

    const pergunta = perguntas.find(p => p.id === Number(perguntaId));
    const opcao = pergunta.opcoes.find(o => o.valor === respostaValor);

    // atualizando o valor de depressao
    if(respostasAnteriores[perguntaId]) {
      const opcaoAnterior = pergunta.opcoes.find(o => o.valor === respostasAnteriores[perguntaId]);
      if(opcaoAnterior && opcaoAnterior.depressaoValor) {
        setDepressao(depressao => depressao - Number(opcaoAnterior.depressaoValor));
      }
    }

    if(opcao && opcao.depressaoValor) {
      setDepressao(depressao => Number(depressao) + Number(opcao.depressaoValor));
    }

    // atualizando o valor de ansiedade
    if(respostasAnteriores[perguntaId]) {
      const opcaoAnterior = pergunta.opcoes.find(o => o.valor === respostasAnteriores[perguntaId]);
      if(opcaoAnterior && opcaoAnterior.ansiedadeValor) {
        setAnsiedade(ansiedade => ansiedade - Number(opcaoAnterior.ansiedadeValor));
      }
    }

    if(opcao && opcao.ansiedadeValor) {
      setAnsiedade(ansiedade => Number(ansiedade) + Number(opcao.ansiedadeValor));
    }
    
    // atualizando o valor de transtorno de estresse
    if(respostasAnteriores[perguntaId]) {
      const opcaoAnterior = pergunta.opcoes.find(o => o.valor === respostasAnteriores[perguntaId]);
      if(opcaoAnterior && opcaoAnterior.transtornoEstresseValor) {
        setTranstornoEstresse(transtornoEstresse => transtornoEstresse - Number(opcaoAnterior.transtornoEstresseValor));
      }
    }

    if(opcao && opcao.transtornoEstresseValor) {
      setTranstornoEstresse(transtornoEstresse => Number(transtornoEstresse) + Number(opcao.transtornoEstresseValor));
    }

    // atualizando o valor de transtorno de personalidade
    if(respostasAnteriores[perguntaId]) {
      const opcaoAnterior = pergunta.opcoes.find(o => o.valor === respostasAnteriores[perguntaId]);
      if(opcaoAnterior && opcaoAnterior.transtornoPersonalidadeValor) {
        setTranstornoPersonalidade(transtornoPersonalidade => transtornoPersonalidade - Number(opcaoAnterior.transtornoPersonalidadeValor));
      }
    }

    if(opcao && opcao.transtornoPersonalidadeValor) {
      setTranstornoPersonalidade(transtornoPersonalidade => Number(transtornoPersonalidade) + Number(opcao.transtornoPersonalidadeValor));
    }

    // atualizando o valor de transtorno de adaptação
    if(respostasAnteriores[perguntaId]) {
      const opcaoAnterior = pergunta.opcoes.find(o => o.valor === respostasAnteriores[perguntaId]);
      if(opcaoAnterior && opcaoAnterior.transtornoAdaptacaoValor) {
        setTranstornoAdaptacao(transtornoAdaptacao => transtornoAdaptacao - Number(opcaoAnterior.transtornoAdaptacaoValor));
      }
    }

    if(opcao && opcao.transtornoAdaptacaoValor) {
      setTranstornoAdaptacao(transtornoAdaptacao => Number(transtornoAdaptacao) + Number(opcao.transtornoAdaptacaoValor));
    }

    setRespostas({
      ...respostas,
      [perguntaId]: Number(respostaValor),
    });

    setRespostasAnteriores({
      ...respostasAnteriores,
      [perguntaId]: respostaValor,
    });
  };
  
  const [showResult, setShowResult] = useState(false)

  const handleOnSubmit = () => {
    if (Object.keys(respostas).length === perguntas.length) {
      {confirmedSubmit()}
    } else {
      alert('por favor, preencha todos os campos para continuar')
      return;
    }
  };

  const confirmedSubmit = () => {
    console.log(depressao, ansiedade, transtornoEstresse, transtornoPersonalidade, transtornoAdaptacao);
    const total = Object.values(respostas).reduce((a, b) => a + b, 0);
    console.log(respostas);
    setShowResult(true);
    if (total < 50) {
      setTxtConclusao(txtConclusao => txtConclusao + 'Parece que você está se sentindo bem na maior parte do tempo, o que é ótimo! Continue fazendo o que está funcionando para você e lembre-se de que é normal ter dias ruins de vez em quando.')
    } else {
      if (total < 65) {
        setTxtConclusao(txtConclusao => txtConclusao + 'Você pode estar enfrentando alguns desafios ou estresse. Tente identificar quais áreas estão causando mais problemas e procure estratégias para lidar com esses problemas. Isso pode incluir coisas como fazer uma melhora em sua alimentação, praticar exercícios físicos ou falar com um amigo de confiança.')
      } else {
        if (total < 85) {
          setTxtConclusao(txtConclusao => txtConclusao + 'Parece que você está passando por um período difícil. É importante lembrar que você não está sozinho e que existem recursos disponíveis para ajudá-lo. Considere falar com um profissional de saúde mental para obter apoio adicional, além de sempre buscar uma rotina e alimentação melhores.')
        } else {
          setTxtConclusao(txtConclusao => txtConclusao + 'Você parece estar enfrentando um alto nível de estresse ou desconforto. É realmente importante procurar ajuda profissional. Falar com um profissional de saúde mental pode fornecer o suporte e as ferramentas que você precisa para se sentir melhor, também pode ser uma boa idéia ver os recursos disponíveis neste site para te auxiliar.')
        }
      }
    }
    if (depressao >= 16 || ansiedade >= 9 || transtornoEstresse >= 4 || transtornoPersonalidade >= 5 || transtornoAdaptacao >= 4) {
      let condicoes = [];
    
      if (depressao >= 13) {
        condicoes.push("depressão");
      }
      if (ansiedade >= 7) {
        condicoes.push("ansiedade");
      }
      if (transtornoEstresse >= 3) {
        condicoes.push("transtorno de estresse");
      }
      if (transtornoPersonalidade >= 4) {
        condicoes.push("transtorno de personalidade");
      }
      if (transtornoAdaptacao >= 3) {
        condicoes.push("transtorno de adaptação");
      }
    
      let condicoesStr = condicoes.join(", ");
    
      setTxtConclusao(txtConclusao => (
        <>
          {txtConclusao} Você tem indícios das seguintes condições mentais: {condicoesStr}.
          Você pode ver sobre essa(s) condição(s) em: <Link className='linkToCondicoesMentais' to="/condicoes-mentais">Condições Mentais</Link>
        </>
      ));
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
