import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// images
const Lit = new URL('/public/img/foto1.png', import.meta.url).href;

@customElement('card-01')
export class Card01 extends LitElement {
  render() {
    return html`
      <article class="card">
        <div class="card__header">
          <img class="card__header-img" src=${Lit} alt="TiendaVirtual" />
        </div>

        <div class="card__body">
          <h1 class="card__body-tittle">Lorem Ipsum</h1>
          <h4 class="card__body-subtittle">
            Lorem Ipsum is simply the dummy text of the printers and
            typesetters.
          </h4>
          <p class="card__body-text">
            Lorem Ipsum has been the industry's standard dummy text since the
            1500s, when an unknown printer used a gallery of texts and mixed
            them in such a way that he managed to make a textbook specimen.
          </p>
        </div>

        <div class="card__footer">
          <button>Register</button>
        </div>
      </article>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
      padding: 0;
      margin: 1rem;
    }

    .card {
      width: 18.7rem;
      background-color: #283593;
      padding: 0.625rem;
      border-radius: 1rem;
      box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3);
    }

    .card__header {
      display: grid;
      justify-content: center;
    }

    .card__header-img {
      width: 19rem;
    }

    .card__body-tittle {
      color: white;
      text-align: center;
    }

    .card__body-subtittle {
      color: #e8eaf6;
    }

    .card__body-text {
      color: #9fa8da;
      text-align: center;
    }

    .card__footer {
      display: grid;
      justify-content: center;
    }
  `;
}
