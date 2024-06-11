import { usePage } from "../hooks/usePage";
import MyImage1 from '../../assets/ca-art1.jpg';
import MyImage2 from '../../assets/ca-art2.jpg';
import MyImage3 from '../../assets/ca-art3.jpg';

export const CulturaDelAgua = () => {

  const {handleClick} = usePage();

  return (
    <>
      <div className="c-ca-container">
        <div className="c-ca1">
          <h3>Cultura del Agua</h3>
          <div className="line-title"></div>
        </div>
        <h5>Artículos y Publicaciones</h5>
        <div className="c-ca2">
          <div id="carouselExampleCaptions" className="carousel carousel-ca carousel-dark slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item carousel-item-ca active">
                <img src={MyImage1} className="d-block h-60 w-80" alt="..."/>
                <div className="carousel-caption carousel-caption-ca d-none d-md-block">
                  <h5>REDUCCIÓN INTEGRAL DE PÉRDIDAS DE AGUA POTABLE</h5>
                  <p>Leonel Ochoa Alejo, Víctor Bourguett Ortíz</p>
                </div>
              </div>
              <div className="carousel-item carousel-item-ca">
                <img src={MyImage2}  className="d-block h-60 w-80" alt="..."/>
                <div className="carousel-caption carousel-caption-ca d-none d-md-block">
                  <h5>GUÍA PARA LA REDUCCIÓN DE LAS PÉRDIDAS DE AGUA</h5>
                  <p>Un enfoque en la gestión de la presión</p>
                </div>
              </div>
              <div className="carousel-item carousel-item-ca">
                <img src={MyImage3}  className="d-block h-60 w-80" alt="..."/>
                <div className="carousel-caption carousel-caption-ca d-none d-md-block">
                  <h5>SEREA 23</h5>
                  <p>XVII Congreso Iberoamericano de Sistemas de Abastecimiento, Saneamiento y Riego</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="c-ca3">
        <div className="c-ca-prox-publ">
          <h5>PRÓXIMAS PUBLICACIONES</h5>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur amet, explicabo veniam sequi nulla aperiam dignissimos unde quae? Pariatur inventore ducimus dolorum necessitatibus nesciunt sequi maxime reprehenderit labore architecto totam. Id modi quos doloribus ipsum, quisquam iusto architecto cupiditate explicabo?</p>
        </div>
        <div className="ex-fixed-btns-container">
          <button 
            className="btn btn-outline-dark btn-sm fixed-btn-ps"
            type="button"
            onClick={(event) => {
              handleClick(event, "Experiencia");
            }}
          >
            <a href="#ex-container" className="fxd-a"><i className="fa fa-angle-up" aria-hidden="true"></i></a> 

          </button>
          <button 
            className="btn btn-outline-dark btn-sm fixed-btn-ps"
            type="button"
            onClick={(event) => {
              handleClick(event, "Contacto");
            }}
          >
            <a href="#contact-container" className="fxd-a"><i className="fa fa-angle-down" aria-hidden="true"></i></a> 

          </button>
          
        </div>
        </div>
      </div>
    </>
  )
}
