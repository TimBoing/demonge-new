class CookieBar {

  constructor() {
    this.cookiesBar = document.getElementById('cookies-bar');
  }

  init() {
    if (this.cookiesAllowed()) {
      this.appendGACode();
    }

    this.addButtonBehaviors();
  }

  cookiesAllowed() {
    return Cookies.get('allow_cookies') === 'yes';
  }

  addButtonBehaviors() {
    if (!this.cookiesBar) {
      return;
    }

    this.cookiesBar.querySelector('#accept-cookies').addEventListener('click', () => this.allowCookies(true));
    this.cookiesBar.querySelector('#reject-cookies').addEventListener('click', () => this.allowCookies(false));
  }



  appendGACode() {
    // console.log("je mets le code Google Analytics");
    const ga = "console.log('bonjour');"
    // const ga = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){" +
    //   "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o)," +
    //   "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)" +
    //   "})(window,document,'script','//www.google-analytics.com/analytics.js','ga');" +
    //   "ga('create', 'UA-XXXXX-Y', 'auto');" + "ga('send', 'pageview');";

    document.getElementById("ga-code").innerHTML =  ga ;
  }

  gaCodePresent(){
    // console.log("Je regarde si le code Google Analytics est présent");
    const gaCode = document.getElementById('ga-code');
    // doit retourner true ou false selon la présence du code
    return !gaCode.innerHTML == "";

  }

  removeGACode(){
    // console.log("j´enlève le code google analytics");
    document.getElementById('ga-code').innerHTML = "";

  }

  allowCookies(allow) {
    if (allow) {

      Cookies.set('allow_cookies', 'yes', {
        expires: 180
      });

      if(!this.gaCodePresent()){this.appendGACode();}

    } else {

      Cookies.set('allow_cookies', 'no', {
        expires: 180
      });

      if(this.gaCodePresent()){this.removeGACode();}
    }

    this.cookiesBar.addEventListener('transitionend', (e) => this.cookiesBar.style.display = "none" );
    this.cookiesBar.style.bottom = "-100vh";
    // this.cookiesBar.classList.add('hidden');
  }
}

const loadCookieBar = () => {
  window.onload = function() {
    const cookieBar = new CookieBar();

    cookieBar.init();
  }
}

export{loadCookieBar};


