import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Routes } from '@lit-labs/router';

@customElement('login-desktop')
export class LoginDesktop extends LitElement {

  private _routes = new Routes(this, [
    { path: '/', render: () => html`<h1>Home</h1>` },
    { path: '/about', render: () => html`<h1>Projects</h1>` },
    { path: '/login', render: () => html`<login-desktop></login-desktop>` },
  ]);

  render() {
    return html`
      <div>
        <h1>Page Login Desktop</h1>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}
