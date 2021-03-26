const sideNav = () => {
  const burger = document.getElementById('burger-menu');
  if(!burger) return;
  const sideNav = document.getElementById('tim-sidenav');

  burger.addEventListener('click', (event) => {
    if(sideNav.style.width !== "80%"){
      sideNav.style.width = '80%';
    }else{
      sideNav.style.width = '0';
    }
  });

}

export{sideNav};
