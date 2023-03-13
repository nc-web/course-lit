import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators';

// Image
const Jenny = new URL('/assets/img/jenny.png', import.meta.url).href;

@customElement('card-horizontal-01')
export class CardHorizontal01 extends LitElement {
  render() {
    return html`
      <article class="card">
        <div class="card__left">
          <div class="card__left-header">
            <h3 class="card__left__header-title">Jenny Gomez Parra</h3>
          </div>

          <div class="card__left-body">
            <p class="card__left-body-text">
              t is a long established fact that a reader will be distracted by
              the
            </p>
          </div>

          <div class="card__left-footer">
            <button class="card__left-footer-button">LOREM</button>
          </div>
        </div>

        <div class="card__right">
          <div class="card__right-container-img">
            <img
              class="card__right-container-img-img"
              src=${Jenny}
              alt="Jenny"
            />
          </div>

          <div class="card__right-nav">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="#EEEEEE"
                d="M10.74 10.75L12 8L13.25 10.75L16 12L13.25 13.26L12 16L10.74 13.26L8 12L10.74 10.75Z"
              />
            </svg>

            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="#EEEEEE"
                d="M10.74 10.75L12 8L13.25 10.75L16 12L13.25 13.26L12 16L10.74 13.26L8 12L10.74 10.75Z"
              />
            </svg>

            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="#EEEEEE"
                d="M10.74 10.75L12 8L13.25 10.75L16 12L13.25 13.26L12 16L10.74 13.26L8 12L10.74 10.75Z"
              />
            </svg>

            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="#EEEEEE"
                d="M10.74 10.75L12 8L13.25 10.75L16 12L13.25 13.26L12 16L10.74 13.26L8 12L10.74 10.75Z"
              />
            </svg>
          </div>
        </div>
      </article>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
      margin: 0;
      padding: 0;
    }

    /* VIEWS DESKTOP */
    .card {
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 0.5rem;
      width: 37.5rem;
      padding: 1.5rem;
      border-radius: 1rem;
      background-color: #673ab7;
      box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
    }

    .card__left {
      display: grid;
      align-content: center;
      gap: 0.5rem;
      width: 80%;
    }

    .card__left__header-title {
      color: #ffffff;
    }

    .card__left-body-text {
      font-size: 0.9rem;
      color: #e0e0e0;
    }

    .card__left-footer {
      display: grid;
      justify-content: start;
      align-items: center;
    }

    .card__left-footer-button {
      padding: 1rem 2rem;
      border-radius: 1rem;
      border-style: none;
      color: #757575;
      background-color: #ffffff;
      cursor: pointer;
      transition: 0.3s;
    }

    .card__left-footer-button:hover {
      background-color: #2196f3;
    }

    .card__right-container-img {
      display: grid;
      justify-content: center;
      margin-bottom: 0.5rem;
    }

    .card__right-container-img-img {
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
    }

    .card__right-nav {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg {
      cursor: pointer;
    }

    /* VIEWS MOBILE TABLET  425PX */

    @media screen and (max-width: 425px) {
      .card {
        width: 18.7rem;
        grid-template-columns: 100%;
        gap: 2rem;
      }

      .card__left-header {
        text-align: center;
      }

      .card__left-body {
        text-align: center;
      }

      .card__left-footer {
        justify-content: center;
      }
    }
  `;
}
