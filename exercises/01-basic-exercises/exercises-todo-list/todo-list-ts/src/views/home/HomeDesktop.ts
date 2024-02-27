
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
// import '@/layouts/MainLayoutDesktop'
import '../../layouts/MainLayoutDesktop'

// Images
const Logo = new URL('../../../public/images/nc-web-logo.png', import.meta.url).href
const Lit = new URL('../../../public/images/lit.svg', import.meta.url).href
const TS = new URL('../../../public/images/typescript-01.png', import.meta.url).href

@customElement('home-desktop')
export class HomeDesktop extends LitElement {

  render() {
    return html`
            <main-layout-desktop>
                <header class='header'>
                    <div>
                        <img src='${Logo}' width='120px'/>
                    </div>
                    <div class='header__images'>
                        <img class='header__images_lit' src='${Lit}'/>
                        <img class='header__images_ts' src='${TS}'/>
                    </div>

                    <div class='header__title'>
                        <h2>TODO LIST'S - TYPESCRIPT</h2>
                        <small class='header__body_cont_autor_autor'>NC Todo List TS es un entorno para practicar los web components con lit y typescrip</small>
                        <small class='header__body_cont_autor_autor'>Puede realizar un pu</small>
                    </div>

                    <div class='header__body'>
                        <div class='header__body_cont_autor'>
                            <h3 class='header__body_cont_autor_title'>Requisitos</h3>
                            <p class='header__body_cont_autor_autor'>Los ejercicios se deben realizar con Lit, Typescript y Estilos con CSS Nativo Modular</p>
                        </div>

                        <div class='header__body_cont_tdetails'>
                            <h3>Detalles tecnicos del entorno</h3>
                        </div>

                        <div class='header__body_cont_tdetails'>
                            <h4>Estilos</h4>
                            <small>CSS Module</small>
                        </div>

                        <div class='header__body_cont_tdetails'>
                            <h4>Router</h4>
                            <small>Libreria Lit Labs Router.</small>
                        </div>
                        
                        <div class='header__body_cont_tdetails'>
                            <h4>Estados Globales</h4>
                            <small>Libreria Lit Context, Usado en los temas</small>
                        </div>
                    </div>
                </header>
            </main-layout-desktop>
        `
  }

  static styles = css`

        :host {
            display: block;
        }

        small {
        color: #E0E0E0;
        }

        /* HEADER */
        .header {
            display: grid;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 2rem 0;
            padding: 0 2rem;
        }
        .header__images_lit {
            width: 3rem;
            margin-right: .5rem;
        }
        .header__images_ts {
            width: 3rem;
            margin-left: .5rem;
        }
        .header__title {
            color: #FFAB00;
        }


        /* HEADER TITLE */
        .header__title {
            display: grid;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        /* HEADER BODY */
        .header__body_cont_autor {
            display: grid;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .header__body_cont_autor_title {
            color: #2962FF;
        }
        .header__body_cont_tdetails {
            margin: 2rem 0 3rem 0;
            color: #2962FF;
        }

    `

}
