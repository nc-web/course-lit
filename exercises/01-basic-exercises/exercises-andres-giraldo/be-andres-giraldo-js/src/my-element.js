import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {

  render() {
    return html`
      <div>
        <h1>Home</h1>
      </div>
    `
  }

  static styles = css`
      :host {
        margin: 0;
        padding: 0;
      }
    `
}

customElements.define('my-element', MyElement)
