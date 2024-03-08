
import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators.js'

// Layouts
import '../../layouts/MainLayoutDesktop'

@customElement('login-desktop')
export class LoginDesktop extends LitElement {

  render() {
    return html`
            <main-layout-desktop>
                <h2>Login Desktop</h2>
            </main-layout-desktop>
        `
  }

  static styles = css`
    
    :host {
        display: block;
    }
  `

}
