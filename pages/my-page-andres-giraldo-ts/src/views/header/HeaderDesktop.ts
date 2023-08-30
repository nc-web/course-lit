import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Components
import './cards/Card01.js';

// Images
const HTML5 = new URL('../../../../assets/img/html5.png', import.meta.url).href;
const CSS3 = new URL('../../../../assets/img/css3.png', import.meta.url).href;
const JS = new URL('../../../../assets/img/javascript.png', import.meta.url)
  .href;
const React = new URL('../../../../assets/img/react.png', import.meta.url).href;

@customElement('header-desktop')
export class HeaderDesktop extends LitElement {
  render() {
    return html`
      <section class="section" id="section-header">
        <div class="section__title">
          <h1 class="section__title-title">FULL STACK DEVELOPER</h1>
        </div>
        <div class="section__cards">
          <div class="section__cards-01">
            <img class="section__cards-01-img" src=${HTML5} alt="HTML5" />
          </div>

          <div class="section__cards-02">
            <img class="section__cards-02-img" src=${CSS3} alt="CSS3" />
          </div>

          <div class="section__cards03">
            <card-01></card-01>
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
      background: url('../../assets/img/background-01.webp');
      // filter: blur(2px);
    }

    .section {
      padding: 1rem;
    }

    .section__title {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      gap: 2rem;
      top: 10rem;
      left: 0rem;
    }

    /* @supports (background-clip: text) {
            
        } */

    .section__title-title {
      font-size: 4rem;
      font-weight: 900;
      background-image: linear-gradient(145deg, #f69d3c, #3f87a6);
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
    }

    .section__cards {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      gap: 2rem;
      top: 15rem;
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
