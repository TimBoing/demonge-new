import { fetchWithToken } from "../utils/fetchWithToken";

const firstVisit = () => {

  const enterBtn = document.querySelector('#enter-btn');
  if(!enterBtn) return;
  const cancelBtn = document.querySelector('#cancel-btn');
  const modal = document.querySelector('#first-visit-modal');
  const modalContent = modal.querySelector('#first-visit-modal-content');
  const bienvenue = modal.querySelector('#bienvenue');


  const updateCookies = () => {
    fetchWithToken("/update_cookies", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },

      })
        .then(response => response.json())
        .then((data) => {
          console.log(data);
        });
  }


  const launchEnterAnimation = (message) => {

    enterBtn.innerText = "";
    enterBtn.style.transition = "all 3s";
    enterBtn.style.transform = "scale(100)";
    bienvenue.innerText = message;
    bienvenue.style.transition = "all 1s";
    bienvenue.style.width = "100%";

    bienvenue.addEventListener('transitionend', (e) => {

      modal.style.backgroundColor = "transparent";

      modal.addEventListener('transitionend', (e) => {

        if(message == "AU REVOIR..."){
          window.location.replace("https://fr.wikipedia.org/wiki/Eau");
        }else{
          modal.classList.remove("active");
        }

      });
    });

  }


  const enterWebsite = (e) => {
    launchEnterAnimation("BIENVENUE");
    updateCookies();
  }

  const exitWebsite = (e) => {

    launchEnterAnimation("AU REVOIR...");

  }

  enterBtn.addEventListener('click', (e) => enterWebsite(e));
  cancelBtn.addEventListener('click', (e) => exitWebsite(e));
}

export{firstVisit};
