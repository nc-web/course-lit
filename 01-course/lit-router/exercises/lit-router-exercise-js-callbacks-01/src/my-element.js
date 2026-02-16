import { LitElement, css, html } from 'lit'

import './main-menu.js';

export class MyElement extends LitElement {

  render() {
    return html`
      <slot></slot>
      <div>
        <main-menu></main-menu>
      </div>
      
    `
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
    `
  }
}

window.customElements.define('my-element', MyElement)