import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './router/routes.js';

// Router
export const router = new Router(document.querySelector('#outlet'));
router.setRoutes(routes);

@customElement('lit-router-vaadin-ts')
export class LitRouterVaadinTs extends LitElement {
  render() {
    return html`
      <main>
        <nav>
          <a href="${router.urlForPath('/')}">Home</a>
          <a href="${router.urlForPath('#section-header')}">HEADER</a>
          <a href="${router.urlForPath('#section-about')}">ABOUT</a>
          <a href="#section-03">Section 03</a>
          <a href="#section-04">Section 04</a>
          <a href="${router.urlForPath('/login')}">Login</a>
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
