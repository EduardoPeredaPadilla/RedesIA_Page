


let ps_Img1;
let ps_Img2;
let ps_Img3;
let ps_Img4;
let ps_Img5;
let ps_Img6;
let ps_Img7;
let ps_Img8;

let isScrolling;

// document.addEventListener('DOMContentLoaded', function() {

//   const liTest = document.querySelector('.nav-link');
//   console.log(liTest);


//   const links = document.querySelectorAll('nav-link');
//   console.log(links);

//   links.forEach(link => {
//       link.addEventListener('click', function(event) {
//           event.preventDefault(); // Previene el comportamiento por defecto del enlace
//           links.forEach(l => l.classList.remove('activeOp')); // Remueve la clase active de todos los enlaces
//           link.classList.add('activeOp'); // Agrega la clase active al enlace clicado
//       });
//   });
// });

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;
  const header = document.getElementById('header-container')
  console.log(currentScrollPos);
  
  const heading = document.getElementById('myHeading');
  const heading2 = document.getElementById('myHeading2');
  const heading3 = document.getElementById('myHeading3');
    
    // Añadir la clase 'scrolled' cuando se hace scroll
    heading.classList.add('scrolled');
    heading2.classList.add('scrolled2');
    heading3.classList.add('scrolled3');
    
    // Borrar el temporizador anterior si existe
    window.clearTimeout(isScrolling);

    // Configurar un nuevo temporizador para quitar la clase 'scrolled' cuando se detenga el scroll
    isScrolling = setTimeout(function() {
        heading.classList.remove('scrolled');
        heading2.classList.remove('scrolled2');
        heading3.classList.remove('scrolled3');
    }, 300); // Ajusta el tiempo según tu necesidad, 200ms es un buen punto de partida


  if (currentScrollPos >1600) {

    ps_Img1 = document.querySelector('#pd-b1-img1');
    ps_Img2 = document.querySelector('#pd-b1-img2');
    ps_Img3 = document.querySelector('#pd-b1-img3');
    ps_Img4 = document.querySelector('#pd-b1-img4');
    ps_Img5 = document.querySelector('#pd-b2-img1');
    ps_Img6 = document.querySelector('#pd-b2-img2');
    ps_Img7 = document.querySelector('#pd-b2-img3');
    ps_Img8 = document.querySelector('#pd-b2-img4');

    console.log(ps_Img1);
    ps_Img1.addEventListener("mouseover", () => {
      ps_Img1.classList.remove('pd-b1-img1');
      ps_Img1.classList.add('pd-b1-img1-hover');
    });
  
    ps_Img1.addEventListener( 'mouseleave', () => {
      ps_Img1.classList.remove('pd-b1-img1-hover');
      ps_Img1.classList.add('pd-b1-img1');
    });
  
    
    ps_Img2.addEventListener("mouseover", () => {
      ps_Img2.classList.remove('pd-b1-img2');
      ps_Img2.classList.add('pd-b1-img2-hover');
    });
  
    ps_Img2.addEventListener( 'mouseleave', () => {
      ps_Img2.classList.remove('pd-b1-img2-hover');
      ps_Img2.classList.add('pd-b1-img2');
    });
  
  
    ps_Img3.addEventListener("mouseover", () => {
      ps_Img3.classList.remove('pd-b1-img3');
      ps_Img3.classList.add('pd-b1-img3-hover');
    });
  
    ps_Img3.addEventListener( 'mouseleave', () => {
      ps_Img3.classList.remove('pd-b1-img3-hover');
      ps_Img3.classList.add('pd-b1-img3');
    });
    

    ps_Img4.addEventListener("mouseover", () => {
      ps_Img4.classList.remove('pd-b1-img4');
      ps_Img4.classList.add('pd-b1-img4-hover');
    });
  
    ps_Img4.addEventListener( 'mouseleave', () => {
      ps_Img4.classList.remove('pd-b1-img4-hover');
      ps_Img4.classList.add('pd-b1-img4');
    });


    ps_Img5.addEventListener("mouseover", () => {
      ps_Img5.classList.remove('pd-b2-img1');
      ps_Img5.classList.add('pd-b2-img1-hover');
    });
  
    ps_Img5.addEventListener( 'mouseleave', () => {
      ps_Img5.classList.remove('pd-b2-img1-hover');
      ps_Img5.classList.add('pd-b2-img1');
    });


    ps_Img6.addEventListener("mouseover", () => {
      ps_Img6.classList.remove('pd-b2-img2');
      ps_Img6.classList.add('pd-b2-img2-hover');
    });
  
    ps_Img6.addEventListener( 'mouseleave', () => {
      ps_Img6.classList.remove('pd-b2-img2-hover');
      ps_Img6.classList.add('pd-b2-img2');
    });

    ps_Img7.addEventListener("mouseover", () => {
      ps_Img7.classList.remove('pd-b2-img3');
      ps_Img7.classList.add('pd-b2-img3-hover');
    });
  
    ps_Img7.addEventListener( 'mouseleave', () => {
      ps_Img7.classList.remove('pd-b2-img3-hover');
      ps_Img7.classList.add('pd-b2-img3');
    });

    ps_Img8.addEventListener("mouseover", () => {
      ps_Img8.classList.remove('pd-b2-img4');
      ps_Img8.classList.add('pd-b2-img4-hover');
    });
  
    ps_Img8.addEventListener( 'mouseleave', () => {
      ps_Img8.classList.remove('pd-b2-img4-hover');
      ps_Img8.classList.add('pd-b2-img4');
    });
    
  }

  // if (currentScrollPos >2740 && currentScrollPos <3590) {
  //   header.classList.add('bc-grey');
  // } else {
  //   header.classList.remove('bc-grey');
  // }

  // if (currentScrollPos > 0) {
  //     header.classList.add("scrolled");
  //     // rowUp.classList.remove("main-rup-hide");
  // } else {
  //     header.classList.remove("scrolled");
  //     // rowUp.classList.add("main-rup-hide");
  // }

  prevScrollPos = currentScrollPos;
});

