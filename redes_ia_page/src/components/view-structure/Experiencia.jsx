import { TfiRulerPencil } from "react-icons/tfi";
import { MdOutlineComputer } from "react-icons/md";
import { PiChalkboardTeacher } from "react-icons/pi";
import { usePage } from "../hooks/usePage";


export const Experiencia = () => {

  const {handleClick} = usePage();

  return (
    <>
      <div className="c-ex-container">
        <div className="c-ex1">
          <h3>Experiencia</h3>
          <div className="line-title"></div>
        </div>
        <div className="c-ex2">
          <div className="c-ex2-1" id="c-ex2-1">
            
          </div>
          <div className="c-ex2-2-3-container">
            <div className="c-ex2-2">
              <div className="c-ex2-2-1" id="c-ex2-2-1">
                <div className="ex-fg">
                  <TfiRulerPencil/>

                </div>
                <h5>PROYECTOS</h5>
                <div className="line-ex"></div>
                <p>Se han realizado más de 30 proyectos desde el año 2014</p>
              </div>
              <div className="c-ex2-2-2" id="c-ex2-2-2">
                <div className="ex-fg">
                  <MdOutlineComputer/>
                </div>
                  <h5>DESARROLLO Y AUTOMATIZACIÓN</h5>
                  <div className="line-ex"></div>
                  <p>Automatización de porocesos en proyectos. El software Hydro se encuentra instalado y operando en 4 sistemas de agua potable desde su creación en el año 2021</p>
                </div>
              <div className="c-ex2-2-3" id="c-ex2-2-3">
              <div className="ex-fg">
                <PiChalkboardTeacher/>
              </div>
                <h5>CURSOS DE CAPACITACIÓN</h5>
                <div className="line-ex"></div>
                <p>Especialistas con mas de 50 cursos impartidos en sistemas de agua potable de toda la republica mexicana</p>
              </div>
            </div>
          <div className="c-ex3">
              <div className="c-ex3-1">
                <h5>CLIENTES</h5>
                <div className="line-title"></div>
              </div>
              <div className="c-ex3-2">
                <div className="clients-img">
                  <div className="ex-fixed-btns-container">
                    <button 
                      className="btn btn-outline-dark btn-sm fixed-btn-ps"
                      type="button"
                      onClick={(event) => {
                        handleClick(event, "Productos y Servicios");
                      }}
                    >
                      <a href="#ps-container" className="fxd-a"><i className="fa fa-angle-up" aria-hidden="true"></i></a> 

                    </button>
                    <button 
                      className="btn btn-outline-dark btn-sm fixed-btn-ps"
                      type="button"
                      onClick={(event) => {
                        handleClick(event, "Cultura del Agua");
                      }}
                    >
                      <a href="#ca-container" className="fxd-a"><i className="fa fa-angle-down" aria-hidden="true"></i></a> 

                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
