
import { html, css, LitElement } from 'lit'

// Components Desktop & Mobile
import './NavDesktopHorizontalBasic01.js'
import './NavMobileHorizontalBasic01.js'

export class NavHorizontalBasic01 extends LitElement {
  static properties = {}

  /*
  constructor () {
    super()
  }
  */

  render () {
    if (screen.width > 768) {
      return html`<nav-desktop-horizontal-basic-01 />`
    } else if (screen.width <= 768 || screen.width <= 425 || screen.width <= 375 || screen.width <= 320) {
      return html`<nav-mobile-horizontal-basic-01 />`
    } else {
      return html`<h4>Screen undefined</h4>`
    }
  }

  static styles = css`
    :host {
      display: block;
    }
  `
}

customElements.define('nav-horizontal-basic-01', NavHorizontalBasic01)
