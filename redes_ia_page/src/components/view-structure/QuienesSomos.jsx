import { usePage } from "../hooks/usePage";

export const QuienesSomos = () => {

  const {handleClick} = usePage();

  return (
    <>
      <div className="c-qs-container">
        <div className="c-qs1">
          <div className="c-qs1-1">
            <h3>Quienes somos</h3>
            <div className="line-title"></div>
          </div>
          <div className="c-qs1-2">
            <br />
            <br />
            <h6>Conscientes de nuestro compromiso ciudadano y profesional, la empresa Redes Inteligentes de Agua, S. A. de C.V., enfoca sus actividades de ingeniería hacia la:</h6>
            {/* <br /> */}
            <p>
              Sostenibilidad del hábitat que nos rodea <br />
              Ahorro del agua y energía <br />
              Conservación de las fuentes naturales de agua <br />
              Protección ante desastres naturales <br />
              Preservación de la salud humana <br />
            </p>
            <div className="c-qs1-2-1">
              <div>
                <h6>NUESTRA MISIÓN</h6>
                <p>
                  “Innovar la ingeniería hidráulica aplicada”
                </p>
              </div>
              <div>
                <h6>NUESTRA VISIÓN</h6>
                <p>
                  “Ser un grupo que innova y transfiere la ingeniería hidráulica aplicada”
                </p>
              </div>

            </div>
          </div>
          <div className="c-qs1-3">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={(event) => {
                handleClick(event, "Productos y Servicios");
              }}
            >
              <a  href="#ps-container">Productos y Servicios</a>
            </button>
          </div>
        </div>
        <div className="c-qs2">
          <div className="c-qs2-1">
            <div className="qs2-1-1">
              <h6>DIVISIÓN DE PROYECTOS Y ESTUDIOS</h6>
              <div className="line"></div>
              <br />
              <p className="qs-p-text">Realiza proyectos sobre planeación, programación, factibilidad, diseño ejecutivo, control de la operación, mantenimiento y gestión de sistemas hidráulicos</p>
            </div>
            <div className="qs2-1-2">
              <h6>ÁREA DE FINANZAS Y RECURSOS</h6>
              <div className="line"></div>
              <br />
              <p className="qs-p-text">Establece el control de la contabilidad, administración de recursos de proyectos, los estados financieros y los recursos de la sociedad</p>              
            </div>
          </div>
          <div className="c-qs2-2">
            <div className="qs2-2-1">
              <h6>DIVISIÓN DE INNOVACIÓN Y CAPACITACIÓN</h6>
              <div className="line"></div>
              <br />
              <p className="qs-p-text">Desarrolla técnicas y elementos novedosos de ingeniería hidráulica. Imparte cursos de capacitación y entrenamiento. Elabora paquetes didácticos. Ofrece servicios medición hidráulica. Desarrolla e implementa dispositivos, instrumentos, módulos de medición y laboratorio. Elabora y edita manuales, especificaciones, audiovisuales, y cualquier material de divulgación. Desarrolla e implementa programas de cómputo</p>
            </div>
            <div className="qs2-2-2">
              <h6>ÁREA DE VENTAS Y PROMOCIÓN</h6>
              <div className="line"></div>
              <br />
              <p className="qs-p-text">Se encarga de la adquisición y venta de productos y equipos hidráulicos, para construcción y mantenimiento de sistemas hidráulicos, abastecimiento de agua y evacuación de aguas residuales. Promociona y difunde los servicios de la sociedad y encuentra nuevas oportunidades de actuación. Certifica la competencia laboral y de los equipos y servicios internos de la empresa. Se encarga de la interacción de las redes sociales electrónicas, la página web y el blog de intercambio</p>
            </div>
          </div>

        </div>
      </div>

     
     {/* <div className="mv">
            
            <div className="mv-left">
                <h3>Redes Inteliges de Agua</h3>

                <h4> NUESTRA MISIÓN</h4>
                <p>
                    “Innovar la ingeniería hidráulica aplicada”
                </p>
                <h4> NUESTRA VISIÓN</h4>
                <p>
                    “Ser un grupo que innova y transfiere la ingeniería hidráulica aplicada”
                </p>
                <h4> VALORES</h4>
                <p>
                    Honestidad <br/>
                    Identidad Cultural <br/>
                    Perseverancia <br/>
                    Sociabilidad <br/>
                    Empatía
                </p>
                <p>
                    Conscientes de nuestro compromiso ciudadano y profesional, la empresa Redes Inteligentes de Agua, S. A. de C.V., enfoca sus actividades de ingeniería hacia la: <br/>
                    Sostenibilidad del hábitat que nos rodea <br/>
                    Ahorro del agua y energía <br/>
                    Conservación de las fuentes naturales de agua <br/>
                    Protección ante desastres naturales <br/>
                    Preservación de la salud humana
                </p>
                
                <p>
                    
                    <img src="/src/assets/qs5.png" alt=""/>
                    
                </p>
            </div>

            <div className="mv_img">
                <img src="/src/assets/brand_logo_solo_sinFondo.png" alt="" />
            </div>

            <div className="mv_right">
                <h3>Estructura Orgánica</h3><br/>
                <h4> DIVISIÓN DE PROYECTOS Y ESTUDIOS</h4><br/>
                <p>
                    Realiza proyectos sobre planeación, programación, factibilidad, diseño ejecutivo, control de la operación, mantenimiento y gestión de sistemas hidráulicos.<br/>
                </p>
                <h4> DIVISIÓN DE INNOVACIÓN Y CAPACITACIÓN</h4><br/>
                <p>
                    Desarrolla técnicas y elementos novedosos de ingeniería hidráulica. Imparte cursos de capacitación y entrenamiento. Elabora paquetes didácticos. Ofrece servicios medición hidráulica. Desarrolla e implementa dispositivos, instrumentos, módulos de medición y laboratorio. Elabora y edita manuales, especificaciones, audiovisuales, y cualquier material de divulgación. Desarrolla e implementa programas de cómputo.
                </p><br/>
                <h4> ÁREA DE FINANZAS Y RECURSOS</h4><br/>
                <p>
                    Establece el control de la contabilidad, los estados financieros y los recursos de la sociedad.
                </p><br/>
                <h4> ÁREA DE VENTAS Y PROMOCIÓN</h4><br/>
                <p>
                    Se encarga de la adquisición y venta de productos y equipos hidráulicos, para construcción y mantenimiento de sistemas hidráulicos, abastecimiento de agua y evacuación de aguas residuales. Promociona y difunde los servicios de la sociedad y encuentra nuevas oportunidades de actuación. Certifica la competencia laboral y de los equipos y servicios internos de la empresa. Se encarga de la interacción de las redes sociales electrónicas, la página web y el blog de intercambio
                </p>    <br/>
                <p>
                    <img src="/src/assets/qs6.png" alt=""/> 
                    <a href="#" onClick="openPDF()"> Ver Presentación en PDF</a>
                </p>
            </div>

        </div> */}

    </>
  )
}
