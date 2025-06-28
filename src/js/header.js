const navbar = document.getElementById("navbar");
const drop = document.getElementById("dropProjects");
const trigger = document.getElementById("nav-trigger");
const logo = document.querySelector('.logo-home');

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      navbar.classList.remove("position-relative", "bottom-0");
      drop.classList.remove("dropup")
      logo.style.transform = 'translateY(0%)';
      logo.style.height = '50px';
      drop.classList.add("dropdown")
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
      drop.classList.remove("dropdown")
      logo.style.transform = 'translateY(-45%)';
      logo.style.height = '70px';
      drop.classList.add("dropup")
      navbar.classList.add("position-relative", "bottom-0");
    }
  },
  {
    threshold: 0.5, // ativa quando 50% do trigger estiver visível
    rootMargin: "-10% 0px 0px 0px", // move a "linha de ativação" para o meio da viewport
  }
);
if(window.innerWidth >= 600){
  observer.observe(trigger);
  
}else{
  drop.classList.remove("dropup")
  drop.classList.add("dropdown")
}
