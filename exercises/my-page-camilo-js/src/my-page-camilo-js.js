import { LitElement, html, css } from 'lit';

// components

import './views/section/index.js';

class MyPageCamiloJs extends LitElement {
  render() {
    return html`
      <main>
        <index-header></index-header>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `;
}

customElements.define('my-page-camilo-js', MyPageCamiloJs);
