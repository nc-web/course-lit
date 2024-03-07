
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// Components
import './BackMenuMobile'
import './BackMenuDesktop'

@customElement('index-back-menu')
export class IndexBackMenu extends LitElement {

  render() {

    if (window.screen.width <= 425) {
      return html`<back-menu-mobile></back-menu-mobile>`
    }

    if (window.screen.width > 425) {
      return html`<back-menu-desktop></back-menu-desktop>`
    }

    return html`Error loading component`

  }

}
