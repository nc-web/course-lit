import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-home')
export class PageHome extends LitElement {
  render() {
    return html` <h1>Page Index</h1> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
