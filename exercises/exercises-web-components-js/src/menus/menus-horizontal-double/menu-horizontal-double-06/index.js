import { LitElement, html } from 'lit';

// Components
import './MenuHorizontalDouble06Mobile.js';
import './MenuHorizontalDouble06TableLaptop.js';
import './MenuHorizontalDouble06Desktop.js';

export class IndexMenuHorizontalDouble06 extends LitElement {
  render() {
    if (window.screen.width > 1024) {
      return html` <menu-horizontal-double-06-desktop></menu-horizontal-double-06-desktop>`;
    }
    if (window.screen.width > 425 && window.screen.width <= 1024) {
      return html` <menu-horizontal-double-06-table-laptop></menu-horizontal-double-06-table-laptop>`;
    }
    if (
      window.screen.width <= 425 ||
      window.screen.width <= 375 ||
      window.screen.width <= 320
    ) {
      return html`
        <menu-horizontal-double-06-mobile></menu-horizontal-double-06-mobile>
      `;
    }
    return html`Error al cargar el menu`;
  }
}

customElements.define(
  'index-menu-horizontal-double-06',
  IndexMenuHorizontalDouble06
);
