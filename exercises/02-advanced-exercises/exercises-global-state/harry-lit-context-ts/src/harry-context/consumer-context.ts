import { consume } from '@lit-labs/context';
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { myContextH2 } from './my-context.js';

@customElement('consumer-2')
export class ChildElement2 extends LitElement {
  @consume({ context: myContextH2, subscribe: true })
  @state()
  data!: boolean;

  dispatchConsumer() {
    this.dispatchEvent(
      new CustomEvent('cont', {
        detail: {
          v: true,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <pre>${this.data}</pre>
      <button @click="${this.dispatchConsumer}">Change</button>
    `;
  }
}
