
import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

// Layout
import '../../layouts/LayoutDesktop'


@customElement('home-desktop')
export class HomeDesktop extends LitElement {

  render() {
    return html`
            <layout-desktop>
                <div>
                    <h2>HOME DESKTOP</h2>
                </div>
            </layout-desktop>
        `
  }

  static styles = css`
    
        :host {
            display: block;
        }

    `

}
