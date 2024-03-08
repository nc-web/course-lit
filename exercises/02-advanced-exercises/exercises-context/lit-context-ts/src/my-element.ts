
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// Global Styles
import './assets/css/global-styles.css'

@customElement('my-element')
export class MyElement extends LitElement {

  render() {
    return html`
      <div>
        <h2>My Element</h2>
      </div>
    `
  }


  static styles = css`
    :host {
      display: block;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
