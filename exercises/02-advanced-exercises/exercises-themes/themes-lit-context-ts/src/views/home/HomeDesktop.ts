
import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators.js'

// Layouts
import '../../layouts/MainLayoutDesktop'

@customElement('home-desktop')
export class HomeDesktop extends LitElement {

  render() {
    return html`
            <main-layout-desktop>
                <h2>Home Desktop</h2>
            </main-layout-desktop>
        `
  }

  static styles = css`
    
    :host {
        display: block;
    }
  `

}
