import { useEffect, useState } from "react";

export const usePage = () => {

  const [activeLink, setActiveLink] = useState(null);

  const [viewModal, setViewModal] = useState(false);

  const body = document.getElementById('body');
  // const ex_container1 = document.querySelector('.c-ex2-2-1');


  const handleClick = (event, goTo='') => {
    // Prevenir el comportamiento predeterminado del enlace
    // event.preventDefault();
    const target = event.target;
    console.log(target);
    console.log(goTo);
    const header = document.getElementById('header-container')
    // Si el target no es un enlace, salir
    // if (!target.classList.contains('nav-link')) return;

    // Remover la clase active de todos los enlaces
    let linkToSet;

    document.querySelectorAll('.nav-link').forEach((link) => {
      console.log(link);
      console.log(link.textContent);
      console.log(goTo);
      link.classList.remove('activeOp');

      if (goTo !== '') {
        if (link.textContent == goTo) {
          console.log("Es igual");
          link.classList.add('activeOp');
          console.log(link);
          linkToSet = link;
          if (goTo == 'Productos y Servicios') {
            body.classList.add('view-scroll');        
            } else {
            body.classList.remove('view-scroll');
          }
          setActiveLink(link.getAttribute('href'));
          } else {
            console.log("No es igual");          
        }
      }


    });

    console.log(linkToSet);

    if (goTo == '') {
      target.classList.add('activeOp');
      console.log(target.textContent);
      if (target.textContent == 'Productos y Servicios') {
        body.classList.add('view-scroll');        
        } else {
        body.classList.remove('view-scroll');
      }
      setActiveLink(target.getAttribute('href'));
    }


  };

  const scrollControl = () => {
    console.log(viewModal);
    if (viewModal) {
      body.classList.remove('view-scroll');
      body.classList.add('not-scroll');
      console.log(body);
      console.log(body.classList);
      } else {
        body.classList.remove('not-scroll');
        body.classList.add('view-scroll');
        console.log(body);
        console.log(body.classList);
    }
  };

  const exMapControl = () => {

  };

  useEffect(() => {

  

    // Agregar el event listener a la nav-bar
    const navBar = document.querySelector('.nav-bar');
    navBar.addEventListener('click', handleClick);

    const ex_container1 = document.querySelector('#c-ex2-2-1');
    const ex_container2 = document.querySelector('#c-ex2-2-2');
    const ex_container3 = document.querySelector('#c-ex2-2-3');
    const exMap_container1 = document.querySelector('#c-ex2-1');

    ex_container1.addEventListener("mouseover", () => {
      exMap_container1.classList.add('c-ex-proyectos');
      // exMap_container1.classList.remove('c-ex2-1');
    });

    ex_container1.addEventListener("mouseleave", () => {
      exMap_container1.classList.remove('c-ex-proyectos');
      // exMap_container1.classList.remove('c-ex2-1');
    });

    ex_container2.addEventListener("mouseover", () => {
      exMap_container1.classList.add('c-ex-desarrollo');
      // exMap_container1.classList.remove('c-ex2-1');
    });

    ex_container2.addEventListener("mouseleave", () => {
      exMap_container1.classList.remove('c-ex-desarrollo');
      // exMap_container1.classList.remove('c-ex2-1');
    });


    ex_container3.addEventListener("mouseover", () => {
      exMap_container1.classList.add('c-ex-cursos');
      // exMap_container1.classList.remove('c-ex2-1');
    });

    ex_container3.addEventListener("mouseleave", () => {
      exMap_container1.classList.remove('c-ex-cursos');
      // exMap_container1.classList.remove('c-ex2-1');
    });



    // Limpiar el event listener al desmontar el componente




    return () => {
      navBar.removeEventListener('click', handleClick);
    };
  }, []);

  return {
    activeLink,
    setActiveLink,
    handleClick,
    viewModal, 
    setViewModal,
    scrollControl
  }
}

