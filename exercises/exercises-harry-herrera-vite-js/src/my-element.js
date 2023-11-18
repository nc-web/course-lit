import { LitElement, css, html } from 'lit'

// Components
// import './views/body/Body.js'
// import './views/header/Header.js'
// import './views/pagination/Pagination.js'
import './views/pagination/form/FormPaginationdLightMode'

export class MyElement extends LitElement {

  render () {

    return html`
      <div>
        <!-- <body-test-01></body-test-01> -->
        <!-- <header-test-01></header-test-01> -->
        <!-- <pagination-test-01></pagination-test-01> -->
        <form-pagination-light-mode></form-pagination-light-mode>
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
