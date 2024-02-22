
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
import '../../layouts/MainLayoutDesktop'

@customElement('home-desktop')
export class HomeDesktop extends LitElement {

  render() {
    return html`

            <main-layout-desktop>
                <div>
                    <h2>Main Layout Desktop</h2>
                </div>
            </main-layout-desktop>

        `
  }

  static styles = css`

        :host {
            display: block;
        }

    `

}
