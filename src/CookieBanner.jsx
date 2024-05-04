import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import './cookie.css'

function CookieBanner() {
  const [cookies, setCookie] = useCookies(['userAcceptedCookies']);
  const [showBanner, setShowBanner] = useState(!cookies.userAcceptedCookies);

  const acceptCookies = () => {
    setCookie('userAcceptedCookies', true, { path: '/' });
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className='cookieBanner'>
        Este site utiliza cookies para melhorar sua experiência. Se você não aceitar os cookies pode ser que algumas funcionalidades desse site não funcionem corretamente.
        <button onClick={acceptCookies} className='btnAceptCookies'>Aceitar todos os cookies</button>
      </div>
    )
  );
}

export default CookieBanner;