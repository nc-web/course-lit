
import { html, css, LitElement } from 'lit'

export class NavMobileHorizontalBasic01 extends LitElement {
  static properties = {}

  /*
  constructor () {
    super()
  }
  */

  render () {
    return html`
      <h4>Nav Mobile</h4>
    `
  }

  static styles = css`
    :host {
      display: block;
    }
  `
}

customElements.define('nav-mobile-horizontal-basic-01', NavMobileHorizontalBasic01)
