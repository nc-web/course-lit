import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Components
import './HeaderDesktop.js';
import './HeaderMobile.js';

@customElement('index-header')
export class IndexNav extends LitElement {
  render() {
    if (window.screen.width > 425) {
      return html`<header-desktop></header-desktop>`;
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
      margin: 0;
      padding: 0;
    }
  `;
}
