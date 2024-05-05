import React, {useState, useEffect} from 'react'

import { getAuth, onAuthStateChanged } from "firebase/auth";

import './myAccount.css'

const MyAccount = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName);
      }
    });

    // Limpar a inscrição quando o componente for desmontado
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Olá, {username}</h1>
    </div>
  )
}

export default MyAccount
