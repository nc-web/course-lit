
import { LitElement, html, css } from 'lit'

export class MyElement extends LitElement {

  render() {
    return html`
      <h2>Hola Mundo</h2>
    `
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
      background-color: aqua;
    }
  `
}

customElements.define('my-element', MyElement)