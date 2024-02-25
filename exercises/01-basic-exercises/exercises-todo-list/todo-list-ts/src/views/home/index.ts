
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// Components
import './HomeMobile'
import './HomeDesktop'

@customElement('index-home')
export class IndexHome extends LitElement {

  render() {

    if (window.screen.width <= 425) {
      return html`<home-mobile></home-mobile>`
    }

    if (window.screen.width > 425) {
      return html`<home-desktop></home-desktop>`
    }

  }

}
