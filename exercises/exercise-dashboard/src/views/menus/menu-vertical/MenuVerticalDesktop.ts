import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('menu-vertical-desktop')
export class MenuVerticalDesktop extends LitElement {
  render() {
    return html` <h4>Menu vertical Desktop</h4> `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}
