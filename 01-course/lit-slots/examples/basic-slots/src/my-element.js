import { LitElement, css, html } from 'lit'

import './children-slots'

export class MyElement extends LitElement {
  
  render() {
    return html`
      <div>
        <children-slot></children-slot>
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
