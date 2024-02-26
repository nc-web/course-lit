
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layouts
import './MainLayoutDesktop'
import './MainLayoutMobile'

@customElement('main-layout')
export class MainLayout extends LitElement {

  render() {

    if (window.screen.width <= 425) {
      return html`<main-layout-mobile></main-layout-mobile>`
    }

    if (window.screen.width > 425) {
      return html`<main-layout-desktop></main-layout-desktop>`
    }

    return html`<h4>Error al cargar el layout</h4>`

  }

}
