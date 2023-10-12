
import { LitElement, html, css } from 'lit'

export class ButtonBasicRed extends LitElement {
  render() {
    return html`
            <button><slot>Boton Rojo</slot></button>
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
            background-color: #ff0000;
            color: #ffffff;
            outline: none;
            transition: .2s;
        }

        button:hover {
            background-color: #931717;
        }
    `
}

customElements.define('button-basic-red', ButtonBasicRed)
