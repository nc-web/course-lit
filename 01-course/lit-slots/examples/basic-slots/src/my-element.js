import { LitElement, css, html } from 'lit'

import './component-slot'
export class MyElement extends LitElement {
  
  render() {
    return html`
      <div>
        <component-slot>
          <h4>
            Here we are inside the component slot. / Aqui estamos dentro del slot del componente.
          </h4>          
        </component-slot>
      </div>
    `
  }

  _onClick() {
    this.count++
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
