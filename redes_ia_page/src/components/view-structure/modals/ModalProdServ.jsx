import { Equipos } from "../../../productos/Equipos"
import micro1 from '../../../assets/micro1.png';
import micro2 from '../../../assets/micro2.png';
import micro3 from '../../../assets/micro3.png';

import macro1 from '../../../assets/macro1.png';
import macro2 from '../../../assets/macro2.png';
import macro3 from '../../../assets/macro3.png';

import valv1 from '../../../assets/valvula1.png';
import valv2 from '../../../assets/valvula2.png';
import valv3 from '../../../assets/valvula3.png';

import software1 from '../../../assets/software1-1.png';
import software1_2 from '../../../assets/software1-2.png';
import software1_3 from '../../../assets/software1-3.png';

import software2 from '../../../assets/software2-1.png';
import software2_2 from '../../../assets/software2-2.png';

export const ModalProdServ = ({closeModal}) => {

  const {
    listaMicromedidores,
    listaMacromedidores,
    listaValvulas,
    openPDF_Ficha,
  } = Equipos()

  console.log(listaMicromedidores);

  return (
    <>
      <div className="modal-ps" id="mod-todo">
        <h3>LISTA DE PRODUCTOS Y SERVICIOS</h3>
        <button 
          className="btn btn-outline-warning btn-sm"
          type="button"
          onClick={
            closeModal
          }
        >
          Regresar
        </button>
        <hr />
        <div className="modal-ps-venta-eq" id="mod-venta-eq">  
          <h4>VENTA DE EQUIPOS DE MEDICIÓN</h4>
          <div className="modal-venta-eq-container">
            <div className="m-venta-eq1">
              <div className="m-v-eq1-1">
                <h5 className="modal-ps-subtitle"><hr /> Micromedidores</h5>
                <table className="table table-striped table-hover table-sm table-micros">
                  <thead>
                    <tr>
                      <th scope="col">Clave de Producto</th>
                      <th scope="col">Modelo</th>
                      <th scope="col">Marca</th>
                      <th scope="col">Diámetro</th>
                      <th scope="col">Ficha Técnica</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(listaMicromedidores).map((micro) => (
                      <tr key={micro.claveProducto}>
                      <td>{micro.claveProducto}</td>    
                      <td>{micro.modelo}</td>    
                      <td>{micro.marca}</td>    
                      <td>{micro.diametro}</td>    
                      <td>
                        <a 
                          href="#"
                          onClick={() =>{
                            openPDF_Ficha("micro", micro.claveProducto);
                          }}
                        >
                          Ver ficha técnica
                        </a>
                      </td>    
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"

                >
                  Más infromación
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm"

                >
                  Solicitar Cotización
                </button>
              </div>
              <div className="m-v-eq1-2">
                <div id="carouselExampleCaptions" className="carousel slide carousel-micros">
                  <div className="carousel-indicators carousel-indicators-micros">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item carousel-item-micro active">
                      <img src={micro1} className="d-block carousel-img-micros" alt="..."/>
                      <div className="carousel-caption carousel-caption-micros d-none d-md-block">
                        <h5>DMP DOROT</h5>
                        <p>MEDIDOR DE FLUJO, TIPO CHORRO MULTIPLE, CUERPO DE NYLON 6.</p>
                      </div>
                    </div>
                    <div className="carousel-item carousel-item-micro">
                      <img src={micro2} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption carousel-caption-micros d-none d-md-block">
                        <h5>DOROT VOLUMÈTRICO</h5>
                        <p>MEDIDOR DE AGUA VOLUMÈTRICO PARA USO DOMÈSTICO.</p>
                      </div>
                    </div>
                    <div className="carousel-item carousel-item-micro">
                      <img src={micro3} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption carousel-caption-micros d-none d-md-block">
                        <h5>MULTIJET</h5>
                        <p>MEDIDOR DE VELOCIDAD.</p>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                  </button>
                </div>        
              </div>
            </div>
            <div className="m-venta-eq2">
              <div className="m-v-eq2-1">
                <h5 className="modal-ps-subtitle"><hr /> Macromedidores</h5>   
                <table className="table table-striped table-hover table-sm table-micros">
                  <thead>
                    <tr>
                      <th scope="col">Clave de Producto</th>
                      <th scope="col">Modelo</th>
                      <th scope="col">Marca</th>
                      <th scope="col">Diámetro Nominal(mm)</th>
                      <th scope="col">Ficha Técnica</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(listaMacromedidores).map((macro) => (
                      <tr key={macro.claveProducto}>
                      <td>{macro.claveProducto}</td>    
                      <td>{macro.modelo}</td>    
                      <td>{macro.marca}</td>    
                      <td>{macro.diametroNom}</td>    
                      <td>
                        <a 
                          href="#"
                          onClick={() =>{
                            openPDF_Ficha("macro", macro.claveProducto);
                          }}
                        >
                          Ver ficha técnica
                        </a>
                      </td>    
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"

                >
                  Más infromación
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm"

                >
                  Solicitar Cotización
                </button>       
              </div>
              <div className="m-v-eq2-2">
                <div id="carouselExampleCaptionsMACROS" className="carousel slide carousel-micros">
                  <div className="carousel-indicators carousel-indicators-micros">
                    <button type="button" data-bs-target="#carouselExampleCaptionsMACROS" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptionsMACROS" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptionsMACROS" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item carousel-item-micro active">
                      <img src={macro1} className="d-block carousel-img-micros" alt="..."/>
                      <div className="carousel-caption carousel-caption-micros d-none d-md-block">
                        <h5>MEDIDOR EQUYSIS MODELO WF</h5>
                        <p>Medidor Hélice Woltman (DN 50mm – 200mm).</p>
                      </div>
                    </div>
                    <div className="carousel-item carousel-item-micro">
                      <img src={macro2} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption carousel-caption-micros d-none d-md-block">
                        <h5>MEDIDOR EQUYSIS MODELO iF</h5>
                        <p>Medidor Paleta Tangencial (DN 50mm – 200mm).</p>
                      </div>
                    </div>
                    <div className="carousel-item carousel-item-micro">
                      <img src={macro3} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption carousel-caption-micros d-none d-md-block">
                        <h5>MEDIDOR ADCCOM SERIE WS</h5>
                        <p>Medidor Hélice Woltman con turnbina vertical Modelo WSP050.</p>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptionsMACROS" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptionsMACROS" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                  </button>
                </div>            
              </div>
            </div>
            <div className="m-venta-eq3">
              <div className="m-v-eq3-1">
                <h5 className="modal-ps-subtitle"><hr /> VÀLVULAS</h5>   
                <table className="table table-striped table-hover table-sm table-micros">
                  <thead>
                    <tr>
                      <th scope="col">Clave de Producto</th>
                      <th scope="col">Modelo</th>
                      <th scope="col">Marca</th>
                      <th scope="col">Diámetro</th>
                      <th scope="col">Ficha Técnica</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(listaValvulas).map((val) => (
                      <tr key={val.claveProducto}>
                      <td>{val.claveProducto}</td>    
                      <td>{val.modelo}</td>    
                      <td>{val.marca}</td>    
                      <td>{val.diametro}</td>    
                      <td>
                        <a 
                          href="#"
                          onClick={() =>{
                            openPDF_Ficha("valvula", val.claveProducto);
                          }}
                        >
                          Ver ficha técnica
                        </a>
                      </td>    
                      </tr>
                      ))
                    }
                  </tbody>
                </table>    
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"

                >
                  Más infromación
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-sm"

                >
                  Solicitar Cotización
                </button>         
              </div>
              <div className="m-v-eq3-2">
                <div id="carouselExampleCaptionsVALVULAS" className="carousel slide carousel-micros">
                  <div className="carousel-indicators carousel-indicators-micros">
                    <button type="button" data-bs-target="#carouselExampleCaptionsVALVULAS" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptionsVALVULAS" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptionsVALVULAS" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item carousel-item-micro active">
                      <img src={valv1} className="d-block carousel-img-micros" alt="..."/>
                      <div className="carousel-caption carousel-caption-micros d-none d-md-block">
                        <h5>VÁLVULA MODELO XX</h5>
                        <p>Válvula Lorem ipsum dolor sit amet..</p>
                      </div>
                    </div>
                    <div className="carousel-item carousel-item-micro">
                      <img src={valv2} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption carousel-caption-micros d-none d-md-block">
                        <h5>VÁLVULA MODELO XX</h5>
                        <p>Válvula Lorem ipsum dolor sit amet..</p>
                      </div>
                    </div>
                    <div className="carousel-item carousel-item-micro">
                      <img src={valv3} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption carousel-caption-micros d-none d-md-block">
                        <h5>VÁLVULA MODELO XX</h5>
                        <p>Válvula Lorem ipsum dolor sit amet..</p>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptionsVALVULAS" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptionsVALVULAS" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                  </button>
                </div>          
              </div>
            </div>
          </div>
        </div>
        <br />
        <br/>
        <div className="modal-ps-software" id="mod-software" >
          <h4> <hr />SOFTWARE PARA EVALUACIÓN Y MONITOREO</h4>
          <div className="modal-software-container">
            <div className="m-software-1">
              <h5 className="modal-ps-subtitle">HYDRO | BALANCE DE AGUA POTABLE</h5>
              <div className="m-software-1-1">
                <div id="carouselSOFTWARE1" className="carousel slide carousel-software">
                  <div className="carousel-indicators carousel-indicators-software">
                    <button type="button" data-bs-target="#carouselSOFTWARE1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselSOFTWARE1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselSOFTWARE1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item carousel-item-software active">
                      <img src={software1} className="d-block carousel-img-software" alt="..."/>
                      <div className="carousel-caption carousel-caption-software d-none d-md-block">
                        <h5>HYDRO | SOME TEXT</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, autem.</p>
                      </div>
                    </div>
                    <div className="carousel-item carousel-software-software">
                      <img src={software1_2} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption carousel-caption-software d-none d-md-block">
                        <h5>HYDRO | SOME TEXT</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, autem.</p>
                      </div>
                    </div>
                    <div className="carousel-item carousel-item-software">
                      <img src={software1_3} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption carousel-caption-software d-none d-md-block">
                        <h5>HYDRO | SOME TEXT</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, autem.</p>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselSOFTWARE1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselSOFTWARE1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                  </button>
                </div>         
              </div>
              <div className="m-software-1-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis recusandae aspernatur laboriosam magni sequi! Quae atque amet rem incidunt dolorum, earum, quia commodi expedita modi quod adipisci soluta sequi! Quae atque amet rem incidunt dolorum, earum, quia commodi expedita modi quod adipisci solutasequi! Quae atque amet rem incidunt dolorum, earum, quia commodi expedita modi quod adipisci soluta mollitia?
                </p>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"

                >
                  Más infromación
                </button>
              </div>        
            </div>          
            <div className="m-software-2">
              <h5 className="modal-ps-subtitle">RedES | EVALUACIÓN DE SECTORES HÍDRICOS</h5>
              <div className="m-software-1-1">
                <div id="carouselSOFTWARE2" className="carousel slide carousel-software">
                  <div className="carousel-indicators carousel-indicators-software">
                    <button type="button" data-bs-target="#carouselSOFTWARE2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselSOFTWARE2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselSOFTWARE2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item carousel-item-software active">
                      <img src={software2} className="d-block carousel-img-software" alt="..."/>
                      <div className="carousel-caption carousel-caption-software d-none d-md-block">
                        <h5>RedES | SOME TEXT</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, autem.</p>
                      </div>
                    </div>
                    <div className="carousel-item carousel-software-software">
                      <img src={software2_2} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption carousel-caption-software d-none d-md-block">
                        <h5>RedES | SOME TEXT</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, autem.</p>
                      </div>
                    </div>
                    <div className="carousel-item carousel-item-software">
                      <img src={software2} className="d-block w-100" alt="..."/>
                      <div className="carousel-caption carousel-caption-software d-none d-md-block">
                        <h5>RedES | SOME TEXT</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, autem.</p>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselSOFTWARE2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselSOFTWARE2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                  </button>
                </div>         
              </div>
              <div className="m-software-1-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis recusandae aspernatur laboriosam magni sequi! Quae atque amet rem incidunt dolorum, earum, quia commodi expedita modi quod adipisci soluta sequi! Quae atque amet rem incidunt dolorum, earum, quia commodi expedita modi quod adipisci solutasequi! Quae atque amet rem incidunt dolorum, earum, quia commodi expedita modi quod adipisci soluta mollitia?
                </p>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"

                >
                  Más infromación
                </button>
              </div>            
            </div>          
          </div>
        </div>
        <button 
          className="btn btn-outline-dark btn-sm fixed-btn-ps"
          type="button"
          onClick={
            closeModal
          }
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>

        </button>
        <hr />
        <div className="modal-ps-cursos" id="mod-cursos">
          <h4>CURSOS</h4>
          <div className="modal-cursos-container">
            <div className="m-cursos-1">
              <h5>CURSO | BALANCE DE AGUA POTABLE</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit. Provident amet accusantium eos earum dolore, ipsum eius autem totam illo culpa?</p>
            </div>
            <div className="m-cursos-2">
              <h5>CURSO | PÉRDIDAS DE AGUA POTABLE</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit. Provident amet accusantium eos earum dolore, ipsum eius autem totam illo culpa?</p>
            </div>
            <div className="m-cursos-3">
              <h5>CURSO | MODELACIÓN HIDRÁULICAE</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit. Provident amet accusantium eos earum dolore, ipsum eius autem totam illo culpa?</p>
            </div>
            <div className="m-cursos-4">
              <button 
                className="btn btn-outline-dark btn-sm fixed-btn-ps"
                type="button"
                onClick={
                  closeModal
                }
              >
                <i className="fa fa-angle-left" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"

              >
                Más infromación
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="modal-ps-serv-med" id="mod-serv-med">
          <h4>SERVICIOS DE MEDICIÓN</h4>
          <div className="modal-serv-med-container">
          <button 
              className="btn btn-outline-dark btn-sm fixed-btn-ps"
              type="button"
              onClick={
                closeModal
              }
            >
             <i className="fa fa-angle-left" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <hr />
        <div className="modal-ps-proyects" id="mod-proyectos">
          <h4>PROYECTOS</h4>
          <div className="modal-proyects-container">
          <button 
              className="btn btn-outline-dark btn-sm fixed-btn-ps"
              type="button"
              onClick={
                closeModal
              }
            >
              <i className="fa fa-angle-left" aria-hidden="true"></i>

            </button>
          </div>
        </div>
        <hr />
        <button 
          className="btn btn-outline-warning btn-sm"
          type="button"
          onClick={
            closeModal
          }
        >
          Regresar
        </button>
        <hr />
      </div>
    </>
  )
}
