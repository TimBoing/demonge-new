import brut_src from '../../assets/images/brut_transp.png'
import rose_src from '../../assets/images/rose_transp.png'
import blanc_src from '../../assets/images/blanc_transp.png'

const switchIndexesChampagnes = () => {

  const mobileDiv = document.querySelector("#mobile-div-champagnes");

  if(!mobileDiv) return;
  const brutSection = document.querySelector("#brut-section");
  const roseSection = document.querySelector("#rose-section");
  const blancSection = document.querySelector("#blanc-section");

  let navBarOffset = window.innerHeight / 10;
  let brutOff = brutSection.offsetTop;
  let roseOff = roseSection.offsetTop;

  let position = "brut";

  const switchIndexes = () => {

    switch (position) {
      case "brut":
        mobileDiv.style.backgroundImage = `url(${brut_src})`;

        break;
      case "rose":
        mobileDiv.style.backgroundImage = `url(${rose_src})`;

        break;
      case "blanc":
        mobileDiv.style.backgroundImage = `url(${blanc_src})`;
        break;
    }
  }

  // Besoin de ca pour savoir où je suis
  window.addEventListener("resize", (e)=> {
    navBarOffset = window.innerHeight / 10;
    brutOff = brutSection.offsetTop;
    roseOff = roseSection.offsetTop;

  });

  window.addEventListener('scroll', (e) => {

    let scrollLevel = window.scrollY + navBarOffset;

    if(scrollLevel >= 0 && scrollLevel < brutOff){
      position = "brut";
      switchIndexes();
    }else if(scrollLevel >= brutOff && scrollLevel < roseOff){
      position = "rose";
      switchIndexes();
    }else if(scrollLevel >= roseOff){
      position = "blanc";
      switchIndexes();
    }
  });

    switchIndexes();
}

export{switchIndexesChampagnes};

