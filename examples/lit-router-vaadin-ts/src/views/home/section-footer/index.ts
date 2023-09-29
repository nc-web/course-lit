import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('index-footer')
export class IndexFooter extends LitElement {
  render() {
    return html`
      <section class="section">
        <h4>SECTION FOOTER</h4>
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
      background-color: #ba68c8;
    }
  `;
}
