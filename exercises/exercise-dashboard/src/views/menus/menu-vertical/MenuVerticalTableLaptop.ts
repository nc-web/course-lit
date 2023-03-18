import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('menu-vertical-table-laptop')
export class MenuVerticalTableLaptop extends LitElement {
  render() {
    return html` <h4>Menu Vertical Table Laptop</h4> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
