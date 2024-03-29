import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('menu-vertical-mobile')
export class MenuVerticalMobile extends LitElement {
  render() {
    return html` <h4>Menu Vertical Mobile</h4> `;
  }

  static styles = css`
    :host {
      display: inline-block;
      margin: 0;
      padding: 0;
    }
  `;
}
