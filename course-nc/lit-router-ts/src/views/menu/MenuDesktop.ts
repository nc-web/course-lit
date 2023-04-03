import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

customElement('menu-desktop');
export class MenuDesktop extends LitElement {
  render() {
    return html` <h4>MENU DESKTOP</h4> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
