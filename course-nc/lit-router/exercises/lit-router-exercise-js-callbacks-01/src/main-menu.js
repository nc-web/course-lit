
import { LitElement, html, css } from 'lit';
import { Router } from '@lit-labs/router';

import './pages/page-01.js';
import './pages/page-02.js';
import './pages/page-03.js';
import './pages/page-users.js';

class MainMenu extends LitElement {
  router = new Router(this, [
    {
      path: '/',
      render: () => html`<page-01></page-01>`,
    },
    {
      path: '/page02',
      render: () => html`<page-02></page-02>`,
    },
    {
      path: '/page03',
      render: () => html`<page-03></page-03>`,
    },
    {
      path: '/user/:id',
      render: ({ id }) => html`<page-users .userId=${id}></page-users>`,
      // render: ({ params }) => html`<pages-users userId=${params.id}></pages-users>`,
      
    },
    {
      path: '(.*)',
      render: () => html`<h2>404 - Página no encontrada</h2>`,
    },
  ]);

  static styles = css`
    nav a {
      margin-right: 1rem;
    }
  `;

  render() {
    return html`
      <nav>
        <a href="/">Page 1</a>
        <a href="/page02">Page 2</a>
        <a href="/page03">Page 3</a>
        <a href="/user">Users</a>
      </nav>

      <hr />

      ${this.router.outlet()}
    `;
  }
}

customElements.define('main-menu', MainMenu);
