
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
// import '@layouts/MainLayout'
import '../../layouts/MainLayoutMobile'

// Cards
import '../todo-list/cards/Card01'

@customElement('home-mobile')
export class HomeMobile extends LitElement {

  render() {
    return html`

            <main-layout-mobile>
                <card-01></card-01>
            </main-layout-mobile>

        `
  }

  static styles = css`

        :host {
            display: block;
        }

    `

}
