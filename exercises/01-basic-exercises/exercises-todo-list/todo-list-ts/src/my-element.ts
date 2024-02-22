
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'



// Global Styels
import './assets/css/global-styles.css'

// Home
import './views/home/HomeDesktop'



@customElement('my-element')
export class MyElement extends LitElement {

  render() {
    return html`
      
    `
  }


  static styles = css`
    :host {
      display: block
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
