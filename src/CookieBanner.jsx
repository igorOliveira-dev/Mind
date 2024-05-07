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

  const recuseCookies = () => {
    setShowBanner(false);
  }

  return (
    showBanner && (
      <div className='cookieBanner'>
        Este site utiliza cookies para melhorar sua experiência. Se você não aceitar os cookies pode ser que algumas funcionalidades desse site não funcionem corretamente. Além disso, este site ainda está em desenvolvimento, portanto, não está 100% pronto para o uso e você pode enfrentar problemas.
        <div className="cookiesBtn">
          <button onClick={acceptCookies} className='btnCookies'>Aceitar todos os cookies</button>
          <button onClick={recuseCookies} className='btnCookies'>Recusar cookies</button>
        </div>
      </div>
    )
  );
}

export default CookieBanner;