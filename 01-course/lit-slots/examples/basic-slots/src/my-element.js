import { LitElement, css, html } from 'lit'

import './father-slot'
export class MyElement extends LitElement {
  
  render() {
    return html`
      <div>
        <father-slot>
          <h4>
            This is the child, and we're inside the parent's slot / Este es el hijo y nosotros estamos dentro del slot del padre.
          </h4>          
        </father-slot>
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
