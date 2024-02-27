
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'


@customElement('header-tl01')
export class HeaderTL01 extends LitElement {

  render() {
    return html`
            <header class='header'>
                <div class='header__title'>
                    <h2>TODO LIST 01</h2>
                </div>

                <div class='header__body'>
                    <div class='header__body_autor'>
                        <h4>Autor:</h4>
                        <p>Andres Giraldo</p>
                    </div>
                    
                    <div class='header__body_tdetails'>
                        <p>Detalles tecnicos:</p>
                        <small>Todo list de Lit, Typescript, CSS Nativo Modular y Responsivo. Con las opciones de agregar, editar, eliminar y chekear.</small>
                        <small>Enrutamiento con Lit Labs Router, Temas administrados con Lit Context y CSS Module </small>
                    </div>
                </div>
            </header>
        `
  }

  static styles = css`
    
    :host {
        display: block;
    }

    /* HEADER */
    .header {
        display: block;
        justify-content: center;
        align-items: center;
        text-align: center;
    }


    /* HEADER TITLE */
    .header__title {
        display: grid;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    /* HEADER BODY */
    .header__body_autor {
        display: grid;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

  `

}
