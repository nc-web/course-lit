
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'


@customElement('details-credits-tl02')
export class DetailsCreditsTL02 extends LitElement {

  render() {
    return html`
            <header class='dc'>

                <div class='dc__details'>
                    <div class='dc__details_title'>
                        <h2>Detalles Tecnicos & De Uso</h2>
                    </div>

                    <div class='dc__details_use'>
                        <h4>Detalles de uso</h4>
                        <p>Todo list de entorno grafico basico Con las opciones de Agregar, Editar, Eliminar y Chekear, Con almacenamiento temporal. </p>
                    </div>
                    
                    <div class='dc__details_technicals'>
                        <h4>Detalles tecnicos</h4>
                        <p>Todo list hecho con Lit y Typescript, Con vistas responsivas para dispositivos moviles, laptops y pc's. Con un CRUD temporal completo + Chekeo de tareas. Almacenado en memoria temporal.</p>
                    </div>
                </div>

                <div class='dc__credits'>
                    <div class='dc__credits_title'>
                        <h2>Creditos</h2>
                    </div>

                    <div class='header__body_cont_autor'>
                        <h3 class='header__body_cont_autor_title'>Autor</h3>
                        <p class='header__body_cont_autor_autor'>Andres Giraldo Arenas</p>
                    </div>

                    <div>
                        <h3>Redes & Links del Autor</h3>
                        
                        <div>
                            <span>Github: </span><a href='https://github.com/andresganc' target='_blank'><span>@andresganc</span></a>
                        </div>
                        
                        <div>
                            <span>Linkedin: </span><a href='https://www.linkedin.com/in/andresganc/' target='_blank'><span>andresganc</span></a>
                        </div>
                        
                        <div>
                            <span>X: </span><a href='https://twitter.com/andresgiraldonc' target='_blank'><span>@andresgiraldonc</span></a>
                        </div>
                        
                        <div>
                            <span>Instagram: </span><a href='https://github.com/andresganc' target='_blank'><span>@andresganc</span></a>
                        </div>
                        
                        <div>
                            <span>Web: </span><a href='http://andresgiraldo.site' target='_blank'><span>www.andresgiraldo.site</span></a>
                        </div>
                    </div>                        
                    
                </div>
            </header>
        `
  }

  static styles = css`
    
    :host {
        display: block;
    }

    small {
        color: #E0E0E0;
    }

    span {
        color: #FFFFFF;
    }

    p {
        color: #FFFFFF;
    }


    /* DC */
    .dc {
        display: block;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 2rem;
    }

    
    /* DC DETAILS */
    .dc__details{
        margin: 4rem 0;
    }
    .header__title {
        display: grid;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .dc__details_title {
        color: #FFAB00;
    }
    .dc__details_use {
        margin: 2rem 0;
        color: #2962FF;
    }
    .dc__details_technicals {
        margin: 2rem 0;
        color: #2962FF;
    }


    /* DC CREDITS */
    .dc__credits {
        margin: 4rem 0;
    }
    .dc__credits_title {
        color: #FFAB00;
    }
    .header__body_cont_autor {
        display: grid;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .header__body_cont_autor_title {
        color: #2962FF;
    }
    




  `

}
