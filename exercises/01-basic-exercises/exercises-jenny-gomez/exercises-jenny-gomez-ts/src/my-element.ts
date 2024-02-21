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
      display: block;
      margin: 0;
      padding: 0;
    }
  `
}
declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}