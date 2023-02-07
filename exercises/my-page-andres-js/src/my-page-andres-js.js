import { LitElement, html, css } from 'lit';

// Components
import './views/nav/index.js';
import './/views/header/index.js';

class MyPageAndresJs extends LitElement {
  render() {
    return html`
      <main>
        <index-nav></index-nav>
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

customElements.define('my-page-andres-js', MyPageAndresJs);
