import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './router/routes.js';

export const router = new Router(document.querySelector('#outlet'));

router.setRoutes(routes);

// import './views/home/index.js'

@customElement('lit-router-vaadin-ts')
export class LitRouterVaadinTs extends LitElement {
  render() {
    return html`
      <main>
        <nav>
          <a href="/">Home</a>
          <a href="#section-01">Section 01</a>
          <a href="#section-02">Section 02</a>
          <a href="#section-03">Section 03</a>
          <a href="#section-04">Section 04</a>
          <a href="${router.urlForPath('/login')}">Login</a>
          <!-- <page-home></page-home> -->
        </nav>
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
