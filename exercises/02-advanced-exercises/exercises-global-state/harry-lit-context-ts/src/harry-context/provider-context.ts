import { provide } from '@lit-labs/context';
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// context
import { myContextH2 } from './my-context.js';
import './consumer-context.js';

@customElement('parent-2')
export class ParentElement2 extends LitElement {
  @provide({ context: myContextH2 })
  @state()
  data: boolean = true;

  setContext(e: CustomEvent) {
    if (e.detail.v) {
      this.data = e.detail.v;
    } else {
      this.data = false;
    }
  }

  render() {
    return html`
      <small>Provider (Parent)</small>
      <pre>${this.data}</pre>
      <button @click="${this.setContext}">Change</button>

      <br /><br />

      <consumer-2 @cont=${this.setContext}></consumer-2>
    `;
  }
}
