
import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators.js'


@customElement('login-desktop')
export class LoginDesktop extends LitElement {

  render() {
    return html`
            <div>
                <h2>Login Desktop</h2>
            </div>
        `
  }

  static styles = css`
    
    :host {
        display: block;
    }
  `

}
