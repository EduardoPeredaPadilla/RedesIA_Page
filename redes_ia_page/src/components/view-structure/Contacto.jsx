import { usePage } from "../hooks/usePage";

export const Contacto = () => {

  const {handleClick} = usePage();

  const handlerSubmit = (e) => {
    e.preventDefault();
    alert("Gracias por enviar tus comentarios, pronto nos pondremos e contacto contigo. Redes Inteligentes de Agua")
  }

  return (
    <>
      <div className="c-contact-container">
        <h3>Contacto</h3>
        <div className="line-title"></div>
        <div className="contact-1">
          <p>
            Conocer la opinión de nuestros clientes es muy importante para nosotros, 
            extendemos la invitación a llenar nuestro formulario para solicitar información sobre los productos y servicios que ofrecemos.
            A la brevedad posible, uno de nuestros representantes atenderá la solicitud.
          <hr />
          </p>
          <form onSubmit={handlerSubmit}>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Nombre</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput2" placeholder="name@example.com"/>
              <label htmlFor="floatingInput2">Coreo Electrónico</label>
            </div>
            <div className="form-floating form-contact-tarea">
              <textarea className="form-control form-contact-tarea" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
              <label htmlFor="floatingTextarea2">Mensaje</label>
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-outline-primary btn-sm contact-submit-btn"
            >
              Enviar
            </button>
          </form>
          
        </div>
        <div className="contact-2">
          <div className="ex-fixed-btns-container">
            <button 
              className="btn btn-outline-dark btn-sm fixed-btn-ps"
              type="button"
              onClick={(event) => {
                handleClick(event, "Cultura del Agua");
              }}
            >
              <a href="#ca-container" className="fxd-a"><i className="fa fa-angle-up" aria-hidden="true"></i></a> 

            </button>
            <button 
              className="btn btn-outline-dark btn-sm fixed-btn-ps"
              type="button"
              onClick={(event) => {
                handleClick(event, "Inicio");
              }}
            >
              <a href="#inicio-container" className="fxd-a"><i className="fa fa-angle-double-up" aria-hidden="true"></i></a> 

            </button>
            
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="sec-footer">
            <p>| Redes Inteligentes de Agua, S.A. de C.V.</p>
            <p><i className="fa-solid fa-phone"></i> (777) 244 67 49 </p>
            <p><i className="fa-solid fa-envelope"></i> redes_ia@hotmail.com</p>
        </div>
        <div className="sec-footer sec-footer-2">
            <p>| Redes Sociales</p>
            <div className="sec-footer-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        <div className="sec-footer sec-footer-3">
            <p>| Ubicación</p>
            <div className="sec-footer-map">
                
                <p><i className="fa-solid fa-location-dot"></i>  Calle 2, #43 Col. Condominio Chapultepec, Cuernavaca, Morelos C.P. 62360</p>
            </div>
        </div>
        <div className="sec-footer_">
            <p>Copyright © 2021 Redes Inteligentes de Agua - Todos los derechos reservados.</p>
            <a id="btn_fixed">
                <i className="fab fa-whatsapp" arial-hidden="true"></i>
            </a>
        </div>
            
      </footer>
    </>
  )
}
