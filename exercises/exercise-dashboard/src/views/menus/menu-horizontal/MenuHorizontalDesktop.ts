import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('menu-horizontal-desktop')
export class MenuHorizontalDesktop extends LitElement {
  render() {
    return html` <h2>Menu Horizontal Desktop</h2> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
