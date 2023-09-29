import { consume } from '@lit-labs/context';
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { myContext2 } from '../../context/context-andres/context-andres.js';

@customElement('consumer-element-2')
export class ChildElement2 extends LitElement {
  @consume({ context: myContext2, subscribe: true })
  @state()
  data!: string;

  dispatchConsumer() {
    this.dispatchEvent(
      new CustomEvent('cont', {
        detail: {
          v: `State Global desde Consumer`,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <small>Consumer (Child)</small>
      <pre>${this.data}</pre>
      <button @click="${this.dispatchConsumer}">Change</button>
    `;
  }
}
