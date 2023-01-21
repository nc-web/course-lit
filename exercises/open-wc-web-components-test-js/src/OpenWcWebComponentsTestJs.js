import { html, css, LitElement } from 'lit';

const logo = new URL('./assets/open-wc-logo.svg', import.meta.url).href;
const LogoNC = new URL('./assets/logo128.png', import.meta.url).href;
const Cap = new URL('./assets/cap.webp', import.meta.url).href;

export class OpenWcWebComponentsTestJs extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--open-wc-web-components-test-js-text-color, #000);
    }
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <div>
        <img src=${logo} alt="open-wc logo" />
      </div>
      <div>
        <img src=${LogoNC} alt="Logo NC" />
      </div>
      <div>
        <img src=${Cap} alt="Capitan America" />
      </div>
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
