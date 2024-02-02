
import { LitElement, css, html } from 'lit'


export class MyElement extends LitElement {
  static get properties() {
    return {
    }
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
    this.count = 0
  }

  render() {
    return html`
      
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
