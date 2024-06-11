
import { useEffect, useState } from "react";
import { usePage } from "../hooks/usePage";
import { ModalProdServ } from "./modals/ModalProdServ";

export const ProductosYServ = () => {

  const [startControl, setStartControl] = useState(true);

  const {
    handleClick,
    viewModal, 
    setViewModal,
    scrollControl
  } = usePage();
  
  // const [viewModal, setViewModal] = useState(false);

  const openModal = () => {
    setViewModal(true);
    }
    
    const closeModal = () => {
      setViewModal(false);
  }

  useEffect(() => {
    if (!startControl) {
      scrollControl();      
    }
  }, [viewModal]);

  useEffect(() => {
    setStartControl(false);
  }, []);
  


  return (
    <>
      {viewModal &&
        <div className="page-overlay">
          <ModalProdServ
            closeModal={closeModal}
          />
        </div>
      }
      <div className={`page-content ${viewModal ? 'hide' : ''}`}>
        <div className="c-ps-container">
          <div className="c-ps1">
            <div className="c-ps1-1">
              <br />
              <div className="c-ps1-1-menu">
                <h6 
                  className="ps-menu-item-first" 
                  onClick={openModal}
                >
                  <a href="#mod-todo">TODO</a>
                </h6>
                <h6 className="ps-menu-item" onClick={openModal}>
                  <a href="#mod-venta-eq">VENTA DE EQUIPOS DE MEDICIÓN</a>
                </h6>
                <h6 className="ps-menu-item" onClick={openModal}>
                  <a href="#mod-software">SOFTWARE PARA EVALUACIÓN Y MONITOREO</a>
                </h6>
                <h6 className="ps-menu-item" onClick={openModal}>
                  <a href="#mod-cursos">CURSOS</a>
                </h6>
                <h6 className="ps-menu-item" onClick={openModal}>
                  <a href="#mod-serv-med">SERVICIOS DE MEDICIÓN</a>
                </h6>
                <h6 className="ps-menu-item" onClick={openModal}>
                  <a href="#mod-proyectos">PROYECTOS</a>
                </h6>
              </div>
            </div>
            <div className="c-ps1-2">
              <div className="c-ps1-2-0">
                <h3>Productos y Servicios</h3>
                <div className="line-title2"></div>
              </div>
              <div className="c-ps1-2-1">
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus debitis beatae minus obcaecati ullam praesentium cumque ducimus.s</h5>
              </div>
              <div className="c-ps1-2-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, cupiditate? </p>
              </div>
              <div className="ps-fixed-btns-container">
                <button 
                  className="btn btn-outline-dark btn-sm fixed-btn-ps"
                  type="button"
                  onClick={(event) => {
                    handleClick(event, "Quienes somos");
                  }}
                >
                  <a href="#qs-container" className="fxd-a"><i className="fa fa-angle-up" aria-hidden="true"></i></a> 

                </button>
                <button 
                  className="btn btn-outline-dark btn-sm fixed-btn-ps"
                  type="button"
                  onClick={(event) => {
                    handleClick(event, "Experiencia");
                  }}
                >
                  <a href="#ex-container" className="fxd-a"><i className="fa fa-angle-down" aria-hidden="true"></i></a> 

                </button>
                
              </div>
            </div>
            
          </div>
          <div className="c-ps2">
            <div className="c-ps2-bloque-img1">
              <div 
                className="pd-b1-img1" 
                id="pd-b1-img1"
                onClick={openModal}
              >
                <div className="ps-img-text">
                  <div className="line-ps-img"></div>
                  <p>VENTA DE EQUIPOS DE MEDICIÓN</p>
                  <p className="text-sh">Medidores domésticos</p>
                </div>
              </div>
              <div className="pd-b1-img2" id="pd-b1-img2" onClick={openModal}>
                <div className="ps-img-text">
                  <div className="line-ps-img"></div>
                  <p>VENTA DE EQUIPOS DE MEDICIÓN</p>
                  <p className="text-sh">Macromedidores</p>
                </div>
              </div>
              <div className="pd-b1-img3" id="pd-b1-img3" onClick={openModal}>
                <div className="ps-img-text">
                  <div className="line-ps-img"></div>
                  <p>VENTA DE EQUIPOS DE MEDICIÓN</p>
                  <p className="text-sh">Válvulas de control</p>
                </div>
              </div>
              <div className="pd-b1-img4" id="pd-b1-img4" onClick={openModal}>
                <div className="ps-img-text">
                  <div className="line-ps-img"></div>
                  <p>SOFTWARE PARA EVALUACIÓN Y MONITOREO</p>
                  <p className="text-sh">Hydro | Balance de Agua Potable</p>
                </div>
              </div>
            </div>
            <div className="c-ps2-bloque-img2">
              <div className="pd-b2-img1" id="pd-b2-img1" onClick={openModal}>
                <div className="ps-img-text">
                  <div className="line-ps-img"></div>
                  <p>SOFTWARE PARA EVALUACIÓN Y MONITOREO</p>
                  <p className="text-sh2">RedES | Evaluación de sectores hídricos</p>
                </div>
              </div>
              <div className="pd-b2-img2" id="pd-b2-img2" onClick={openModal}>
                <div className="ps-img-text">
                  <div className="line-ps-img"></div>
                  <p>CURSOS</p>
                  <p className="text-sh2">Cursos de capacitación en hidráulica urbana</p>
                </div>
              </div>
              <div className="pd-b2-img3" id="pd-b2-img3" onClick={openModal}>
                <div className="ps-img-text">
                  <div className="line-ps-img"></div>
                  <p>SERVICIOS DE MEDICIÓN</p>
                  <p className="text-sh2">Mediciones de campo de diferentes tipos de parámetros</p>
                </div>
              </div>
              <div className="pd-b2-img4" id="pd-b2-img4" onClick={openModal}>
                <div className="ps-img-text">
                  <div className="line-ps-img"></div>
                  <p>PROYECTOS</p>
                  <p className="text-sh2">Desarrollo e implementación</p>
                </div>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </>
  )
}
