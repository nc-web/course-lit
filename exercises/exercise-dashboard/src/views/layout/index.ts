import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Components
import './LayoutMobile.js';
import './LayoutTableLaptop.js';
import './LayoutDesktop.js';

@customElement('index-layout')
export class IndexLayout extends LitElement {
  render() {
    if (window.screen.width > 1024) {
      return html`<layout-desktop></layout-desktop>`;
    }
    if (window.screen.width > 425 && window.screen.width <= 1024) {
      return html`<layout-table-laptop></layout-table-laptop>`;
    }
    if (
      window.screen.width <= 425 ||
      window.screen.width <= 375 ||
      window.screen.width <= 320
    ) {
      return html`<layout-mobile></layout-mobile>`;
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
