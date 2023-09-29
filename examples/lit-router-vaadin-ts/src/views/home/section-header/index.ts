import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('index-header')
export class IndexHeader extends LitElement {
  render() {
    return html`
      <section class="section" id="section-header">
        <h1>SECTION HEADER</h1>
      </section>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }

    .section {
      width: 100%;
      height: 40rem;
      background-color: #9575cd;
    }
  `;
}
