import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('todo-list-lit-doc-ts')
export class TodoListLitDocTs extends LitElement {

  @property({ type: String }) header = 'My app';

  render() {
    return html`
      <main>
        <h4>TODO LIST - LIT DOCUMENTATION (TS)</h4>
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
