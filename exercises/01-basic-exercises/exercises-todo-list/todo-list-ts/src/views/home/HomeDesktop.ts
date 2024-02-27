
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
                        <img src='${Logo}' class='header__images_logo'/>
                    </div>
                    <div class='header__images'>
                        <img class='header__images_lit' src='${Lit}'/>
                        <img class='header__images_ts' src='${TS}'/>
                    </div>

                    <div class='header__title'>
                        <h2>TODO LIST'S - TYPESCRIPT</h2>
                        <p class='header__body_cont_autor_autor'>Todo List TS es un proyecto de NC Learn para realizar ejercicios y practicar los Web Components con Lit y Typescript, 
                            Cualquier persona puede realizar un pull request con su todo list realizado. Este proyecto sera publicado junto con los otros proyectos de NC Learn en https://nc-learn.newsoftcomputer.com
                        </p>
                        
                    </div>
                </header>

                <main class='main'>
                    
                    <div class='main'>
                        <div class='main__cont_autor'>
                            <h3 class='main__cont_autor_title'>Normas & Requisitos</h3>
                            <p>- Los ejercicios se deben realizar con Lit, Typescript o cualquiera de las lbrerias instaladas o instalar cualquiera del entorno de Lit o Lit Labs 
                            </p>
                            <p>
                                - El entorno del proyecto tiene instaladas las librerias Lit, Lit Labs Router, 
                                Lit Context, Scoped Registry Mixin, Lit Motion, Lit Test y Eslint. 
                            </p>
                            <p>- Es permitido usar cualquier otra libreria de Lit o Lit Labs  </p>
                            <p>- Es permitido usar API's publicas o privadas si desea traer datos de alguna de ellas.</p>
                            <p>- Es permitido usar Local Storage para los estilos de tema u otras opciones. </p>
                            <p>- Debe de ser responsivo con vistas disponibles para dispositivos moviles, Portatiles y PC's</p>
                            <p>- No usar librerias que no sean del entorno de Lit o Lit Labs, La idea es familiarizarse con todo el entorno de herramientas de Lit</p>
                            <p>- Se puede usar data local como archivos de texto o base de datos SQLite o Redis</p>
                            <p>- Se pueden usar datos remotos, Donde la responsabilidad de las credenciales y su mal uso hecho por terceros recae en el autor.</p>
                        </div>

                        <div class='main__cont_tdetails_title'>
                            <h3>Detalles tecnicos y</h3>
                            <h3>Librerias usadas en el entorno del proyecto</h3>
                        </div>

                        <div class='main__cont_tdetails_items'>
                            <h4>LIT</h4>
                            <p>Libreria Lit 3.1.0</p>
                        </div>
                        
                        <div class='main__cont_tdetails_items'>
                            <h4>Router</h4>
                            <p>Libreria Lit Labs Router 0.1.3 ( Usado para el enrutamiento de la pagina )</p>
                        </div>

                        <div class='main__cont_tdetails_items'>
                            <h4>Estados Globales</h4>
                            <p>Libreria Lit Context 1.1.0 ( Usado para el Multi-Lenguaje y los estilos de temas )</p>
                        </div>

                        <div class='main__cont_tdetails_items'>
                            <h4>Registro de nombres</h4>
                            <p>Libreria Lit Labs Scoped Registry Mixin 1.0.3 ( Usado para evitar el uso duplicado de nombres de components )</p>
                        </div>

                        <div class='main__cont_tdetails_items'>
                            <h4>Animaciones</h4>
                            <p>Libreria Lit Labs Motion 1.0.7 ( Usado para las animaciones del proyecto )</p>
                        </div>

                        <div class='main__cont_tdetails_items'>
                            <h4>Testing</h4>
                            <p>Libreria Lit Labs Testing 0.2.3 ( Usado para los test unitarios del proyecto )</p>
                        </div>

                        <div class='main__cont_tdetails_items'>
                            <h4>Linter</h4>
                            <p>Eslint 8.56.0 ( Usado con las reglas propias de NC )</p>
                            <p>Scripts configurados para el linter : npm run lint & npm run lint-fix</p>
                        </div>

                        <div class='main__cont_tdetails_items'>
                            <h4>PWA</h4>
                            <p>Service Worker API ( Usado para convertir la pagina web en una PWA / Progresive Web Aplication )</p>
                        </div>
                    </div>
                </main>
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

        p {
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
        .header__images_logo {
            width: 10rem;
            margin-right: .5rem;
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
            display: grid;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: #FFAB00;
        }

        /* MAIN */
        .main {
            display: grid;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 2rem 0;
            padding: 0 2rem;
        }
        .main__cont_autor_title {
            color: #2962FF;
        }
        .main__cont_tdetails_title {
            margin: 4rem 0 1rem 0;
            color: #2962FF;
        }
        .main__cont_tdetails_items {
            margin: 1rem 0 1rem 0;
            color: #2962FF;
        }

    `

}
