
import { LitElement, css, html } from 'lit'

// Components
import './nav/index.js'
import './home/index'
import './calculator01/Calculator01'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  
  static get properties() {
    return {
      
    }
  }

  constructor() {
    super()
  }

  render() {
    return html`
     <main>
        <nav-horizontal-basic-01></nav-horizontal-basic-01>
        <index-home></index-home>
        <calculator-01></calculator-01>
      </main>
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
