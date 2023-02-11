import { LitElement, html, css } from 'lit';

// Components
import './views/section-sesgado/SectionDesktop.js';
import './views/cards/CardTransparent.js';

class MySectionJennygomezJs extends LitElement {
  render() {
    return html`
      <main>
        <section-desktop></section-desktop>
        <card-trasparent></card-trasparent>
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
