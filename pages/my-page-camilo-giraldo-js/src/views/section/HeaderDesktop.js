import { LitElement, html, css } from 'lit';

// components/
import '../cards/CardBasic01.js';

export class HeaderDesktop extends LitElement {
  render() {
    return html`
      <section class="section">
        <div class="section__header"></div>
        <div class="section__body">
          <div class="section__body-card1">
            <card-basic-01></card-basic-01>
          </div>
          <div class="section__body-card2">
            <card-basic-01></card-basic-01>
          </div>
          <div class="section__body-card3">
            <card-basic-01></card-basic-01>
          </div>
        </div>
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
      padding: 1rem;
    }

    .section__header {
      width: 100%;
      height: 18.75rem;
      background: linear-gradient(45deg, #d1c4e9, #673ab7);
    }

    .section__body {
      display: grid;
      grid-template-columns: repeat(3, auto);
      justify-content: center;
      gap: 2rem;
      position: relative;
      bottom: 4rem;
      left: 0;
    }
  `;
}

customElements.define('header-desktop', HeaderDesktop);
