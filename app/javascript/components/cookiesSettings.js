// import { loadCookieBar } from '../utils/cookies';

const cookiesSettings = () => {
  const cookiesS = document.querySelector("#cookies-settings");
  if(!cookiesS) return;

  cookiesS.addEventListener('click', (e) => {
    Cookies.remove('allow_cookies');
    window.location.reload();
    // loadCookieBar();
  });
}

export{cookiesSettings}
