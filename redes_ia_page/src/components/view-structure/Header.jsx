import { useEffect, useState } from "react";
import { usePage } from "../hooks/usePage";


export const Header = () => {

  const {
    viewModal
  } = usePage();

  return (
    <>
    <div className={`page-header ${viewModal ? 'hide' : ''}`}>
      <header className="nav-container" id="header-container">
        <div className="nav-bar">
          <nav className="nav-main">
            <img src="/src/assets/brand_logo_solo_sinFondo.jpg" alt="Logo_RIA" className="nav-brand"/>
            <ul className="nav-menu">
              <li className="nav-item">
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item"> 
                <a className="nav-link" href="#qs-container">Quienes somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ps-container">Productos y Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ex-container">Experiencia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ca-container">Cultura del Agua</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-container">Contacto</a>
              </li>                
            </ul>
          </nav>
        </div> 
        <hr />
      </header>

    </div>

    </>
  )
}
