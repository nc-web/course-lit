
import { LitElement, html, css } from 'lit'

export class ButtonBasicBlue extends LitElement {
  render() {
    return html`
            <button><slot>Boton Azul</slot></button>
        `
  }

  static styles = css`
        :host {
            display: inline-block;
            margin: 1rem;
            padding: 0;
        }


        button {
            font-size: 1rem;
            padding: 1rem;
            border: none;
            cursor: pointer;
            background-color: #03A9F4;
            color: #ffffff;
            outline: none;
            transition: .2s;

        }

        button:hover {
            background-color: #204b5f;
        }
    `

}

customElements.define('button-basic-blue', ButtonBasicBlue)
