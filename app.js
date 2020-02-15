//menu Slide
const navSlide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__links li");

    menu.addEventListener("click", () => {
    //toggle menu
    nav.classList.toggle("nav__active");

    //animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
        }
    });
    //menu animation
    menu.classList.toggle("toggle");
  });

}
navSlide();
