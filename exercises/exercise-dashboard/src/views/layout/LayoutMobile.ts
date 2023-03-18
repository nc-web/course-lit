import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('layout-mobile')
export class LayoutMobile extends LitElement {
  render() {
    return html` <h4>Layout Mobile</h4> `;
  }

  static style = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
