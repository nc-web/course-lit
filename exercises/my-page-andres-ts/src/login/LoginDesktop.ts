import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('login-desktop')
export class LoginDesktop extends LitElement {
  render() {
    return html`
      <div>
        <h1>Login Desktop</h1>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}
