
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Components
import './ContextConsumerDecorators.js'

@customElement('lit-context-ts')
export class LitContextTs extends LitElement {

  render() {
    return html`
      <h2>LIT CONTEXT</h2>
      <my-element></my-element>
    `
  }

  static styles = css`

    :host {
      display: flex;
      margin: 0;
      padding: 0;
    }

  `
}