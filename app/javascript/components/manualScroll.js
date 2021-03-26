const manualScroll = () => {
  console.log("yo");

  const imDiv = document.querySelector(".image-div-test");
  let imgOffs = imDiv.offsetTop;

  imDiv.style.backgroundPosition = `50% calc(50% + ${window.scrollY - imgOffs}px)`;

  window.addEventListener('scroll', (e) => {
    console.log(window.scrollY);
    imDiv.style.backgroundPosition = `50% calc(50% + ${window.scrollY - imgOffs}px)`;
  });
}

export{manualScroll};
