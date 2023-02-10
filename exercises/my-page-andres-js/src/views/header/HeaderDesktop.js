import { LitElement, html, css } from 'lit';

// Components
import './cards/Card01.js';

// Images
const HTML5 = new URL('../../../assets/img/html5.png', import.meta.url).href;
const CSS3 = new URL('../../../assets/img/css3.png', import.meta.url).href;
const JS = new URL('../../../assets/img/javascript.png', import.meta.url).href;
const React = new URL('../../../assets/img/react.png', import.meta.url).href;

export class HeaderDesktop extends LitElement {
  render() {
    return html`
      <section class="section" id="section-header">
        <div classs="section__title">
          <h1 class="section__title-title">LOREM IPSUM</h1>
          <h2 class="section__title-subtitle">Lorem ipsum</h2>
        </div>
        <div class="section__cards">
          <div class="section__cards-01">
            <img class="section__cards-01-img" src=${HTML5} alt="HTML5" />
          </div>

          <div class="section__cards-02">
            <img class="section__cards-02-img" src=${CSS3} alt="CSS3" />
          </div>

          <div class="section__cards03">
            <card-01>
              <h4 slot="card__header-containertext-subtitle">ANDRES GIRALDO</h4>
            </card-01>
          </div>

          <div class="section__cards-04">
            <img class="section__cards-03-img" src=${JS} alt="JS" />
          </div>

          <div class="section__cards-05">
            <img class="section__cards-04-img" src=${React} alt="React" />
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
      background: url('assets/img/background-01.webp');
      // filter: blur(2px);
    }

    .section {
      padding: 1rem;
    }

    .section__title {
      background-color: blueviolet;
    }

    .section__title-title {
      color: #ffd600;
      font-size: 2.5rem;
      text-align: center;
    }

    .section__title-subtitle {
      color: #ff6d00;
      font-size: 2rem;
      text-align: center;
    }

    .section__cards {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      gap: 2rem;
      top: 8rem;
      left: 0rem;
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

customElements.define('header-desktop', HeaderDesktop);
