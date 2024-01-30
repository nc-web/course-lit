
import { LitElement, html, css } from 'lit'

export class ButtonBasicGreen extends LitElement {
  render() {
    return html`
            <button><slot>Boton Verde</slot></button>
        `
  }

  static styles = css`
        :host{
            display: inline-block;
            margin: 1rem;
            padding: 0;
        }
        
        button {
            font-size: 1rem;
            padding: 1rem;
            border: none;
            cursor: pointer;
            background-color: #34bc2d;
            color: #ffffff;
            outline: none;
            transition: .2s;
        }

        button:hover {
            background-color: #205414;
        }
    `
}

customElements.define('button-basic-green', ButtonBasicGreen)
