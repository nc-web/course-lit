import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

customElement('home-desktop');
export class HomeDesktop extends LitElement {
  render() {
    return html` <h4>HOME DESKTOP</h4> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
