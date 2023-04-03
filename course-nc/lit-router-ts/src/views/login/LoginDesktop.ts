import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

customElement('login-desktop');
export class LoginDesktop extends LitElement {
  render() {
    return html` <h4>LOGIN DESKTOP</h4> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
