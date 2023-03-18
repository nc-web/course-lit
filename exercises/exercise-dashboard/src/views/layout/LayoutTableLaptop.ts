import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('layout-table-laptop')
export class LayoutTableLaptop extends LitElement {
  render() {
    return html` <h4>Layout Table Laptop</h4> `;
  }

  static style = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
