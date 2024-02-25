
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// Components
import './AboutMobile'
import './AboutDesktop'

@customElement('index-about')
export class IndexAbout extends LitElement {

  render() {

    if (window.screen.width <= 425) {
      return html`<about-mobile></about-mobile>`
    }

    if (window.screen.width > 425) {
      return html`<about-desktop></about-desktop>`
    }

    return html`Error loading components`

  }

}
