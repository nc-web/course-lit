
import { LitElement, html, css } from 'lit'

export class BodyTest01 extends LitElement {

  render () {

    return html`
      <section class="section">
      </section>
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
customElements.define('body-test-01', BodyTest01)
