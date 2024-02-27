
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
// import '@/layouts/MainLayoutDesktop'
import '../../layouts/MainLayoutDesktop'

// Cards
import '../todo-list/cards/Card01'
import '../todo-list/cards/Card02'

@customElement('home-desktop')
export class HomeDesktop extends LitElement {

  render() {
    return html`
            <main-layout-desktop>

                <div class='header__images'>

                </div>

                <div class='header__title'>
                    <h2>TODO LIST'S - TYPESCRIPT</h2>
                </div>

                <div class='header__body'>
                    <div class='header__body_cont_autor'>
                        <h3 class='header__body_cont_autor_title'>Autor</h3>
                        <p class='header__body_cont_autor_autor'>Andres Giraldo</p>
                    </div>

                    <div class='header__body_cont_tdetails'>
                        <h3>Detalles Tecnicos</h3>
                    </div>

                    <div class='header__body_cont_tdetails'>
                        <h4>Todo List</h4>
                        <small>Todo list basico hecho con Lit, Typescript, CSS Nativo Modular y Vistas responsivas. Solo con la opcion de agregar.</small>
                    </div>
                    
                    <div class='header__body_cont_tdetails'>
                        <h4>Entorno</h4>
                        <small>El entorno tiene un enrutamiento con Lit Labs Router, Temas administrados con Lit Context y CSS Module. </small>
                    </div>
                </div>
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
            padding: 0 2rem;
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
            margin: 1rem 0;
            color: #2962FF;
        }

    `

}
