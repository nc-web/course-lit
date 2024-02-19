import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {

  render() {
    return html`
      <div>
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
