import { LitElement, html, css } from 'lit';

// Components
import './StudiesDesktop.js';
import './StudiesMobile.js';

export class Index extends LitElement {
  render() {
    if (window.screen.width > 425) {
      return html`<nav-desktop></nav-desktop>`;
    }
    if (
      window.screen.width <= 425 ||
      window.screen.width <= 375 ||
      window.screen.width <= 320
    ) {
      return html`<nav-mobile></nav-mobile>`;
    }
    return html`Error al cargar el menu`;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}

customElements.define('index-studies', Index);
