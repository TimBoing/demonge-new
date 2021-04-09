import brut_src from '../../assets/images/brut_transp.png'
import rose_src from '../../assets/images/rose_transp.png'
import blanc_src from '../../assets/images/blanc_transp.png'

const switchIndexes = () => {

  const brutSection = document.querySelector("#brut-section .bottle-description");

  if(!brutSection) return;
  console.log("doing it");
  const roseSection = document.querySelector("#rose-section .bottle-description");
  const blancSection = document.querySelector("#blanc-section .bottle-description");

  const bImages = document.querySelectorAll(".bottle-image");

  let brutOff = brutSection.offsetTop;
  let roseOff = roseSection.offsetTop;
  let blancOff = blancSection.offsetTop;

  let position = "brut";

  const mobileDiv = document.querySelector("#mobile-div-champagnes");

  const switchIndexes = () => {

    switch (position) {
      case "brut":
        mobileDiv.style.backgroundImage = `url(${brut_src})`;
        // bImages.forEach((im) => {
        //   if(im == bImages[0] ){
        //     im.classList.add("active")
        //   }else{
        //     im.classList.remove("active");
        //   }
        // });
        break;
      case "rose":
        mobileDiv.style.backgroundImage = `url(${rose_src})`;
        // bImages.forEach((im) => {
        //   if(im == bImages[1] ){
        //     im.classList.add("active")
        //   }else{
        //     im.classList.remove("active");
        //   }
        // });

        break;
      case "blanc":
        mobileDiv.style.backgroundImage = `url(${blanc_src})`;
        // bImages.forEach((im) => {
        //   if(im == bImages[2] ){
        //     im.classList.add("active")
        //   }else{
        //     im.classList.remove("active");
        //   }
        // });
        break;
    }
  }

  // Besoin de ca pour savoir où je suis
  window.addEventListener("resize", (e)=> {
    brutOff = brutSection.offsetTop;
    roseOff = roseSection.offsetTop;
    blancOff = blancSection.offsetTop;

  });

  window.addEventListener('scroll', (e) => {

    let scrollLevel = window.scrollY;

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

export{switchIndexes};

