import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('product-desktop')
export class ProductDesktop extends LitElement {
  render() {
    return html` <h4>PRODUCT DESKTOP</h4> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
