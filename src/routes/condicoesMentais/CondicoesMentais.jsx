import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import './condicoesMentais.css'
import Header from '../../elements/Header'

import imgCondicoesMentais from '/imgCondicoesMentais.jpg'

const CondicoesMentais = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
    const returnToInit = () => {
      navigate("/");
    }

  // alterar altura de depressão
  const [alturaDepressao, setAlturaDepressao] = useState('48px');

  const changeHeightDepressao = () => {
    if (alturaDepressao === '48px') {
      setAlturaDepressao('none');
    } else {
      setAlturaDepressao('48px');
    }
  };

  // alterar altura de ansiedade
  const [alturaAnsiedade, setAlturaAnsiedade] = useState('48px');

  const changeHeightAnsiedade = () => {
    if (alturaAnsiedade === '48px') {
      setAlturaAnsiedade('none');
    } else {
      setAlturaAnsiedade('48px');
    }
  };

  // alterar altura de esquizofrenia
  const [alturaEsquizofrenia, setAlturaEsquizofrenia] = useState('48px');

  const changeHeightEsquizofrenia = () => {
    if (alturaEsquizofrenia === '48px') {
      setAlturaEsquizofrenia('none');
    } else {
      setAlturaEsquizofrenia('48px');
    }
  };

  // alterar altura de TOC
  const [alturaTOC, setAlturaTOC] = useState('48px');

  const changeHeightTOC = () => {
    if (alturaTOC === '48px') {
      setAlturaTOC('none');
    } else {
      setAlturaTOC('48px');
    }
  };

  // alterar altura de transtorno de transtorno bipolar
  const [alturaTranstornoBipolar, setAlturaTranstornoBipolar] = useState('48px');

  const changeHeightTranstornoBipolar = () => {
    if (alturaTranstornoBipolar === '48px') {
      setAlturaTranstornoBipolar('none');
    } else {
      setAlturaTranstornoBipolar('48px');
    }
  };

  // alterar altura de transtorno de transtorno de estresse
  const [alturaTranstornoEstresse, setAlturaTranstornoEstresse] = useState('48px');

  const changeHeightTranstornoEstresse = () => {
    if (alturaTranstornoEstresse === '48px') {
      setAlturaTranstornoEstresse('none');
    } else {
      setAlturaTranstornoEstresse('48px');
    }
  };

  // alterar altura de transtorno de borderline
  const [alturaBorderline, setAlturaBorderline] = useState('48px');

  const changeHeightBorderline = () => {
    if (alturaBorderline === '48px') {
      setAlturaBorderline('none');
    } else {
      setAlturaBorderline('48px');
    }
  };

  // alterar altura de TDAH
  const [alturaTDAH, setAlturaTDAH] = useState('48px');

  const changeHeightTDAH = () => {
    if (alturaTDAH === '48px') {
      setAlturaTDAH('none');
    } else {
      setAlturaTDAH('48px');
    }
  };

  return (
    <div>
      <Header />
      <div className="condicoesMentaisContent">
        <div className="condicoesMentaisInit">
          <div className="condicoesMentaisInitLeft">
            <h1>Condições mentais</h1>
            <h2>Bem vindo, esta página mostrará diversas informações sobre as condições mentais mais comuns nos dias de hoje, arraste pra baixo para dar uma olhada nessas condições, seus sintomas e seus tratamentos. Lembre-se que cada pessoa pode ter sintomas diferentes e podem precisar de tratamentos diferentes.</h2>
          </div>
          <div className="condicoesMentaisInitRight">
            <img src={imgCondicoesMentais} />
          </div>
        </div>

        <div className="condicaoMental depressao" style={{maxHeight: alturaDepressao}}>
          <h2 onClick={changeHeightDepressao}>Depressão</h2>
          <div>
            A depressão é uma condição médica classificada como transtorno psiquiátrico. Esta condição é caracterizada principalmente por sentimentos persistentes de tristeza, desesperança e desinteresse, além de uma série de outros sintomas, que incluem:
            <ul>
              <li>- Tristeza profunda: Sentimento persistente de tristeza ou vazio.</li>
              <li>- Desesperança: Sensação que as coisas não vão melhorar.</li>
              <li>- Desinteresse: Perda de vontade em fazer atividades que antes eram prazerosas.</li>
              <li>- Fadiga constante: Sensação de cansaço extremo.</li>
              <li>- Alterações no apetite: Perda, aumento, ou mudanças no apetite.</li>
              <li>- Difuculdade de concentração: Problemas de foco ou tomadas de decisões.</li>
              <li>- Insonia ou hipersonia: Dificuldades para dormir ou excesso de sono.</li>
              <li>- Sentimentos de inutilidade: Sentimento de que é um fardo aos outros ou não é bom o suficiente.</li>
              <li>- Pensamentos suicidas: Idealizar ou desejar a morte.</li>
            </ul>
            Para saber o tratamento é ideal consultar um profissional, pois o tratamento da depressão pode variar de acordo com o tipo, gravidade dos sintomas e saúde da pessoa, porém, os principais tratamentos são:
            <ul>
              <li>- Psicoterapia: É a terapia feita com um psicólogo ou psiquiatra que vai servir para explorar as emoções, pensamentos e comportamentos do paciente.</li>
              <li>- Antidepressivos: São medicamentos que restauram neurotransmissores importantes para evitar a depressão, é necessário uma receita médica para adquirir tais medicamentos</li>
              <li>- Atividades físicas: Exercícios diários podem ajudar a melhorar o seu humor geral, melhorando os sintomas da depressão.</li>
              <li>- Relaxamento ou meditação: Essas técnicas ajudam a reduzir o estresse diário e a ansiedade.</li>
            </ul>
            É importante se lembrar que a depressão é uma doença crônica que geralmente requer um tratamento longo com um profissional, se você se enquadra com os sintomas da depressão, busque ajuda profissional para um diagnóstico e tratamentos adequados.
          </div>
        </div>

        <div className="condicaoMental ansiedade" style={{maxHeight: alturaAnsiedade}}>
          <h2 onClick={changeHeightAnsiedade}>Ansiedade</h2>
          <div>
            A ansiedade, pópriamente dita, é a reação normal do corpo à coisas que causam preocupação ou medo, como uma apresentação em público, porém, se a ansiedade é intensa, surge sem motivo aparente e te atrapalha no dia a dia, você pode ter um transtorno de ansiedade, existem diferentes transtornos de ansiedade, como o transtorno de ansiedade generalizada, transtorno de pânico, fobias específicas, entre outros. Alguns dos sintomas mais comuns de um transtorno de ansiedade são:
            <ul>
              <li>- Preocupação excessiva: Sentimento constante de preocupação, mesmo sem motivo específico.</li>
              <li>- Inquietação e tensão muscular: Dificuldade em relaxar o seu próprio corpo.</li>
              <li>- Fadiga e irritabilidade: Cansaço frequente e irritação constante.</li>
              <li>- Dificuldade de concentração: Dificuldade em focar em suas tarefas diárias.</li>
              <li>- Ataques de pânico: Episódios intensos de medo ou desconforto, com sintomas como palpitações, tremores e falta de ar.</li>
              <li>- Medo de ter novos ataques: Preocupação constante em ter outro ataque de ansiedade.</li>
              <li>- Evitação de lugares ou situações: Evitar e ter medo de lugares ou situações onde outros ataques de ansiedade ocorreram anteriormente.</li>
            </ul>
            É importante lembrar que esses sintomas podem variar de pessoa pra pessoa, mas se você acredita que pode ter transtorno de ansiedade ou qualquer outra condição mental séria, é importante buscar uma ajuda profissional para receber um diagnóstico e um tratamento eficaz. Os tratamentos para transtornos de ansiedade podem variar, mas esses são alguns dos mais comuns:
            <ul>
              <li>- Terapia Cognitivo-Comportamental: Ensina estratégias para lidar com a ansiedade, melhora cognitiva, exposição gradual aos causadores da ansiedade e prevenção de respostas.</li>
              <li>- Medicamentos: Alguns medicamentos como antidepressivos e ansiolíticos trabalham no sistema nervoso central, podendo aliviar a ansiedade, melhorar o humor e o funcionamento cerebral.</li>
              <li>- Hábitos saudáveis: Hábitos como técnicas de relaxamento, atividades fisicas regulares e sono adequado podem melhorar o seu corpo, aliviando a ansiedade.</li>
              <li>- Terapias alternativas: algumas terapias alternativas como massagens e consumo de alguns chás podem acalmar o cérebro e melhorar a ansiedade.</li>
            </ul>
            Tanto os sintomas, quanto os tratamento, variam de acordo com as necessidades individuais, é aconselhável consultar um profissional de saúde mental para a avaliação e orientação específica.
          </div>
        </div>

        <div className="condicaoMental esquizofrenia" style={{maxHeight: alturaEsquizofrenia}}>
          <h2 onClick={changeHeightEsquizofrenia}>Esquizofrenia</h2>
          <div>
            A esquizofrenia é um conjunto de transtornos psiquiátricos graves e incapacitantes caracterizado por alterações no pensamento, emoções e comportamento. A esquizofrenia pode ser genética ou causada por alterações nos neurotransmissores, se manifestando entre o final da adolescência e o início da vida adulta. Os sintomas de esquizofrenia são variados, mas alguns dos mais comuns são:
            <ul>
              <li>- Delírios: Crenças vivas em algo que não é real, como a sensação de estar sendo perseguido, traído ou possuir superpoderes.</li>
              <li>- Alucinações: Percepções claras de coisas que não existem, como ouvir vozes ou ter visões.</li>
              <li>- Pensamento desorganizado: Uma desorganização nos pensamentos que causam fala desconexa e sem sentido.</li>
              <li>- Alterações no comportamento: Surtos psicóticos, agressividade, agitação e risco de suicídio.</li>
              <li>- Sintomas negativos: Perda d vontade ou iniciativa, falta de expressão emocional, isolamento social e falta de autocuidado.</li>
            </ul>
            A esquizofrenia geralmente surge de forma gradual, com alterações que aparecem aos poucos, geralmente, é percebio inicialmente por pessoas próximas. O tratamento busca uma melhora na qualidade de vida do indivíduo e geralmente inclui:
            <ul>
              <li>- Medicamentos antipsicóticos: São medicamentos que ajudam a melhorar a qualidade de vida da pessoa.</li>
              <li>- Psicoterapia: É feita por psicólogos ou psiquiatras e buscam a reabilitação e integração social.</li>
              <li>- Técnicas comportamentais: Essas técnicas auxiliam na adaptação a sociedade.</li>
            </ul>
            Esses diagnósticos podem variar de pessoa pra pessoa por diferentes fatores, é aconselhável consultar um profissional de saúde mental caso você acredite que tem esquizofrênia ou qualquer outro transtorno mental para obter um diagnóstico e um tratamento correto.
          </div>
        </div>

        <div className="condicaoMental transtornoObsessivoCompulsivo" style={{maxHeight: alturaTOC}}>
          <h2 onClick={changeHeightTOC}>TOC</h2>
          <div>
            O Transtorno Obsessivo-Compulsivo (TOC) é um distúrbio psiquiátrico de ansiedade caracterizados por pensamentos obsessivos e intrusivos que tendem a se repetir e são frequentemente negativos. Além disso, o TOC causa comportamentos compulsivos e repetitivos, geralemtente relacionado à limpeza ou organização. Os sintomas do TOC podem variar, mas esses são um dos sintomas mais comuns:
            <ul>
              <li>- Preocupação excessiva com limpeza e higiente: Medo intenso de germes, contaminação e sujeira, essas pesssoas podem lavar as mãos repetidas vezes e evitar tocar em objetos considerados sujos.</li>
              <li>- Rituais compulsivos de verificação: Verificar várias vezes se a porta está trancada, luzes desligadas, etc.</li>
              <li>- Pensamentos intrusivos: Esses pensamentos sáo indesejados e são ideias persistentes e perturbadoras que invadem a mente, como pensamentos violentos ou sexuais.</li>
              <li>- Nessecidade de ordem e simetria: Algumas pessoas com TOC sentem compulsão em organização e simetria extrema.</li>
              <li>- Medo excessivo de consequências terriveis: Crença de qua algo terrivel acontecerá sem motivos claros.</li>
            </ul>
            O TOC afeta bastante a qualidade de vida e o tratamento precoce é essencial para que a pessoa com TOC posssa viver bem, alguns dos tratamentos são:
            <ul>
              <li>- Medicamentos antidepressivos: Inibidores seletivos de receptação de serotonina ou clomipramina.</li>
              <li>- Terapia Cognitivo-Comportamental: Exercícios de exposição e prevenção de rituais.</li>
              <li>- Eletroconvulsoterapia: Uma terapia que deseja causar convulsões controladas para reestabelecer o fluxo de neurotransmissores, em casos graves pode ser feito neurocirurgias.</li>
            </ul>
            Lembre-se que os tratamentos variam de pessoa para pessoa e é necessário uma consulta com um profissional de saúde mental para receber um diagnóstico correto e iniciar algum tipo de tratamento.
          </div>
        </div>

        <div className="condicaoMental transtornoBipolar" style={{maxHeight: alturaTranstornoBipolar}}>
          <h2 onClick={changeHeightTranstornoBipolar}>Transtorno bipolar</h2>
          <div>
            O transtorno bipolar é um disturbio psiquiátrico que provoca alterações no comportamento que levam a pessoa a oscilar entre momentos de euforia e depressão repentinamente. Essas oscilações podem variar em frequência e intensidade de acordo com cada pessoa. O transtorno bipolar geralmente começa a exibir deus sintomas na adolescência ou na vida adulta, pode ser causado por genética, desequilibrio hormonal, fisiologia cerebral, estresse e experiências traumáticas. Existem dois tipose de transtorno bipolar, sendo eles:
            <ul>
              <li>- Transtorno bipolar do tipo 1: Ciclos de oscilação e humor mais definido, geralmente alternam entre exaltação do humor e depressão profunda.</li>
              <li>- Transtorno bipolar do tipo 2: As oscilações são mais sutis, normalmente não atingem a exaltação de humor e são mais frequentes os episódios de depressão.</li>
            </ul>
            Os sintomas de transtornos bipolares podem variar bastante, mas alguns dos principais sintomas de transtornos bipolares são:
            <ul>
              <li>- Euforia: Sentir-se eufórico e com necessidade de fazer mais atividades diárias para gastar o excesso de energia</li>
              <li>- Nervosismo e ansiedade: Podem causar dificuldades para dormir, e falas muito rápidas sobre vários assuntos diferentes.</li>
              <li>- Tristeza e depressão: Sentimento de tristeza sem motivo aparente, perda de interesse em atividades que antes eram prazerozas e memória fraca ou perda de energia.</li>
              <li>- Pensamentos suicidas: Desejo de morte e sentimentos de desesperança, vazio e impotência.</li>
              <li>- Alterações de apetite e peso: A perda ou ganho de peso e perda do apetite.</li>
            </ul>
            É importante saber que o transtorno bipolar é uma condição séria e é muito importante procurar um profissional para saber o tratamento adequado para ter uma melhora na qualidade de vida e estabilizar os sintomas.
          </div>
        </div>

        <div className="condicaoMental TranstornoDeEstresse" style={{maxHeight: alturaTranstornoEstresse}}>
          <h2 onClick={changeHeightTranstornoEstresse}>Transtorno de estresse</h2>
          <div>
            O transtorno de estresse pode ser de dois tipos, o Transtorno de Estresse Agudo (TEA) ou o Transtorno de Estresse Pós-Traumático. O Transtorno de Estresse Agudo é uma reação intensa e desagradável que vem após um acontecimento extremamente traumático e dura geralmente menos de um mês, porém, os sintomas podem persistir e nesse caso a pessoa será diagnosticada com Transtorno de Estresse Pós-Traumático e precisará de uma ajuda profissional para buscar um tratamento adequado. Os sintomas desses transtornos de estresse podem ser:
            <ul>
              <li>- Memórias angustiantes incontroláveis sobre o evento.</li>
              <li>- Sonhos recorrentes sobre o evento.</li>
              <li>- Sensação de que esse evento acontecerá novamente.</li>
              <li>- Sentimentos de angústia quando algo lembra o evento.</li>
              <li>- Incapacidade persistente de sentir emoções positicas.</li>
              <li>- Sensação de que a realidade está alterada.</li>
              <li>- Perda da memória de uma parte importante do evento.</li>
            </ul>
            Caso você acredita que possui um transtorno de estresse é aconselhável buscar um profissional de saúde mental para iniciar o tratamento o quanto antes, esses tratamentos costumam incluir terapia cognitivo comportamental e talvez o uso de medicamentos como antidepressivos. Lembre-se que é importante consultar um profissional para saber o seu diagnóstico e assim iniciar um tratamento correto.
          </div>
        </div>
        
        <div className="condicaoMental borderline" style={{maxHeight: alturaBorderline}}>
          <h2 onClick={changeHeightBorderline}>Borderline</h2>
          <div>
            O Transtorno de Personalidade Borderline (TPB) é um transtorno de saúde mental que pode causar uma forte instabilidade comportamental nas relaões interpessoais, na autoimagem e afetos. A pessoa com transtrono de personalidade borderline podem apresentar impulsividade, visão distoricida de si mesmo e dos outros, medo de abandono e reações agressivas e intenças. Alguns dos sintomas mais comuns podem ser:
            <ul>
              <li>- Mudanças de humor: Podem durar menos de duas horas ou até mesmo dias, variando entre momentos de ira, tristeza e ansiedade.</li>  
              <li>- Identidade instável: Com mudanças rápidas de valores, metas e opiniões sobre carreira profissional, identidade sexual e tipos de amigos.</li>
              <li>- Medo de abandono: Um medo constante de ser abandonado pelo parceiro, amigos ou familiares.</li>
              <li>- Relacionamentos instáveis e intensos: Tem sentimentos que variam rapidamente de idealização da outra pessoa à desvalorização.</li>
              <li>- Impulsividade: Envolvendo-se em jogos de apostas, gasto descontrolado de dinheiro, consumo exagerado de comida, abuso de álcool, drogas e atividades irresponsáveis.</li>
            </ul> 
            Se você tem sintomas como esses é extremamente indicado que você procure ajuda com um profissional de saúde mental para receber o diagnóstico e o tratamento correto, alguns dos principais tratamentos para essa condição são:
            <ul>
              <li>- Psicoterapia: Esse é o principal método de tratamento para o TPB. A terapia cognitivo-comportamental, a terapia dialética comportamental e a terapia focada na mentalização são algumas das abordagens comumente usadas.</li>
              <li>- Medicamentos: Não existem medicamentos específicos para o TPB, porém alguns medicamentos podem amenizar os sintomas, geralmente são usados os estabilizadores de humor e antidepressivos para controlar os sentimentos de tristeza e ansiedade.</li>
              <li>- Terapia de grupo: Em alguns casos pode ser útil, a pessoa pode aprender habilidades sociais e ganhar apoio de outras pessoas que passam por experiências semelhantes.</li>
            </ul>
            Sempre é importante buscar ajuda de um profissional de saúde mental caso sejam apresentados sintomas dessa ou de outra condição mental séria, os profissionais podem oferecer diagnósticos e tratamentos adequados.
          </div>
        </div>

        <div className="condicaoMental tdah" style={{maxHeight: alturaTDAH}}>
          <h2 onClick={changeHeightTDAH}>TDAH</h2>
          <div>
            O Transtorno de Déficit de Atenção com Hiperatividade (TDAH) é uma condição do neurodesenvolvimento que afeta a formação do cérebro e do sistema nervoso central. O TDAH é caracterizado por sintomas que envolvem desatenção, hiperatividade e impulsividade em nível elevado, com prejuízos em diferentes aspectos da vida, como as relações sociais e os desempenhos cognitivo, escolar e profissional. Alguns dos principais sintomas de TDAH são:
            <ul>
              <li>- Desatentação: Dificuldades em manter a concentração e distração fácil.</li>
              <li>- Hiperatividade: Inquietação e falar excessivamente.</li>
              <li>- Impulsividade: Agir descontroladamente de maneira impulssiva.</li>
              <li>- Desconcentração: A pessoa não consegue focar em uma única tarefa ou ficar parado por um grande tempo.</li>
            </ul>
            É importante buscar um profissional de saúde mental caso você apresente algum desses sintomas para poder ter certeza de seu diagnóstico e buscar o tratamento ideal. Aqui estão alguns dos tratamentos mais comuns:
            <ul>
              <li>- Medicação: São usadas medicações com estimulantes para controlar os sintomas.</li>
              <li>- Psicoterapia comportamental: Ajuda a lidar com os sintomas e melhorar o comportamento.</li>
            </ul>
            É importante lembrar que nem todas as pessoas sentem os mesmos sintomas e é necessário a consulta a um profissional de saúde mental para ter certeza do diagnóstico e iniciar um tratamento.
          </div>
        </div>

        <hr />

        <div className="condicoesMentaisEnd">
          <h2>Lembre-se que essas condições mentais podem variar de sintomas e tratamentos de pessoa para pessoa e essas explicações são apenas explicações gerais sobre cada condição, para um diagnóstico correto e um bom tratamento é necessário a consulta com um psicólogo ou psiquiatra.</h2>
          <button onClick={returnToInit}>Página inicial</button>
        </div>
      </div>
    </div>
  )
}

export default CondicoesMentais
