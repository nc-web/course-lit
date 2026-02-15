import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import './main-menu.js'

@customElement('my-element')
export class MyElement extends LitElement {
  

  render() {
    return html`
      <slot></slot>
      <div>
        <main-menu></main-menu>
      </div>
    `
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}