import { usePage } from "../hooks/usePage";

export const Inicio = () => {

  // const {activeLink, setActiveLink} = usePage();
  const {handleClick} = usePage();

  
  // console.log(activeLink);

  // function goToPS(e) {
  //   console.log(e);
  //   const target = e.target;
  //   console.log(target);
  //   setActiveLink(target.getAttribute('href'));

  // }

  return (
    <>
      <div className="iniciar">
        <div className="iniciar-title">
          <h2 id="myHeading">REDES</h2>
          <h2 id="myHeading2">INTELIGENTES</h2>
          <h2 id="myHeading3">DE AGUA</h2>
        </div>
        <div className="iniciar-line"></div>
        <div className="iniciar-text">
          <p>
            “Innovar la ingeniería hidráulica aplicada”
          </p> 
          <button 
            className="btn btn-outline-dark btn-sm fixed-btn-ps"
            type="button"
            onClick={(event) => {
              handleClick(event, "Quienes somos");
            }}
          >
            <a href="#qs-container" className="fxd-a"><i className="fa fa-angle-down" aria-hidden="true"></i></a>
          </button>  
          
        </div>
        {/* <img src="/src/assets/Logo RIA 2019.png" alt="" />
        <button
          className="btn btn-outline-primary btn-sm"
          type="button"
        >
          <a className={"nav-link"} href="#qs-container">Ingresar</a>
        </button> */}
      </div>
    </>
  )
}
