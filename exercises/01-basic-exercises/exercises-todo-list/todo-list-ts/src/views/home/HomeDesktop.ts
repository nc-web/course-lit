
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
import '@layouts/MainLayout'

@customElement('home-desktop')
export class HomeDesktop extends LitElement {

  render() {
    return html`

            <main-layout-desktop>
                <div>
                    <h4>Home Layout Desktop</h4>
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
