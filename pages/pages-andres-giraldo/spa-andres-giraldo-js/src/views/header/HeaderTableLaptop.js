import { LitElement, html, css } from 'lit';

// Components
import './cards/Card01.js';

// Images
const HTML5 = new URL('../../assets/img/html5.png', import.meta.url).href;
const CSS3 = new URL('../../assets/img/css3.png', import.meta.url).href;
const JS = new URL('../../assets/img/javascript.png', import.meta.url).href;
const React = new URL('../../assets/img/react.png', import.meta.url).href;

export class HeaderTableLaptop extends LitElement {
  render() {
    return html`
      <section class="section">
        <div class="section__main">
          <div class="section__cards">
            <div class="section__cards03">
              <card-01></card-01>
            </div>
          </div>

          <div class="section__img">
            <div class="section__cards-01">
              <img class="section__cards-01-img" src=${HTML5} alt="HTML5" />
            </div>

            <div class="section__cards-02">
              <img class="section__cards-02-img" src=${CSS3} alt="CSS3" />
            </div>

            <div class="section__cards-04">
              <img class="section__cards-03-img" src=${JS} alt="JS" />
            </div>

            <div class="section__cards-05">
              <img class="section__cards-04-img" src=${React} alt="React" />
            </div>
          </div>
        </div>
      </section>
    `;
  }

  static styles = css`
    :host {
      display: block;
      height: 50rem;
      margin: 0;
      padding: 0;
      background: url('../../assets/img/background-01.webp');
      // filter: blur(2px);
    }

    .section {
      padding: 1rem;
    }

    .section__main {
      position: relative;
      top: 17rem;
      left: 0;
    }

    .section__cards {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
    }

    .section__img {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .section__cards-01-img {
      width: 10rem;
      height: 10rem;
    }

    .section__cards-02-img {
      width: 10rem;
      height: 10rem;
    }

    .section__cards-03-img {
      width: 10rem;
      height: 10rem;
    }

    .section__cards-04-img {
      width: 10rem;
      height: 10rem;
    }
  `;
}

customElements.define('header-table-laptop', HeaderTableLaptop);
