import { LitElement, html, css } from 'lit';

export class HeaderMobile extends LitElement {
  render() {
    return html``;
  }

  static style = css`
    :host {
      display: block;
      padding: 0;
      margin: 0;
    }
  `;
}

customElements.define('header-mobile', HeaderMobile);
