import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthVerification = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        alert('Para acessar esta página é necessário que você esteja logado.')
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <div>
      {user && children}
    </div>
  )
}

export default AuthVerification;