import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'
// components
import '../src/sections/section-header/index'

export class MyElement extends LitElement {

  render() {
    return html`
      <div>
      
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0;
        margin: 0;
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
