import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('index-about')
export class IndexAbout extends LitElement {
  render() {
    return html`
      <section class="section" id="section-about">
        <h4>SECTION ABOUT</h4>
      </section>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }

    section {
      width: 100%;
      height: 40rem;
      background-color: #64b5f6;
    }
  `;
}
