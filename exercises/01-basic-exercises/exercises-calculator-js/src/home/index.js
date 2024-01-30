
import { html, css, LitElement } from 'lit'

// Components
import './HomeDesktop.js'

export class HomeNC extends LitElement {
  static properties = {
    state01: { type: Number }
  }

  constructor () {
    super()
    this.state01 = 0
  }

  render () {
    if (screen.width > 768) {
      return html`<home-desktop />`
    } else if (screen.width <= 768 || screen.width <= 425 || screen.width <= 375 || screen.width <= 320) {
      return html`<nav-mobile-horizontal-basic-01 />`
    } else {
      return html`<h4>Screen undefined</h4>`
    }
  }

  static styles = css`
        :host {
            display: block;
            margin: 0;
            padding: 0;
        }
    `
}

customElements.define('index-home', HomeNC)
