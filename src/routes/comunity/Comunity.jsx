import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";
import { auth, db } from '../firebase';
import Header from '../../elements/Header'

import './comunity.css';

const Comunity = () => {
  const [formValue, setFormValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [shuffledMessages, setShuffledMessages] = useState([]);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [numMessagesToShow, setNumMessagesToShow] = useState(10);
  const [isAddedMessages, setIsAddedMessages] = useState(false);
  const [showImportantMessage, setShowImportantMessage] = useState(true);
  const messagesRef = collection(db, 'messages');
  const q = query(messagesRef, orderBy('createdAt'));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, snapshot => {
    let messages = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setMessages(messages);
    if (!isPageLoaded) {
      messages.sort(() => Math.random() - 0.5);
      setShuffledMessages(messages.slice(0, numMessagesToShow));
      setIsPageLoaded(true);
    }
  });
  return () => unsubscribe();
  }, [q, isPageLoaded, numMessagesToShow]);

  useEffect(() => {
    if (messages.length > 0) {
      if (!isAddedMessages) {
        let shuffled = [...messages];
        shuffled.sort(() => Math.random() - 0.5);
        setShuffledMessages(shuffled.slice(0, numMessagesToShow));
      }
      setIsAddedMessages(true);
    }
  }, [messages, numMessagesToShow, isAddedMessages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName } = auth.currentUser;
    const newMessage = {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      displayName
    };
    await addDoc(messagesRef, newMessage);
    setShuffledMessages([newMessage, ...shuffledMessages]);
    setFormValue('');
  };

  const loadMoreMessages = (e) => {
    e.preventDefault();
    setNumMessagesToShow(numMessagesToShow + 10);
    setIsAddedMessages(false)
  };

  const closeImportantMessage = () => {
    setShowImportantMessage(false);
  }

  return (
    <div>
      <Header />
      <main className='messagesBox'>
        {shuffledMessages && shuffledMessages.map(msg => <p key={msg.id} className='message'><b>{msg.displayName}:</b> <br /> {msg.text}</p>)}
        <button onClick={loadMoreMessages} className='loadMoreMessages'>Carregar novas mensagens</button>
      </main>
      <form onSubmit={sendMessage} className="messageForm">
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} type="text" className='textMessageInput' placeholder='O que você está pensando?' />
        <input type="submit" value="Enviar" className='comunitySubmitForm' />
      </form>
      <div className="importantMessageComunity" style={{display: showImportantMessage ? 'inline' : 'none'}}>
        <h1>Importante!</h1>
        <p>Bem vindo à comunidade! Esta pagina prioriza o respeito entre os usuários, então por favor, não escreva textos indecentes ou desrespeitosos. Até o momento tempos possibilidades limitadas nessa página e estamos trabalhando para a melhorar isso, a adição de novas funcionalidades como uma pesquisa de usuários e mensagens exigiria uma verba maior, por isso o processo de adição dessas funcionalidades pode ser demorado, além disso devido ao limite de dados que a página pode ler e receber, pode ser que você eventualmente tenha problemas de instabilidade e problemas em ver ou enviar mensagens, obrigado pela compreensão e esperamos que esta página te ajude. 😊</p>
        <button className='btnCloseImportantMessageComunity' onClick={closeImportantMessage}>Fechar</button>
      </div>
    </div>
  )
}

export default Comunity;
