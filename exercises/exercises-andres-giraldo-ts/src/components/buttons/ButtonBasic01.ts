import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Vite
const Vite = new URL('/vite.svg', import.meta.url).href

// Lite
import Lit from '../../assets/lit.svg'

@customElement('button-basic-01')
export class ButtonBasic01 extends LitElement {
  render() {
    return html` <button>
        <img src=${Vite} alt='Vite'>
        <slot>BUTTON BASIC 01</slot>
        <img src=${Lit} alt='Lit'>
      </button> `
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
      background-color: #4dd0e1;
    }
  `
}
