import { html, css, LitElement } from 'lit';

const logo = new URL('./assets/open-wc-logo.svg', import.meta.url).href;
const LogoNC = new URL('./assets/logo128.png', import.meta.url).href;
const Cap = new URL('./assets/cap.webp', import.meta.url).href;

export class OpenWcWebComponentsTestJs extends LitElement {
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
      <slot></slot>
      <main>
        <slot>
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
          <p>Hello World</p>
          <button @click=${this.__increment}>increment</button>
        </slot>
      </main>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;

      ::slotted(*) {
        font-family: Roboto;
        background-color: aquamarine;
      }

      ::slotted(p) {
        color: blue;
      }

      main ::slotted(*) {
        color: red;
        background-color: aquamarine;
      }
    }
  `;
}
