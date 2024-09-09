import { LitElement, css, html } from 'lit'

// Components
// import './views/sections/section-header/index'

export class MyElement extends LitElement {

  render () {

    return html`
      <div>
        <!-- <index-section-header></index-section-header> -->
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

customElements.define('my-element', MyElement)
