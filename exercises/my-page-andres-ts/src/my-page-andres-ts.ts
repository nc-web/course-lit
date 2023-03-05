import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Routes } from '@lit-labs/router';

// Components
import './views/nav/index.js';
import './views/header/index.js';
import './login/LoginDesktop.js';

@customElement('my-page-andres-ts')
export class MyPageAndresTs extends LitElement {
  private _routes = new Routes(this, [
    { path: '/', render: () => html`<h1>Home</h1>` },
    { path: '/about', render: () => html`<h1>Projects</h1>` },
    { path: '/login', render: () => html`<login-desktop></login-desktop>` },
  ]);

  @property({ type: String }) header = 'My app';

  render() {
    return html`
      <main>
        ${this._routes.outlet()}
        <a href="#" ${this._routes.goto('/login')}>Login</a>
        <index-nav></index-nav>
        <index-header></index-header>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
