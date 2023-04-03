import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Routes, Router } from '@lit-labs/router';


// Components
import './views/home/HomeDesktop.js';
import './views/login/LoginDesktop.js';

@customElement('lit-router-ts')
export class LitRouterTs extends LitElement {
  private _routes = new Routes(this, [
    { path: '/', render: () => html`<home-desktop></home-desktop>` },
    { path: '/login', render: () => html`<login-desktop></login-desktop>` },
  ]);

  render() {
    return html`
      <main>
        ${this._routes.outlet()}
        <h2>LIT ROUTER TS</h2>
        <a href="${this._routes.goto('/')}">Home</a>
        <a href="${this._routes.goto('/login')}">Login</a>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}
