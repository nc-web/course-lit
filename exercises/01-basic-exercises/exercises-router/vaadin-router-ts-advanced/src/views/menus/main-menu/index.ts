
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// Components
import './MainMenuMobile'
import './MainMenuDesktop'

@customElement('index-main-menu')
export class IndexMainMenu extends LitElement {

  render() {

    if (window.screen.width <= 425) {
      return html`<main-menu-mobile></main-menu-mobile>`
    }

    if (window.screen.width > 425) {
      return html`<main-menu-desktop></main-menu-desktop>`
    }

    return html`Loading error component`

  }

}
