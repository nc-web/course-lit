import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('button-basic-red')
export class ButtonBasicRed extends LitElement {
  render() {
    return html` <button><slot>Boton Red</slot></button> `
  }

  static styles = css`
    :host {
      display: inline-block;
      margin: 0;
      padding: 0;
    }

    button {
      padding: 0.3rem 0.5rem;
      border-radius: 0.5rem;
      border-style: none;
      cursor: pointer;
      color: #ffffff;
      background-color: #9e9e9e;
      transition: 0.3s;
    }

    button:hover {
      background-color: #eb0000;
    }
  `
}
