import { provide } from '@lit-labs/context';
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { myContext2 } from '../../context/context-andres/context-andres.js';

import '../andres-example-2/consumer-element-2.js';

@customElement('parent-element-2')
export class ParentElement2 extends LitElement {
  @provide({ context: myContext2 })
  @state()
  data: string = '...';

  setContext(e: CustomEvent) {
    if (e.detail.v) {
      this.data = e.detail.v;
    } else {
      this.data = `State Global desde Provider`;
    }
  }

  render() {
    return html`
      <small>Provider (Parent)</small>
      <pre>${this.data}</pre>
      <button @click="${this.setContext}">Change</button>

      <br /><br />

      <consumer-element-2 @cont=${this.setContext}></consumer-element-2>
    `;
  }
}
