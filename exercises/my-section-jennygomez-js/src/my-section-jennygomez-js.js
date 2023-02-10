import { LitElement, html, css } from 'lit';

// Components
import './views/section/index.js';
import './views/section/HeaderTableLaptop.js';

class MySectionJennygomezJs extends LitElement {
  render() {
    return html`
      <main>
        <header-table-laptop></header-table-laptop>
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
