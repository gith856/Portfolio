// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('active');
// }


const navLinks= document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () =>{
    //toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});


 const  typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer','Problem Solving'],
    typeSpeed: 80,
    backSpeed:80,
    backDelay:1200,
    loop:true
  });
// circles-skill//////////
  const circles = document.querySelectorAll('.circle');
  circles.forEach(elem =>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 /dots;

    for( let i = 0; i < dots; i++){
        points += '<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>';
    }
    elem.innerHtml = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent; i++){
      pointsMarked[i].classList.add('marked');
    }
  })

  // var mixer = mixitup('.portfolio-gallary')