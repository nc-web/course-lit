import { LitElement, html, css } from 'lit';

// Components
import './HeaderDesktop.js';
import './HeaderTableLaptop.js';
import './HeaderMobile.js';

export class IndexHeader extends LitElement {
  render() {
    if (window.screen.width > 1024) {
      return html`<header-desktop></header-desktop>`;
    }
    if (window.screen.width <= 1024) {
      return html`<header-table-laptop></header-table-laptop>`;
    }
    if (
      window.screen.width <= 425 ||
      window.screen.width <= 375 ||
      window.screen.width <= 320
    ) {
      return html`<header-mobile></header-mobile>`;
    }
    return html`Error al cargar el menu`;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}

customElements.define('index-header', IndexHeader);
