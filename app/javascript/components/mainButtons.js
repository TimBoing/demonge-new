const mainButtons = () => {
  const mainButtons = document.querySelectorAll('.main-button');
  if(!mainButtons) return;

  mainButtons.forEach((button) => {

    button.addEventListener("mouseover", (event) => {
      const goldenDiv = button.querySelector('.golden-div');
      goldenDiv.style.width = "100%";
    });

    button.addEventListener("mouseout", (event) => {
      if(!button.classList.contains("active")){
        const goldenDiv = button.querySelector('.golden-div');
        goldenDiv.style.width = "0%";
      }

    });

  });
}

export{mainButtons}
