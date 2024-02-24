
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('theme-menu-desktop')
export class ThemeMenuDesktop extends LitElement {

  render() {
    return html`
            <div>
                <h2>Theme Menu Desktop</h2>
            </div>
        `
  }

  static styles = css`

        :host {
            display: block;
        }

    `

}
