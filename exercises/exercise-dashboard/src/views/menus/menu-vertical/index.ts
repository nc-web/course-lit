import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Components
import './MenuVerticalMobile.js';
import './MenuVerticalTableLaptop.js';
import './MenuVerticalDesktop.js';

@customElement('index-menu-vertical')
export class IndexMenuVertical extends LitElement {
  render() {
    if (window.screen.width > 1024) {
      return html`<menu-vertical-desktop></menu-vertical-desktop>`;
    }
    if (window.screen.width <= 768 || window.screen.width <= 1024) {
      return html`<menu-vertical-table-laptop></menu-vertical-table-laptop>`;
    }
    if (
      window.screen.width <= 425 ||
      window.screen.width <= 375 ||
      window.screen.width <= 320
    ) {
      return html`<menu-vertical-mobile></menu-vertical-mobile>`;
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
