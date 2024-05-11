import React, {useState} from 'react'
import emailjs from '@emailjs/browser'

import Header from '../../elements/Header'

import './support.css'

const Support = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('preencha todos os campos');
      return;
    };

    alert("email enviado com sucesso")

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_USER_ID)
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log("ERRO: ", err)
    })
  }

  return (
    <div>
        <Header />
        <div className="supportContent">
            <div className="leftBoxSupport">
              <form className="formEmail" onSubmit={sendEmail}>
                <input 
                  className="input"
                  type="text"
                  placeholder="Digite seu nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
        
                <input 
                  className="input"
                  type="text"
                  placeholder="Digite seu email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <textarea 
                  className="textarea"
                  placeholder="Digite sua mensagem..."
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />

                <input className="buttonSubmit" type="submit" value="Enviar" />

                <p className='contactEmail'>Email para contato: mindcontact22@gmail.com</p>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Support
