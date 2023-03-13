import { LitElement, html, css } from 'lit';

// Components
import '../cards/CardTransparent.js';

export class SectionDescktop extends LitElement {
  render() {
    return html`
      <section class="section">
        <card-trasparent> </card-trasparent>
      </section>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: 0;
      margin: 0;
      background-image: url('../../../assets/img/background-01.webp');
    }

    .section {
      width: 100%;
      height: 37.5rem;
      position: relative;
      //background-color: #688;
    }
  `;
}

customElements.define('section-desktop', SectionDescktop);
