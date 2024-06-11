import { useState } from "react"
import { Header } from "./Header"
import { Inicio } from "./Inicio"
import { QuienesSomos } from "./QuienesSomos"
import { ProductosYServ } from "./ProductosYServ"
import { Experiencia } from "./Experiencia"
import { CulturaDelAgua } from "./CulturaDelAgua"
import { Contacto } from "./Contacto"


export const RedesIAPage = () => {


  return (
    <>
      <main className="main-container" id="main-container">
        <Header/>
        <div className="view-area-container">
          <div className="inicio-container" id="inicio-container">
            <Inicio/>
          </div>
          <br />
          <div className="qs-container" id="qs-container">
            <QuienesSomos/>
          </div>
          <br />
          <div className="ps-container" id="ps-container">
            <ProductosYServ/>
          </div>
          <br />
          <div className="ex-container" id="ex-container">
            <Experiencia/>
          </div>
          <br />
          <div className="ca-container" id="ca-container">
            <CulturaDelAgua/>
          </div>
          <br />
          <br />
          <div className="contact-container" id="contact-container">
            <Contacto/>
          </div>
        </div>
      </main>
      {/* <Footer/> */}
    </>
  )
}
