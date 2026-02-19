import { LitElement, css, html } from 'lit'

import './component-slot'

export class MyElement extends LitElement {
  
  render() {
    return html`
      <div>
        <component-slot>
          <h2 slot="header">📌 SLOT NAME</h2>

          <p>Uso de slots con la propiedad name para controlar varios slots de un mismo componente</p>

          <small slot="footer">© NC 2026</small>
        </component-slot>
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
