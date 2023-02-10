import { LitElement, html, css } from 'lit';

import '../cards/Card02.js';

export class HeaderMobile extends LitElement {
  render() {
    return html`
      <section class="section">
        <div class="section__header"></div>

        <div class="section__body">
          <div class="section__body-card1">
            <card-02></card-02>
          </div>

          <div class="section__body-card1">
            <card-02></card-02>
          </div>

          <div class="section__body-card1">
            <card-02></card-02>
          </div>
        </div>
      </section>
    `;
  }

  static styles = css`
    :host {
      display: block;
      padding: 0;
      margin: 0;
    }

    .section {
      padding: 1rem;
    }

    .section__header {
      width: 100%;
      height: 18rem;
      background: linear-gradient(135deg, #9575cd, #d1c4e9);
    }

    .section__body {
      display: grid;
      grid-template-columns: 100%;
      justify-content: center;
      gap: 2rem;
      position: relative;
      bottom: 9rem;
      left: 0;
    }
  `;
}

customElements.define('header-mobile', HeaderMobile);
