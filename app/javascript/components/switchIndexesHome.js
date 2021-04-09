import land_src from '../../assets/images/landscape1.jpg'
import lake_src from '../../assets/images/lake.jpg'
import rais_src from '../../assets/images/raisin.jpg'

const switchIndexesHome = () => {

  const mobileDiv = document.querySelector("#mobile-div-home");

  if(!mobileDiv) return;
  const familySection = document.querySelector("#family-section");
  const champagneSection = document.querySelector("#champagne-section");

  let navBarOffset = window.innerHeight / 10;
  let famOff = familySection.offsetTop;
  let champOff = champagneSection.offsetTop;

  console.log(champOff);
  let position = "land";

  const switchIndexes = () => {
    console.log(position);
    switch (position) {
      case "land":
        mobileDiv.style.height = "50vh";
        mobileDiv.style.backgroundImage = `url(${land_src})`;

        break;
      case "lake":
        mobileDiv.style.height = "100vh";
        mobileDiv.style.backgroundImage = `url(${lake_src})`;

        break;
      case "rais":
        mobileDiv.style.height = "100vh";
        mobileDiv.style.backgroundImage = `url(${rais_src})`;
        break;
    }
  }

  // Besoin de ca pour savoir où je suis
  window.addEventListener("resize", (e)=> {
    navBarOffset = window.innerHeight / 10;
    famOff = familySection.offsetTop;
    champOff = champagneSection.offsetTop;


  });

  window.addEventListener('scroll', (e) => {

    let scrollLevel = window.scrollY + navBarOffset;
    famOff = familySection.offsetTop; // Obligé de recalculer après redimensionnement
    champOff = champagneSection.offsetTop;

    if(scrollLevel >= 0 && scrollLevel < famOff){
      position = "land";
      switchIndexes();
    }else if(scrollLevel >= famOff && scrollLevel < champOff){
      position = "lake";
      switchIndexes();
    }else if(scrollLevel >= champOff){
      position = "rais";
      switchIndexes();
    }
  });

    switchIndexes();
}

export{switchIndexesHome};

