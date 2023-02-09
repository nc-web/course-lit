import { LitElement, html, css } from 'lit';

// Components
import './views/section/index.js';

class MySectionJennygomezJs extends LitElement {
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

customElements.define('my-section-jennygomez-js', MySectionJennygomezJs);
